import { Module } from '@nestjs/common';
import { LiteraryWorksService } from './literary-works.service';
import { LiteraryWorksController } from './literary-works.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiteraryWork } from './entities/literary-work.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LiteraryWork])],
  controllers: [LiteraryWorksController],
  providers: [LiteraryWorksService],
})
export class LiteraryWorksModule {}
