import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LiteraryCategoryService } from './literary-category.service';
import { ApiTags } from '@nestjs/swagger';
import { LiteraryCategory } from './entities/literary-category.entity';

@ApiTags('Categoria de Obras Literárias')
@Controller('literary-category')
export class LiteraryCategoryController {
  constructor(
    private readonly literaryCategoryService: LiteraryCategoryService,
  ) {}

  @Post()
  create(@Body() createLiteraryCategory: LiteraryCategory) {
    return this.literaryCategoryService.create(createLiteraryCategory);
  }

  @Get()
  findAll() {
    return this.literaryCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.literaryCategoryService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryCategoryService.remove(id);
  }
}
