import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
@Schema()
export class PointTime extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Point' })
  pointId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Time' })
  timeId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Bus' })
  busId: Types.ObjectId;
}
export const Point_TimeSchema = SchemaFactory.createForClass(PointTime);
