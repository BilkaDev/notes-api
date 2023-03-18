import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateNoteDto {
  @ApiProperty()
  @Length(3, 50)
  title: string;

  @ApiProperty()
  @IsString()
  content: string;
}
