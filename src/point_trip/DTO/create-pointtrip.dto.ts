import { IsInt } from "class-validator";

export class CreatePointTripDto {
  @IsInt()
  pointId: number;

  @IsInt()
  tripId: number;
}

// export class UpdatePointTripDto extends PartialType(CreatePointTripDto) {}
