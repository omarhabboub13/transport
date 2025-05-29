import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TimesService } from './times.service';
import {CreateTimeDto} from "./DTO/create-time.dto";

@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}
  @Post()
  createpreset(@Body() body: CreateTimeDto) {
    return this.timesService.createtime(body);
  }
  @Get()
  fetchPresets() {
    return this.timesService.fetchAlltimes();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.timesService.deletetime(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateTimeDto) {
    return this.timesService.updatetime(id, updated);
  }
}
