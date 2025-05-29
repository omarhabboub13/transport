import { Module } from '@nestjs/common';
import { PointTripService } from './point_trip.service';
import { PointTripController } from './point_trip.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PointTrip, Point_TripSchema } from './pointtrip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PointTrip.name, schema: Point_TripSchema },
    ]),
  ],
  controllers: [PointTripController],
  providers: [PointTripService],
})
export class PointTripModule {}
