import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReaderCategoryService } from './reader-category.service';
import { ReaderCategory } from './entities/reader-category.entity';

@ApiTags('Categoria de Leitores')
@Controller('reader-category')
export class ReaderCategoryController {
  constructor(private readonly readerCategoryService: ReaderCategoryService) {}

  @Get()
  async list(): Promise<ReaderCategory[]> {
    const response = await this.readerCategoryService.findAll();
    return response;
  }

  @Post()
  async create(@Body() body: ReaderCategory) {
    const newCategory = await this.readerCategoryService.save(body);
    return newCategory;
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const category = await this.readerCategoryService.findOne(id);
    return category;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: ReaderCategory) {
    const response = await this.readerCategoryService.update(id, body);
    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.readerCategoryService.remove(id);
    return response;
  }
}
