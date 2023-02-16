import { Injectable } from '@nestjs/common';
import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryRepository } from './literary-category.repository';
import { LITERARY_WORKS_CATEGORY } from '../shared/constants';

@Injectable()
export class LiteraryCategoryService {
  constructor(
    private readonly literaryCategoryRepository: LiteraryCategoryRepository,
  ) {}

  async create(createLiteraryCategory: LiteraryCategory) {
    try {
      const validCategory =
        LITERARY_WORKS_CATEGORY[createLiteraryCategory.description];

      if (validCategory) {
        const response = await this.literaryCategoryRepository.create({
          ...createLiteraryCategory,
          description: validCategory,
        });

        return response;
      }

      throw new Error('Categoria inválida');
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(category: LiteraryCategory) {
    try {
      const validCategory = LITERARY_WORKS_CATEGORY[category.description];

      if (validCategory) {
        const response = await this.literaryCategoryRepository.update({
          ...category,
          description: validCategory,
        });
        return response;
      }
      throw new Error('Categoria inválida');
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const response = this.literaryCategoryRepository.findAll();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const response = this.literaryCategoryRepository.findOne(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const response = await this.literaryCategoryRepository.remove(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
