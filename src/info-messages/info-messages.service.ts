import { Injectable } from '@nestjs/common';
import { CreateInfoMessageDto } from './dto/create-info-message.dto';
import { UpdateInfoMessageDto } from './dto/update-info-message.dto';

@Injectable()
export class InfoMessagesService {

  messages = {
    hijo: [
      'Partida de nacimiento con 30 días de vigencia.',
      'Para nacimientos en el extranjero: partida traducida al castellano (de corresponder) apostillada o legalizada y debidamente inscripta en la Dirección General de Registro de Estado Civil uruguayo.',
      'En los casos de reconocimiento debe ingresarse la fecha de reconocimiento del menor (anotación marginal en la partida de nacimiento).',
    ],
    conyuge: [
      'Partida de matrimonio con 30 días de vigencia.',
      'Para matrimonios en el extranjero: partida traducida al castellano (de corresponder) apostillada o legalizada y debidamente inscripta en la Dirección General de Registro de Estado Civil uruguayo.',
      'Divorcios: sentencia de divorcio o partida de matrimonio con anotación marginal del divorcio, con 30 días de vigencia.'
    ]
  };

  create(createInfoMessageDto: CreateInfoMessageDto) {
    return 'This action adds a new infoMessage';
  }

  findAll() {
    return { messages: this.messages };
  }

  findOne(vinculo: string ) {
    let resp: string[] = [];
    switch( vinculo.toLocaleLowerCase() ){
      case 'hijo':
          resp = this.messages['hijo'];
          break;
      case 'conyuge':
          resp = this.messages['conyuge'];
          break;
    }
    return { messages: resp };
  }

  update(id: number, updateInfoMessageDto: UpdateInfoMessageDto) {
    return `This action updates a #${id} infoMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} infoMessage`;
  }
}
