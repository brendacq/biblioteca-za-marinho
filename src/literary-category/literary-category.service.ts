import { BadRequestException, Injectable } from '@nestjs/common';
import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryRepository } from './literary-category.repository';
import { LITERARY_WORKS_CATEGORY } from '../shared/constants';

@Injectable()
export class LiteraryCategoryService {
  constructor(
    private readonly literaryCategoryRepository: LiteraryCategoryRepository,
  ) {}

  async create(createLiteraryCategory: LiteraryCategory) {
    const validCategory = this.validateCategory(
      createLiteraryCategory.description,
    );

    if (!validCategory) throw new BadRequestException('Categoria inválida');

    const response = await this.literaryCategoryRepository.create({
      ...createLiteraryCategory,
    });

    return response;
  }

  async validateCategory(category: string) {
    const validCategory = LITERARY_WORKS_CATEGORY.includes(category);

    return validCategory;
  }

  async update(category: LiteraryCategory) {
    const validCategory = LITERARY_WORKS_CATEGORY.includes(
      category.description,
    );

    if (!validCategory) throw new BadRequestException('Categoria inválida');

    const response = await this.literaryCategoryRepository.update({
      ...category,
    });

    return response;
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
      return error;
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
