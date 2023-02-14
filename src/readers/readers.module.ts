import { Module } from '@nestjs/common';
import { ReadersService } from './readers.service';
import { ReadersController } from './readers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaderSchema } from './entities/reader.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reader', schema: ReaderSchema }]),
  ],
  controllers: [ReadersController],
  providers: [ReadersService],
})
export class ReadersModule {}
