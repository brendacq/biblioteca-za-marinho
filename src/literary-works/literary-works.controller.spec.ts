import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryWorksController } from './literary-works.controller';
import { LiteraryWorksService } from './literary-works.service';

describe('LiteraryWorksController', () => {
  let controller: LiteraryWorksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiteraryWorksController],
      providers: [LiteraryWorksService],
    }).compile();

    controller = module.get<LiteraryWorksController>(LiteraryWorksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
