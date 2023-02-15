import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  address: string;

  @ApiProperty()
  @Prop()
  city: string;

  @ApiProperty()
  @Prop()
  uf: string;

  @ApiProperty()
  @Prop()
  phone: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
