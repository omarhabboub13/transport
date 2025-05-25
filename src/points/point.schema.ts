import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class Point extends Document {
  @Prop()
  location: string;

  @Prop()
  locationX: number;

  @Prop()
  locationY: number;

  @Prop({ ref: 'lines' })
  lineId: ObjectId;
}
export const TaskSchema = SchemaFactory.createForClass(Point);
