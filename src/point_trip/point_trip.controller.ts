import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PointTripService } from './point_trip.service';
import {CreatePointTripDto} from "./DTO/create-pointtrip.dto";

@Controller('point-trip')
export class PointTripController {
  constructor(private readonly pointTripService: PointTripService) {}
  @Post()
  createpreset(@Body() body: CreatePointTripDto) {
    return this.pointTripService.createPoint_trip(body);
  }
  @Get()
  fetchPresets() {
    return this.pointTripService.fetchAllPoint_trip();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pointTripService.deletePoint_trip(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreatePointTripDto) {
    return this.pointTripService.updatePoint_trip(id, updated);
  }
  @Get('withdetails')
  async studentswithprofiles() {
    return this.pointTripService.getAllPointTripsWithDetails();
  }
}
