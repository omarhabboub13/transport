import { IsString } from 'class-validator';

export class CreatePresetDto {
  @IsString()
  day: string;
  @IsString()
  start_hour: string;
  @IsString()
  end_hour: string;
  @IsString()
  studentId: string;
}
