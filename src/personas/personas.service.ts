import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {

  private persons: Persona[] = [
    {
      id: 1,
      pais: 'Uruguay',
      tipodoc: 1,
      documento: 56212039,
      nombre: 'Luis',
      apellido: 'Lopez'
    },
    {
      id: 2,
      pais: 'Uruguay',
      tipodoc: 1,
      documento: 48704743,
      nombre: 'Mauro',
      apellido: 'Rocca'
    },
    {
      id: 3,
      pais: 'Argentina',
      tipodoc: 2,
      documento: 1122334455,
      nombre: 'Lionel',
      apellido: 'Messi'
    },
  ]

  create(createPersonaDto: CreatePersonaDto) {
    return 'This action adds a new persona';
  }

  findAll() {
    return this.persons;
  }

  findOne(pais: string, tipodoc: number, doc: number) {
    const person = this.persons.find(
      person => person.pais === pais && person.tipodoc === tipodoc && person.documento === doc
    );
    return person ? { person } : { person: null };
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
