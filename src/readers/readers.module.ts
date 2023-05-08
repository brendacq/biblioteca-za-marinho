import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaderSchema } from './entities/reader.entity';
import { ReadersRepository } from './readers.repository';
import { ReaderCategoryService } from '../reader-category/reader-category.service';
import { ReaderCategoryModule } from '../reader-category/reader-category.module';

@Module({
  imports: [
    ReaderCategoryModule,
    MongooseModule.forFeature([{ name: 'Reader', schema: ReaderSchema }]),
  ],
  controllers: [ReadersController],
  providers: [ReadersRepository, ReadersService],
})
export class ReadersModule {}
