import { Injectable } from '@nestjs/common';
import { CreateLiteraryCategoryDto } from './dto/create-literary-category.dto';

@Injectable()
export class LiteraryCategoryService {
  create(createLiteraryCategoryDto: CreateLiteraryCategoryDto) {
    return 'This action adds a new literaryCategory';
  }

  findAll() {
    return `This action returns all literaryCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} literaryCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} literaryCategory`;
  }
}
