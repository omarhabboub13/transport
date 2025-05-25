import { IsString } from "class-validator";

export class CreateTimeDto {
  @IsString()
  times: string;
}

// export class UpdateTimeDto extends PartialType(CreateTimeDto) {}
