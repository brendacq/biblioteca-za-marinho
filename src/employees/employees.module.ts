import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './entities/employee.entity';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesRepository, EmployeesService],
})
export class EmployeesModule {}
