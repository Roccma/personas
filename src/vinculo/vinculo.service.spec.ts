import { Test, TestingModule } from '@nestjs/testing';
import { VinculoService } from './vinculo.service';

describe('VinculoService', () => {
  let service: VinculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VinculoService],
    }).compile();

    service = module.get<VinculoService>(VinculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
