import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
@Schema()
export class PointTrip extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Point' })
  pointId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Trip' })
  tripId: Types.ObjectId;
}
export const Point_TripSchema = SchemaFactory.createForClass(PointTrip);
