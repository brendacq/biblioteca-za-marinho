import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { ReadersRepository } from './readers.repository';
import { READER_CATEGORY } from '../shared/constants';
import { ReaderCategoryService } from '../reader-category/reader-category.service';

@Injectable()
export class ReadersService {
  constructor(
    private readonly readersRepository: ReadersRepository,
    private readonly readersCategoryService: ReaderCategoryService,
  ) {}

  async create(createReaderDto: CreateReaderDto) {
    const validCategory = this.readersCategoryService.validateCategory(
      createReaderDto.category.description,
    );

    if (!validCategory) throw new BadRequestException('Categoria inválida!');

    const reader = {
      ...createReaderDto,
      category: READER_CATEGORY[createReaderDto.category.description],
    };

    try {
      const createReader = await this.readersRepository.create(reader);
      return createReader;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const response = await this.readersRepository.findAll();

    return response;
  }

  async findOne(id: string) {
    const response = await this.readersRepository.findById(id);

    return response;
  }

  async update(id: string, reader: CreateReaderDto) {
    const response = await this.readersRepository.update(id, reader);

    return response;
  }

  async remove(id: string) {
    const response = await this.readersRepository.remove(id);
    return response;
  }
}
