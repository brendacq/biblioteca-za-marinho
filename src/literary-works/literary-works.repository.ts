import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  LiteraryWork,
  LiteraryWorkDocument,
} from './entities/literary-work.entity';
import { Model } from 'mongoose';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';

@Injectable()
export class LiteraryWorksRepository {
  constructor(
    @InjectModel('Literary_works') private model: Model<LiteraryWorkDocument>,
  ) {}

  async create(literaryWork: LiteraryWork): Promise<LiteraryWork> {
    try {
      const newLiteraryWork = await this.model.create(literaryWork);
      return newLiteraryWork;
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<LiteraryWork[]> {
    const literaryWorks = await this.model.find();
    return literaryWorks;
  }

  async findOne(id: string): Promise<LiteraryWork> {
    try {
      const literaryWork = await this.model.findById(id);
      return literaryWork;
    } catch (error) {
      return error;
    }
  }

  async findByTitle(title: string): Promise<LiteraryWork[]> {
    try {
      const literaryWorks = await this.model.find({ title });
      return literaryWorks;
    } catch (error) {
      return error;
    }
  }

  async update(
    id: string,
    literaryWork: CreateLiteraryWorkDto,
  ): Promise<CreateLiteraryWorkDto> {
    try {
      await this.model.findByIdAndUpdate(id, literaryWork);
      return literaryWork;
    } catch (error) {
      return error;
    }
  }

  async updateStatus(id: string, status: string): Promise<LiteraryWork> {
    try {
      const response = await this.model.findByIdAndUpdate(id, { status });
      return response;
    } catch (error) {
      return error;
    }
  }

  async delete(id: string) {
    try {
      await this.model.findByIdAndDelete(id);
      return {};
    } catch (error) {
      return error;
    }
  }
}
