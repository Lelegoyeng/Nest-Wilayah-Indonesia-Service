import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllDto } from './utils/dto/get-all.dto';
import { baseResponse } from './types/response';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('Provinces')
  provinces(@Query() dto: GetAllDto): Promise<baseResponse> {
    return this.appService.provinces(dto);
  }
}
