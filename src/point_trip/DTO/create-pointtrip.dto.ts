import { IsInt } from 'class-validator';

export class CreatePointTripDto {
  @IsInt()
  pointId: string;

  @IsInt()
  tripId: string;
}
