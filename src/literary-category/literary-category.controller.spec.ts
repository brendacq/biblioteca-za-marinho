import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryCategoryController } from './literary-category.controller';
import { LiteraryCategoryService } from './literary-category.service';

describe('LiteraryCategoryController', () => {
  let controller: LiteraryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiteraryCategoryController],
      providers: [LiteraryCategoryService],
    }).compile();

    controller = module.get<LiteraryCategoryController>(
      LiteraryCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
