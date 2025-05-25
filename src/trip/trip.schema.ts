import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Trip {
  @Prop()
  lineId: number;

  @Prop()
  timeId: number;

  @Prop()
  busId: number;
}
export const TaskSchema = SchemaFactory.createForClass(Trip);
export type TaskDocument = Trip & Document;