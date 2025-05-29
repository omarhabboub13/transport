import { Module } from '@nestjs/common';
import { PointService } from './points.service';
import { PointsController } from './points.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Point, PointSchema } from './point.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Point.name, schema: PointSchema }]),
  ],
  controllers: [PointsController],
  providers: [PointService],
  exports: [PointService],
})
export class PointsModule {}
