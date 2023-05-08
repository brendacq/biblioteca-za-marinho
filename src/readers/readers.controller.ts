import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ReadersService } from './readers.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Leitores')
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
    return this.readersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() reader: CreateReaderDto) {
    return this.readersService.update(id, reader);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readersService.remove(id);
  }
}
