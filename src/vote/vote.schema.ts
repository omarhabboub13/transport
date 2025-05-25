import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Vote {
  @Prop()
  tripId: number;

  @Prop()
  studentId: number;
}
export const TaskSchema = SchemaFactory.createForClass(Vote);
export type TaskDocument = Vote & Document;