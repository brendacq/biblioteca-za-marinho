import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LiteraryWorkDocument = HydratedDocument<LiteraryWork>;
@Schema()
export class LiteraryWork {
  @Prop()
  code: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  authors: string;

  @Prop()
  editor: string;

  @Prop()
  status: string;
}

export const LiteraryWorkSchema = SchemaFactory.createForClass(LiteraryWork);
