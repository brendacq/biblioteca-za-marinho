import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeesRepository) {}

  async create(createEmployee: Employee) {
    try {
      const response = this.employeeRepository.save(createEmployee);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const response = this.employeeRepository.findAll();

    return response;
  }

  async findBy(name: string) {
    const response = this.employeeRepository.findByName(name);

    return response;
  }

  async update(id: string, employee: Employee) {
    try {
      const response = this.employeeRepository.update(id, employee);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const response = this.employeeRepository.remove(id);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
