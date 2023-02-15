import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@ApiTags('Funcionários')
@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post('create')
  create(@Body() employee: Employee) {
    const response = this.employeesService.create(employee);
    return response;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employee: Employee) {
    const response = this.employeesService.update(id, employee);
    return response;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const response = this.employeesService.remove(id);
    return response;
  }
}
