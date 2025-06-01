import { IsInt, IsString } from 'class-validator';

export class CreatePointTimeDto {
  @IsString()
  pointId: string;

  @IsString()
  timeId: string;
  @IsString()
  busId: string;
}
