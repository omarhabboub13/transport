import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema()
export class Student extends Document {
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop()
  password: string;
  @Prop({ type: Types.ObjectId, ref: 'Preset' })
  presetId: Types.ObjectId;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
