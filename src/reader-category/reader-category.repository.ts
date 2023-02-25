import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReaderCategory } from './entities/reader-category.entity';
import { ReaderCategoryDocument } from './entities/reader-category.entity';

@Injectable()
export class ReaderCategoryRepository {
  constructor(
    @InjectModel('Reader_category')
    private model: Model<ReaderCategoryDocument>,
  ) {}

  async create(category: ReaderCategory): Promise<ReaderCategory> {
    const categoryExists = await this.model.exists({
      description: category.description,
    });

    if (categoryExists) throw new BadRequestException('Categoria já existe');

    const newCategory = await this.model.create(category);
    return newCategory;
  }

  async update(
    id: string,
    category: ReaderCategory,
  ): Promise<ReaderCategory | any> {
    try {
      await this.model.findByIdAndUpdate(id, {
        ...category,
      });
      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<ReaderCategory[]> {
    try {
      const categories = this.model.find();
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<ReaderCategory> {
    try {
      const category = this.model.findById(id);

      if (!category) throw new NotFoundException('Categoria não encontrada');

      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const category = await this.model.findByIdAndDelete(id);

      if (!category) throw new NotFoundException('Categoria não encontrada');

      return {};
    } catch (error) {
      throw new Error(error);
    }
  }
}
