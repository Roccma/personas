import { Test, TestingModule } from '@nestjs/testing';
import { InfoMessagesController } from './info-messages.controller';
import { InfoMessagesService } from './info-messages.service';

describe('InfoMessagesController', () => {
  let controller: InfoMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoMessagesController],
      providers: [InfoMessagesService],
    }).compile();

    controller = module.get<InfoMessagesController>(InfoMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
