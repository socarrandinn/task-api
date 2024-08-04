import { IsBoolean, IsDate, IsString, IsOptional } from "class-validator";

export class CreateTaskDto {

  @IsString()
  task: string

  @IsBoolean()
  @IsOptional()
  completed?: boolean

  @IsDate()
  @IsOptional()
  createAt?: string
}
