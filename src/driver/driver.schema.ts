import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
@Schema()
export class Driver extends Document {
  @Prop()
  name: string;
  @Prop()
  phone: string;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Bus' })
  BusId: MongooseSchema.Types.ObjectId;
}
export const DriverSchema = SchemaFactory.createForClass(Driver);
