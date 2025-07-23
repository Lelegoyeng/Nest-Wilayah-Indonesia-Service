import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { baseResponse } from './types/response';
import { ProvincesDto } from './dto/provinces.dto';
import { CitiesDto } from './dto/cities.dto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async provinces(dto: ProvincesDto): Promise<baseResponse> {
    const { search, take = 20 } = dto;
    const queryOptions: any = {
      take: Number(take)
    };

    if (search) {
      queryOptions.where = {
        OR: [{ name: { contains: search } }]
      };
    }

    const data = await this.prismaService.provinces.findMany(queryOptions);
    const formated = data.map((item) => ({
      value: item.id,
      label: item.name
    }));
    return { data: formated };
  }

  async cities(dto: CitiesDto): Promise<baseResponse> {
    const { provinceId, search, take = 20 } = dto;

    if (!provinceId) {
      throw new BadRequestException('Province ID is required');
    }

    const queryOptions: any = {
      take: Number(take),
      where: { provinceId: Number(provinceId) }
    };

    if (search) {
      queryOptions.where.name = {
        contains: search
      };
    }

    const data = await this.prismaService.cities.findMany(queryOptions);

    const formatted = data.map((item) => ({
      value: item.id,
      label: item.name
    }));

    return { data: formatted };
  }
}
