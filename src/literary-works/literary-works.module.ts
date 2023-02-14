import { Module } from '@nestjs/common';
import { LiteraryWorksService } from './literary-works.service';
import { LiteraryWorksController } from './literary-works.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LiteraryWorkSchema } from './entities/literary-work.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Literary_works', schema: LiteraryWorkSchema },
    ]),
  ],
  controllers: [LiteraryWorksController],
  providers: [LiteraryWorksService],
})
export class LiteraryWorksModule {}
