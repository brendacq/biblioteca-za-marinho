import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LiteraryWorksService } from './literary-works.service';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Obras Literárias')
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
    return this.literaryWorksService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLiteraryWork: CreateLiteraryWorkDto,
  ) {
    return this.literaryWorksService.update(id, updateLiteraryWork);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryWorksService.remove(id);
  }
}
