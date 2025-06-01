import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class Preset extends Document {
  @Prop()
  day: string;
  @Prop()
  start_hour: string;
  @Prop()
  end_hour: string;
  @Prop({ type: Types.ObjectId, ref: 'Preset' })
  studentId: Types.ObjectId;
}
export const PresetSchema = SchemaFactory.createForClass(Preset);
