import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LiteraryWorksService } from './literary-works.service';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Literary works')
@Controller('literary-works')
export class LiteraryWorksController {
  constructor(private readonly literaryWorksService: LiteraryWorksService) {}

  @Post()
  create(@Body() createLiteraryWorkDto: CreateLiteraryWorkDto) {
    return this.literaryWorksService.create(createLiteraryWorkDto);
  }

  @Get()
  findAll() {
    return this.literaryWorksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.literaryWorksService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryWorksService.remove(+id);
  }
}
