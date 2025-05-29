import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
@Schema()
export class Trip extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Line' })
  lineId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Time' })
  timeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Bus' })
  busId: Types.ObjectId;
}
export const TripSchema = SchemaFactory.createForClass(Trip);
