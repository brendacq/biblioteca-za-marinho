import { ApiProperty } from '@nestjs/swagger';
import { LiteraryCategory } from '../../literary-category/entities/literary-category.entity';

export class CreateLiteraryWorkDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  category: LiteraryCategory;

  @ApiProperty()
  authors: string[];

  @ApiProperty()
  keywords: string[];

  @ApiProperty()
  publishingCompany: string;
}
