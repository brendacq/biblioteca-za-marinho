import { Module } from '@nestjs/common';
import { LiteraryWorksService } from './literary-works.service';
import { LiteraryWorksController } from './literary-works.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteraryWorkSchema } from './entities/literary-work.entity';
import { LiteraryWorksRepository } from './literary-works.repository';
import { LiteraryCategoryModule } from '../literary-category/literary-category.module';
import { LiteraryCategoryService } from '../literary-category/literary-category.service';
import { LiteraryCategoryRepository } from '../literary-category/literary-category.repository';

@Module({
  imports: [
    LiteraryCategoryModule,
    MongooseModule.forFeature([
      { name: 'Literary_works', schema: LiteraryWorkSchema },
    ]),
  ],
  controllers: [LiteraryWorksController],
  providers: [LiteraryWorksRepository, LiteraryWorksService],
})
export class LiteraryWorksModule {}
