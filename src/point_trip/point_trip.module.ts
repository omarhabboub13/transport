import { Module } from '@nestjs/common';
import { PointTripService } from './point_trip.service';
import { PointTripController } from './point_trip.controller';

@Module({
  controllers: [PointTripController],
  providers: [PointTripService],
})
export class PointTripModule {}
