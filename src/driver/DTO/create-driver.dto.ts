import { IsString } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  name: string;
  @IsString()
  phone: string;
}
// export class UpdateDriverDto extends PartialType(CreateDriverDto) {}
