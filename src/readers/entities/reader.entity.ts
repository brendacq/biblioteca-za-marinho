import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { READER_CATEGORY } from '../../shared/constants';
import { ApiPropertyOptional } from '@nestjs/swagger';

export type ReaderDocument = HydratedDocument<Reader>;

class Address {
  @Prop()
  addressLine: string;

  @Prop()
  city: string;

  @Prop()
  uf: string;
}

class ContactInfo {
  @Prop()
  phone: string;

  @ApiPropertyOptional()
  email: string;
}

@Schema()
export class Reader {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  address: Address;

  @Prop({ type: String })
  contact: ContactInfo;

  @Prop({ type: Number })
  documentNumber: number;

  @Prop({ type: READER_CATEGORY })
  category: string;
}

export const ReaderSchema = SchemaFactory.createForClass(Reader);
