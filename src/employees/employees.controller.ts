import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Funcionários')
@Controller('employees')
export class EmployeesController {}
