import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';


@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}
  @Post()
  createpreset(@Body() body: CreateBusDto) {
    return this.busService.createbus(body);
  }
  @Get()
  fetchPresets() {
    return this.busService.fetchAllbuses();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.busService.deletebus(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateBusDto) {
    return this.busService.updatebus(id, updated);
  }
  @Get('withtrips')
  async buswithtrips() {
    return this.busService.getBusesWithTrips();
  }
}
