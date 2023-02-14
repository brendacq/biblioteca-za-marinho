import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LITERARY_WORKS_CATEGORY } from 'src/shared/constants';

export type LiteraryCategoryDocument = HydratedDocument<LiteraryCategory>;

@Schema()
export class LiteraryCategory {
  @Prop()
  code: number;

  @Prop()
  description: LITERARY_WORKS_CATEGORY;

  @Prop()
  maxLoanDays: number;

  @Prop()
  dailyFee: number;
}

export const LiteraryCategorySchema =
  SchemaFactory.createForClass(LiteraryCategory);
