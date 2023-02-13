import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryWorksService } from './literary-works.service';

describe('LiteraryWorksService', () => {
  let service: LiteraryWorksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiteraryWorksService],
    }).compile();

    service = module.get<LiteraryWorksService>(LiteraryWorksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
