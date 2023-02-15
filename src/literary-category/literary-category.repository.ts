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

  async create(category: LiteraryCategory) {
    try {
      const newCategory = await this.model.create(category);

      return newCategory;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, category: LiteraryCategory) {
    try {
      const udpatedCategory = await this.model.findByIdAndUpdate(id, category);
      return udpatedCategory;
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
