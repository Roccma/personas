import { Test, TestingModule } from '@nestjs/testing';
import { InfoMessagesService } from './info-messages.service';

describe('InfoMessagesService', () => {
  let service: InfoMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoMessagesService],
    }).compile();

    service = module.get<InfoMessagesService>(InfoMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
