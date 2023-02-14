import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReaderDocument = HydratedDocument<Reader>;

@Schema()
export class Reader {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  uf: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  documentNumber: string;

  @Prop()
  category: string; //TODO: change this to reader category type
}

export const ReaderSchema = SchemaFactory.createForClass(Reader);
