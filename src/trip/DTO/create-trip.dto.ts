import { IsInt } from 'class-validator';

export class CreateTripDto {
  @IsInt()
  lineId: string;

  @IsInt()
  timeId: string;

  @IsInt()
  busId?: string;
}
