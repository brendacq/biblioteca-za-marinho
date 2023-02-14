import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LiteraryCategoryService } from './literary-category.service';
import { CreateLiteraryCategoryDto } from './dto/create-literary-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria de Obras Literárias')
@Controller('literary-category')
export class LiteraryCategoryController {
  constructor(
    private readonly literaryCategoryService: LiteraryCategoryService,
  ) {}

  @Post()
  create(@Body() createLiteraryCategoryDto: CreateLiteraryCategoryDto) {
    return this.literaryCategoryService.create(createLiteraryCategoryDto);
  }

  @Get()
  findAll() {
    return this.literaryCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.literaryCategoryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryCategoryService.remove(+id);
  }
}
