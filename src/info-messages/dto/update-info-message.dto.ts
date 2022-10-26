import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoMessageDto } from './create-info-message.dto';

export class UpdateInfoMessageDto extends PartialType(CreateInfoMessageDto) {}
