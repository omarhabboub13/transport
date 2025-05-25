import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Url } from 'url';

export class Bus {
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
export const TaskSchema = SchemaFactory.createForClass(Bus);
export type TaskDocument = Bus & Document;
