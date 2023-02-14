import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { READER_CATEGORY } from 'src/shared/constants';

export type ReaderCategoryDocument = HydratedDocument<ReaderCategory>;

@Schema()
export class ReaderCategory {
  @Prop()
  code: number;

  @Prop()
  description: READER_CATEGORY;

  @Prop()
  maxLoanDays: number;
}

export const ReaderCategorySchema =
  SchemaFactory.createForClass(ReaderCategory);
