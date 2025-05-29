import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Line  extends Document{
  @Prop()
  name: string;
}
export const LineSchema = SchemaFactory.createForClass(Line);
