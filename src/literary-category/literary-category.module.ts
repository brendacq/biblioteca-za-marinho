import { Module } from '@nestjs/common';
import { LiteraryCategoryService } from './literary-category.service';
import { LiteraryCategoryController } from './literary-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteraryCategorySchema } from './entities/literary-category.entity';
import { LiteraryCategoryRepository } from './literary-category.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Literary_category', schema: LiteraryCategorySchema },
    ]),
  ],
  controllers: [LiteraryCategoryController],
  providers: [LiteraryCategoryRepository, LiteraryCategoryService],
})
export class LiteraryCategoryModule {}
