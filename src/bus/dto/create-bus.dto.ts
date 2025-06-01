import { IsNumber, IsString } from "class-validator";

export class CreateBusDto {
  @IsString()
  number: string;

  @IsString()
  plateNumber: string;

  @IsString()
  photo: string;

  @IsString()
  state: string;

  @IsNumber()
  currentLocationX: number;

  @IsNumber()
  currentLocationY: number;
}

