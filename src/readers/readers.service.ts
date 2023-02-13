import { Injectable } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reader } from './entities/reader.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReadersService {
  constructor(
    @InjectRepository(Reader) private userRepository: Repository<Reader>,
  ) {}

  create(createReaderDto: CreateReaderDto) {
    return 'This action adds a new reader';
  }

  findAll() {
    return `This action returns all readers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reader`;
  }

  update(id: number) {
    return `This action updates a #${id} reader`;
  }

  remove(id: number) {
    return `This action removes a #${id} reader`;
  }
}
