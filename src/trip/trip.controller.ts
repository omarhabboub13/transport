import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './DTO/create-trip.dto';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}
  @Post()
  createtrip(@Body() body: CreateTripDto) {
    return this.tripService.createtrip(body);
  }
  @Get()
  fetchtrip() {
    return this.tripService.fetchAlltrips();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tripService.deletetrip(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateTripDto) {
    return this.tripService.updatetrip(id, updated);
  }
  @Get('withdetails')
  async studentswithprofiles() {
    return this.tripService.getAllTripsWithDetails();
  }
}
