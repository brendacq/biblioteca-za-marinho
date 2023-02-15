import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './entities/employee.entity';

@Injectable()
export class EmployeesRepository {
  constructor(
    @InjectModel('Employee') private employeeModel: Model<EmployeeDocument>,
  ) {}

  async save(employee: Employee) {
    try {
      const newEmployee = this.employeeModel.create(employee);

      return newEmployee;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, employee: Employee) {
    try {
      const updatedEmployee = await this.employeeModel.findByIdAndUpdate(
        id,
        employee,
      );

      return updatedEmployee;
    } catch (error) {
      return error;
    }
  }

  async findById(id: string) {
    try {
      const employee = await this.employeeModel.findById(id);
      return employee;
    } catch (error) {
      return error;
    }
  }

  async findByName(name: string) {
    try {
      const employee = await this.employeeModel.findOne({ name: name }).exec();
      return employee;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      await this.employeeModel.findByIdAndDelete(id);
      return {};
    } catch (error) {
      return error;
    }
  }
}
