import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
@Schema()
export class Vote extends Document {
  @Prop()
  Date:Date;
  @Prop({ type: Types.ObjectId, ref: 'PointTime' })
  point_timeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Student' })
  studentId: Types.ObjectId;
}
export const VoteSchema = SchemaFactory.createForClass(Vote);
