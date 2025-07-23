import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CitiesDto {
  @ApiProperty({ required: true, example: 1 })
  @IsNumber()
  provinceId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  take?: number = 20;

  @IsOptional()
  @ApiProperty({ required: false })
  search?: string;
}
