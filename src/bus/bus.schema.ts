import { Prop, Schema,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Bus extends Document{
  @Prop()
  number: string;

  @Prop()
  plateNumber: string;

  @Prop()
  photo: string;

  @Prop()
  state: string;

  @Prop()
  currentLocationX: number;

  @Prop()
  currentLocationY: number;
}
export const BusSchema = SchemaFactory.createForClass(Bus);
