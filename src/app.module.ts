import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { PaisesModule } from './paises/paises.module';
import { TiposDocumentoModule } from './tipos-documento/tipos-documento.module';
import { InfoMessagesModule } from './info-messages/info-messages.module';

@Module({
  imports: [PersonasModule, PaisesModule, TiposDocumentoModule, InfoMessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
