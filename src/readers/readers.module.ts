import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reader } from './entities/reader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reader])],
  controllers: [ReadersController],
  providers: [ReadersService],
})
export class ReadersModule {}
