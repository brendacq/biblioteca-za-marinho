import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { LiteraryCategory } from '../../literary-category/entities/literary-category.entity';

export type LiteraryWorkDocument = HydratedDocument<LiteraryWork>;
@Schema()
export class LiteraryWork {
  @Prop({ type: String })
  title: string;

  @Prop({ type: LiteraryCategory })
  category: LiteraryCategory;

  @Prop({ type: [String] })
  authors: string[];

  @Prop({ type: [String] })
  keywords: string[];

  @Prop({ type: String })
  publishingCompany: string;

  @Prop({ type: String })
  status: string;
}

export const LiteraryWorkSchema = SchemaFactory.createForClass(LiteraryWork);
