import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { baseResponse } from './types/response';
import { ProvincesDto } from './dto/provinces.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('provinces')
  provinces(@Query() dto: ProvincesDto): Promise<baseResponse> {
    return this.appService.provinces(dto);
  }

  @Get('cities')
  cities(@Query() dto: ProvincesDto): Promise<baseResponse> {
    return this.appService.provinces(dto);
  }

  @Get('districts')
  districts(@Query() dto: ProvincesDto): Promise<baseResponse> {
    return this.appService.provinces(dto);
  }

  @Get('subdistricts')
  subdistricts(@Query() dto: ProvincesDto): Promise<baseResponse> {
    return this.appService.provinces(dto);
  }
}
