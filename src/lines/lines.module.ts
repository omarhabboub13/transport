import { Module } from '@nestjs/common';
import { LinesService } from './lines.service';
import { LinesController } from './lines.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Line, LineSchema } from './line.schema';
import { Point, PointSchema } from '../points//point.schema'; // adjust path

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Line.name, schema: LineSchema }]),
    MongooseModule.forFeature([{ name: Point.name, schema: PointSchema }]),
  ],
  providers: [LinesService],
  controllers: [LinesController],
})
export class LinesModule {}
