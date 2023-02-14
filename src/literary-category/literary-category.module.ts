import { Module } from '@nestjs/common';
import { LiteraryCategoryService } from './literary-category.service';
import { LiteraryCategoryController } from './literary-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteraryCategorySchema } from './entities/literary-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'literary_category', schema: LiteraryCategorySchema },
    ]),
  ],
  controllers: [LiteraryCategoryController],
  providers: [LiteraryCategoryService],
})
export class LiteraryCategoryModule {}
