import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type LiteraryCategoryDocument = HydratedDocument<LiteraryCategory>;

@Schema()
export class LiteraryCategory {
  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  maxLoanDays: number;

  @ApiProperty()
  @Prop()
  dailyFee: number;
}

export const LiteraryCategorySchema =
  SchemaFactory.createForClass(LiteraryCategory);
