import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Time extends Document {
  @Prop()
  time: string;
}
export const TimeSchema = SchemaFactory.createForClass(Time);
