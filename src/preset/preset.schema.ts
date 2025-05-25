import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export class Preset extends Document{
  @Prop()
  day: string;
  @Prop()
  start_hour: string;
  @Prop()
  end_hour:string;
}
export const PresetSchema = SchemaFactory.createForClass(Preset);
