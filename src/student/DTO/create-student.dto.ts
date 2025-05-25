import { IsString } from "class-validator";

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;
  @IsString()
  password: string;
}

