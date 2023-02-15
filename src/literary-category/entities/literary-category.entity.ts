import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LITERARY_WORKS_CATEGORY } from '../../shared/constants';

export type LiteraryCategoryDocument = HydratedDocument<LiteraryCategory>;

@Schema()
export class LiteraryCategory {
  @Prop({})
  description: LITERARY_WORKS_CATEGORY;

  @Prop()
  maxLoanDays: number;

  @Prop()
  dailyFee: number;
}

export const LiteraryCategorySchema =
  SchemaFactory.createForClass(LiteraryCategory);
