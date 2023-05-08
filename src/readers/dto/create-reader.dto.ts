import { ApiProperty } from '@nestjs/swagger';
import { ReaderCategory } from '../../reader-category/entities/reader-category.entity';

export class Address {
  @ApiProperty()
  addressLine: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  uf: string;
}

export class ContactInfo {
  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}

export class CreateReaderDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: Address;

  @ApiProperty()
  contact: ContactInfo;

  @ApiProperty()
  documentNumber: number;

  @ApiProperty()
  category: ReaderCategory;
}
