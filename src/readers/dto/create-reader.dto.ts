import { ApiProperty } from '@nestjs/swagger';

export class CreateReaderDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  uf: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  documentNumber: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  birthday: Date;
}
