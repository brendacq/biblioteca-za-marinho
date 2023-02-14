import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  employeeId: string;

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
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
