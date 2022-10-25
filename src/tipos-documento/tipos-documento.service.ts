import { Injectable } from '@nestjs/common';
import { CreateTiposDocumentoDto } from './dto/create-tipos-documento.dto';
import { UpdateTiposDocumentoDto } from './dto/update-tipos-documento.dto';
import { TiposDocumento } from './entities/tipos-documento.entity';

@Injectable()
export class TiposDocumentoService {
  tiposDocumento: TiposDocumento[] = [
    {
      id: 'DO',
      name: 'CÉDULA',
    },
    {
      id: 'FR',
      name: 'FRONTERIZO',
    },
    {
      id: 'PA',
      name: 'PASAPORTE',
    }
  ];

  create(createTiposDocumentoDto: CreateTiposDocumentoDto) {
    return 'This action adds a new tiposDocumento';
  }

  findAll() {
    return this.tiposDocumento;
  }

  findOne(id: string) {
    const tipodoc = this.tiposDocumento.find(
      td => td.id === id
    );
    return tipodoc ? { tipodoc } : { tipodoc: null };
  }

  update(id: number, updateTiposDocumentoDto: UpdateTiposDocumentoDto) {
    return `This action updates a #${id} tiposDocumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposDocumento`;
  }
}
