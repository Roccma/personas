import { Module } from '@nestjs/common';
import { VinculoService } from './vinculo.service';
import { VinculoController } from './vinculo.controller';

@Module({
  controllers: [VinculoController],
  providers: [VinculoService]
})
export class VinculoModule {}
