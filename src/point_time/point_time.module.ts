import { Module } from '@nestjs/common';
import { PointTimeService } from './point_time.service';
import { PointTripController } from './point_time.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Point_TimeSchema, PointTime } from './pointtime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PointTime.name, schema: Point_TimeSchema },
    ]),
  ],
  controllers: [PointTripController],
  providers: [PointTimeService],
})
export class PointTimeModule {}
