import { Injectable } from '@nestjs/common';
import { CreateLiteraryWorkDto } from './dto/create-literary-work.dto';
import { LiteraryWork } from './entities/literary-work.entity';

@Injectable()
export class LiteraryWorksService {
  create(createLiteraryWorkDto: CreateLiteraryWorkDto) {
    return 'This action adds a new literaryWork';
  }

  findAll() {
    return `This action returns all literaryWorks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} literaryWork`;
  }

  update(id: number) {
    return `This action updates a #${id} literaryWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} literaryWork`;
  }
}
