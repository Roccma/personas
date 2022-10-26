import { Module } from '@nestjs/common';
import { InfoMessagesService } from './info-messages.service';
import { InfoMessagesController } from './info-messages.controller';

@Module({
  controllers: [InfoMessagesController],
  providers: [InfoMessagesService]
})
export class InfoMessagesModule {}
