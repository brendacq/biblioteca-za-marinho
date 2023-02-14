import { Test, TestingModule } from '@nestjs/testing';
import { ReaderCategoryService } from './reader-category.service';

describe('ReaderCategoryService', () => {
  let service: ReaderCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReaderCategoryService],
    }).compile();

    service = module.get<ReaderCategoryService>(ReaderCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
