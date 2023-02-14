import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryCategoryService } from './literary-category.service';

describe('LiteraryCategoryService', () => {
  let service: LiteraryCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiteraryCategoryService],
    }).compile();

    service = module.get<LiteraryCategoryService>(LiteraryCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
