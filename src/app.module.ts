import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadersModule } from './readers/readers.module';
import { ConfigModule } from '@nestjs/config';
import { LiteraryWorksModule } from './literary-works/literary-works.module';
import { LiteraryCategoryModule } from './literary-category/literary-category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReaderCategoryModule } from './reader-category/reader-category.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ReadersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    LiteraryWorksModule,
    LiteraryCategoryModule,
    ReaderCategoryModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
