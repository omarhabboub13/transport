import { IsInt, IsNumber, IsString } from "class-validator";

export class CreatePointDto {
  @IsString()
  location: string;

  @IsNumber()
  locationX: number;

  @IsNumber()
  locationY: number;

  @IsString()
  lineId: string;
}
