import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LiteraryCategory } from './entities/literary-category.entity';
import { LiteraryCategoryDocument } from './entities/literary-category.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class LiteraryCategoryRepository {
  constructor(
    @InjectModel('Literary_category')
    private model: Model<LiteraryCategoryDocument>,
  ) {}

  async create(category: LiteraryCategory): Promise<LiteraryCategory> {
    const categoryExists = await this.model.exists({
      description: category.description,
    });

    if (categoryExists) throw new BadRequestException('Categoria já existe');

    const newCategory = await this.model.create(category);
    return newCategory;
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
