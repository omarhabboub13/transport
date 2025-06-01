import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateVoteDto {
  @IsDate()
  Date: Date;
  @IsString()
  point_timeId: string;

  @IsString()
  studentId: string;
}
