import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export class Student extends Document{
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop()
  password:string;
}
export const TaskSchema = SchemaFactory.createForClass(Student);
