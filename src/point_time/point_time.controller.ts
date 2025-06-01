import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PointTimeService } from './point_time.service';
import {CreatePointTimeDto} from "./DTO/create-pointtime.dto";

@Controller('point-time')
export class PointTripController {
  constructor(private readonly pointTimeService: PointTimeService) {}
  @Post()
  createpreset(@Body() body: CreatePointTimeDto) {
    return this.pointTimeService.createPoint_time(body);
  }
  @Get()
  fetchPresets() {
    return this.pointTimeService.fetchAllPoint_time();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pointTimeService.deletePoint_time(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreatePointTimeDto) {
    return this.pointTimeService.updatePoint_time(id, updated);
  }
  @Get('withdetails')
  async studentswithprofiles() {
    return this.pointTimeService.getAllPointTimesWithDetails();
  }
}
