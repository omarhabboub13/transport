import { IsInt } from "class-validator";

export class CreateVoteDto {
  @IsInt()
  tripId: string;

  @IsInt()
  studentId: string;
}

// export class UpdateVoteDto extends PartialType(CreateVoteDto) {}
