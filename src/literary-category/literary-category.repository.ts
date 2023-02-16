import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryDocument } from './entities/literary-category.entity';

@Injectable()
export class LiteraryCategoryRepository {
  constructor(
    @InjectModel('Literary_category')
    private model: Model<LiteraryCategoryDocument>,
  ) {}

  async create(category: LiteraryCategory): Promise<LiteraryCategory> {
    try {
      const categoryExists = await this.model.exists({
        description: category.description,
      });

      if (!categoryExists) {
        const newCategory = await this.model.create(category);
        return newCategory;
      }

      throw new Error('Categoria já existe');
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(category: LiteraryCategory): Promise<LiteraryCategory | any> {
    try {
      const udpatedCategory = await this.model.updateOne(
        { description: category.description },
        category,
      );
      return udpatedCategory;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<LiteraryCategory[]> {
    try {
      const categories = this.model.find();
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<LiteraryCategory> {
    try {
      const category = this.model.findById(id);
      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByDescription(id: string): Promise<LiteraryCategory> {
    try {
      const category = this.model.findById(id);
      return category;
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      await this.model.findByIdAndDelete(id);
      return {};
    } catch (error) {
      throw new Error(error);
    }
  }
}
