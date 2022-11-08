import { Injectable } from '@nestjs/common';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisesService {

  private paises: Pais[] = [
    {
      id: 1,
      name: 'URUGUAY',
    },
    {
      id: 4,
      name: 'ALEMANIA',
    },
    {
      id: 7,
      name: 'ARGENTINA',
    },
    {
      id: 39,
      name: 'AUSTRIA',
    },
    {
      id: 12,
      name: 'BOLIVIA',
    },
    {
      id: 9,
      name: 'BRASIL',
    },
    {
      id: 29,
      name: 'BELGICA',
    },
    {
      id: 23,
      name: 'CANADA',
    },
    {
      id: 11,
      name: 'CHILE',
    },
    {
      id: 14,
      name: 'COLOMBIA',
    },
    {
      id: 116,
      name: 'COREA DEL SUR',
    },
    {
      id: 17,
      name: 'COSTA RICA',
    },
    {
      id: 15,
      name: 'ECUADOR',
    },
    {
      id: 18,
      name: 'EL SALVADOR',
    },
    {
      id: 3,
      name: 'ESPAÑA',
    },
    {
      id: 8,
      name: 'ESTADOS UNIDOS',
    },
    {
      id: 36,
      name: 'FRANCIA',
    },
    {
      id: 44,
      name: 'GRECIA',
    },
    {
      id: 20,
      name: 'HOLANDA',
    },
    {
      id: 125,
      name: 'ISRAEL',
    },
    {
      id: 2,
      name: 'ITALIA',
    },
    {
      id: 31,
      name: 'LUXEMBURGO',
    },
    {
      id: 10,
      name: 'PARAGUAY',
    },
    {
      id: 16,
      name: 'PERU',
    },
    {
      id: 51,
      name: 'PORTUGAL',
    },
    {
      id: 57,
      name: 'REPUBLICA DOMINICANA',
    },
    {
      id: 52,
      name: 'RUMANIA',
    },
    {
      id: 117,
      name: 'RUSIA',
    },
    {
      id: 28,
      name: 'SUIZA',
    },
    {
      id: 13,
      name: 'VENEZUELA',
    },
  ];

  create(createPaiseDto: CreatePaiseDto) {
    return 'This action adds a new paise';
  }

  findAll() {
    return this.paises;
  }

  findOne(id: number) {
    const pais = this.paises.find(
      pais => pais.id === id
    );

    return pais ? { pais } : { pais: null };
  }

  update(id: number, updatePaiseDto: UpdatePaiseDto) {
    return `This action updates a #${id} paise`;
  }

  remove(id: number) {
    return `This action removes a #${id} paise`;
  }
}
