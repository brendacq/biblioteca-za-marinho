import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './entities/employee.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
