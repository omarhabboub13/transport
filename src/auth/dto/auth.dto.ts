import {  IsEmail, IsString } from 'class-validator';

export class createAuthDTO {
  @IsString()
  phone: string;
  @IsString()
  password: string;
}
export class payloadDto {
  @IsString()
  phone: string;
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  role: string;
}
