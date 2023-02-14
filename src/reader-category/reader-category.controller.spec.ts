import { Test, TestingModule } from '@nestjs/testing';
import { ReaderCategoryController } from './reader-category.controller';

describe('ReaderCategoryController', () => {
  let controller: ReaderCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReaderCategoryController],
    }).compile();

    controller = module.get<ReaderCategoryController>(ReaderCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
