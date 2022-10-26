import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfoMessagesService } from './info-messages.service';
import { CreateInfoMessageDto } from './dto/create-info-message.dto';
import { UpdateInfoMessageDto } from './dto/update-info-message.dto';

@Controller('info-messages')
export class InfoMessagesController {
  constructor(private readonly infoMessagesService: InfoMessagesService) {}

  @Post()
  create(@Body() createInfoMessageDto: CreateInfoMessageDto) {
    return this.infoMessagesService.create(createInfoMessageDto);
  }

  @Get()
  findAll() {
    return this.infoMessagesService.findAll();
  }

  @Get(':vinculo')
  findOne(@Param('vinculo') vinculo: string) {
    return this.infoMessagesService.findOne(vinculo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInfoMessageDto: UpdateInfoMessageDto) {
    return this.infoMessagesService.update(+id, updateInfoMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infoMessagesService.remove(+id);
  }
}
