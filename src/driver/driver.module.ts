import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from './driver.schema';
import { BusModule } from 'src/bus/bus.module';
import { Bus, BusSchema } from 'src/bus/bus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Driver.name, schema: DriverSchema },
      { name: Bus.name, schema: BusSchema },
    ]),
    BusModule,
  ],

  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
