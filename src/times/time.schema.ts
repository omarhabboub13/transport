import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Time {
  @Prop()
  time: string;
}
export const TaskSchema = SchemaFactory.createForClass(Time);
export type TaskDocument = Time & Document;