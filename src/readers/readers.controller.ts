import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Readers')
@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Post()
  create(@Body() createReaderDto: CreateReaderDto) {
    return this.readersService.create(createReaderDto);
  }

  @Get()
  findAll() {
    return this.readersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readersService.remove(+id);
  }
}
