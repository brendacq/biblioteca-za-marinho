import { ApiProperty } from '@nestjs/swagger';

export class CreateLiteraryWorkDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  authors: string;

  @ApiProperty()
  keywords: string;

  @ApiProperty()
  editor: string;
}
