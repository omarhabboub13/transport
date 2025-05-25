import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Driver {
  @Prop()
  name: string;
  @Prop()
  phone: string;
}
export const TaskSchema = SchemaFactory.createForClass(Driver);
export type TaskDocument = Driver & Document;
