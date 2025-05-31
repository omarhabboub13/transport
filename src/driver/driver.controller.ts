import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './DTO/create-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Post()
  createpreset(@Body() body: CreateDriverDto) {
    return this.driverService.createdriver(body);
  }
  @Get()
  fetchPresets() {
    return this.driverService.fetchAlldrivers();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.driverService.deletedriver(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updated: CreateDriverDto) {
    return this.driverService.updatedriver(id, updated);
  }
  @Get('withbus')
  async studentswithprofiles() {
    return this.driverService.getDriversWithBus();
  }
}
