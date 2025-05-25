import { IsInt } from "class-validator";

export class CreateVoteDto {
  @IsInt()
  tripId: number;

  @IsInt()
  studentId: number;
}

// export class UpdateVoteDto extends PartialType(CreateVoteDto) {}
