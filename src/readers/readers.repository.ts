import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reader, ReaderDocument } from './entities/reader.entity';
import { CreateReaderDto } from './dto/create-reader.dto';

@Injectable()
export class ReadersRepository {
  constructor(
    @InjectModel('Reader') private readerModel: Model<ReaderDocument>,
  ) {}

  async create(reader: Reader): Promise<Reader> {
    try {
      const readerExists = await this.readerModel.exists({
        documentNumber: reader.documentNumber,
      });

      if (readerExists) throw new BadRequestException('Usuário já existe!');

      const newReader = await this.readerModel.create(reader);
      return newReader;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const readers = await this.readerModel.find();

      return readers;
    } catch (error) {
      return error;
    }
  }

  async findByName(name: string) {
    try {
      const reader = await this.readerModel.findOne({ name });
      return reader;
    } catch (error) {
      return error;
    }
  }

  async findById(id: string) {
    try {
      const reader = await this.readerModel.findById(id);
      return reader;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, reader: CreateReaderDto) {
    try {
      const updatedReader = await this.readerModel.findByIdAndUpdate(
        id,
        reader,
      );
      return updatedReader;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      await this.readerModel.findByIdAndRemove(id);
      return {};
    } catch (error) {
      return error;
    }
  }
}
