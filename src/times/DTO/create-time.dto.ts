import { IsString } from "class-validator";

export class CreateTimeDto {
  @IsString()
  time: string;
}

// export class UpdateTimeDto extends PartialType(CreateTimeDto) {}
