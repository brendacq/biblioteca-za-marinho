import { Module } from '@nestjs/common';
import { ReaderCategoryController } from './reader-category.controller';
import { ReaderCategoryService } from './reader-category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaderCategorySchema } from './entities/reader-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'reader_category', schema: ReaderCategorySchema },
    ]),
  ],
  controllers: [ReaderCategoryController],
  providers: [ReaderCategoryService],
})
export class ReaderCategoryModule {}
