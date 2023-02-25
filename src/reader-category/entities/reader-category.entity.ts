import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ReaderCategoryDocument = HydratedDocument<ReaderCategory>;

@Schema()
export class ReaderCategory {
  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  maxLoanDays: number;
}

export const ReaderCategorySchema =
  SchemaFactory.createForClass(ReaderCategory);
