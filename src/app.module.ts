import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadersModule } from './readers/readers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LiteraryWorksModule } from './literary-works/literary-works.module';

@Module({
  imports: [
    ReadersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DATABASE_HOST,
      port: parseInt(process.env.MYSQL_DATABASE_PORT),
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_DATABASE_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    LiteraryWorksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
