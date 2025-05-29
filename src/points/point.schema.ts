import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Types } from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class Point extends Document {
  @Prop()
  location: string;

  @Prop()
  locationX: number;

  @Prop()
  locationY: number;

  @Prop({ type: Types.ObjectId,ref: 'lines' })
  lineId: Types.ObjectId;
}
export const PointSchema = SchemaFactory.createForClass(Point);
