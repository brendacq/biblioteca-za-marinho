import { BadRequestException, Injectable } from '@nestjs/common';
import { ReaderCategoryRepository } from './reader-category.repository';
import { ReaderCategory } from './entities/reader-category.entity';
import { READER_CATEGORY } from '../shared/constants';

@Injectable()
export class ReaderCategoryService {
  constructor(
    private readonly readerCategoryRepository: ReaderCategoryRepository,
  ) {}

  async save(category: ReaderCategory) {
    const validCategory = READER_CATEGORY.includes(category.description);

    if (!validCategory) throw new BadRequestException('Categoria inválida');

    try {
      const response = this.readerCategoryRepository.create(category);
      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    const response = this.readerCategoryRepository.findAll();
    return response;
  }

  async update(id: string, category: ReaderCategory) {
    const categoryFound = await this.findOne(id);
    if (category.description !== categoryFound.description) {
      throw new BadRequestException(
        'Impossível alterar a descrição da categoria',
      );
    }

    try {
      const response = await this.readerCategoryRepository.update(id, category);
      return response;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const response = await this.readerCategoryRepository.findOne(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    const response = this.readerCategoryRepository.remove(id);
    return response;
  }
}
