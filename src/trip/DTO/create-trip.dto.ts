import { IsInt } from "class-validator";

export class CreateTripDto {
  @IsInt()
  lineId: number;

  @IsInt()
  timeId: number;

  @IsInt()
  busId: number;
}

// export class UpdateTripDto extends PartialType(CreateTripDto) {}
