import { Test, TestingModule } from '@nestjs/testing';
import { VinculoController } from './vinculo.controller';
import { VinculoService } from './vinculo.service';

describe('VinculoController', () => {
  let controller: VinculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinculoController],
      providers: [VinculoService],
    }).compile();

    controller = module.get<VinculoController>(VinculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
