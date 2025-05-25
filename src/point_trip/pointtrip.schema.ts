import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class PointTrip {
  @Prop()
  pointId: number;

  @Prop()
  tripId: number;
}
export const TaskSchema = SchemaFactory.createForClass(PointTrip);
export type TaskDocument = PointTrip & Document;