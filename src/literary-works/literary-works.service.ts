import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
import { LiteraryWork } from './entities/literary-work.entity';
import { LiteraryWorksRepository } from './literary-works.repository';
import { LiteraryCategoryRepository } from '../literary-category/literary-category.repository';
import { LiteraryStatusEnum } from '../shared/constants';
import { LiteraryCategoryService } from '../literary-category/literary-category.service';

@Injectable()
export class LiteraryWorksService {
  constructor(
    private readonly literaryWorksRepository: LiteraryWorksRepository,
    private readonly literaryCategoryService: LiteraryCategoryService,
  ) {}

  async create(
    createLiteraryWorkDto: CreateLiteraryWorkDto,
  ): Promise<LiteraryWork> {
    try {
      const validCategory = this.literaryCategoryService.validateCategory(
        createLiteraryWorkDto.category.description,
      );

      if (validCategory) {
        const response = await this.literaryWorksRepository.create({
          ...createLiteraryWorkDto,
          status: LiteraryStatusEnum.available,
        });
        return response;
      }

      throw new BadRequestException('Categoria inválida!');
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<LiteraryWork[]> {
    try {
      const response = await this.literaryWorksRepository.findAll();
      return response;
    } catch (error) {
      return error;
    }
  }

  async findAmount(title: string): Promise<any> {
    try {
      const literaryWorks = await this.literaryWorksRepository.findByTitle(
        title,
      );
      const amount = literaryWorks.length;
      return { literaryWorks, amount };
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string): Promise<LiteraryWork> {
    try {
      const response = await this.literaryWorksRepository.findOne(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(
    id: string,
    literaryWork: CreateLiteraryWorkDto,
  ): Promise<CreateLiteraryWorkDto> {
    try {
      const response = await this.literaryWorksRepository.update(
        id,
        literaryWork,
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async setStatus(id: string, status: string) {
    try {
      const response = await this.literaryWorksRepository.updateStatus(
        id,
        LiteraryStatusEnum[status],
      );

      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      const response = await this.literaryWorksRepository.delete(id);
      return response;
    } catch (error) {
      return error;
    }
  }
}
