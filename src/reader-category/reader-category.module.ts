import { Module } from '@nestjs/common';
import { ReaderCategoryController } from './reader-category.controller';
import { ReaderCategoryService } from './reader-category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaderCategorySchema } from './entities/reader-category.entity';
import { ReadersRepository } from '../readers/readers.repository';
import { ReaderCategoryRepository } from './reader-category.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Reader_category', schema: ReaderCategorySchema },
    ]),
  ],
  controllers: [ReaderCategoryController],
  providers: [ReaderCategoryRepository, ReaderCategoryService],
})
export class ReaderCategoryModule {}
