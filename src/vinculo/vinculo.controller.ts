import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { VinculoService } from './vinculo.service';
import { CreateVinculoDto } from './dto/create-vinculo.dto';
import { UpdateVinculoDto } from './dto/update-vinculo.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('vinculo')
export class VinculoController {
  constructor(private readonly vinculoService: VinculoService) {}


  @Post()
  @UseInterceptors(
    AnyFilesInterceptor(
      {
        storage: diskStorage({
          destination: './uploads/',
          filename: (req, file, cb) => {
            const extension: string = extname( file.originalname );
            const filename: string = file.originalname.replace( extension, '' );
            cb( null, `${ filename }-${ Date.now() }${ extension }` );
          }
        })
      }
    )
  )
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createVinculoDto: CreateVinculoDto
  ) {
    const filesUploaded: string[] = [];
    files.forEach( 
      ( { path } ) => filesUploaded.push( path )
     )
    return {
      ...createVinculoDto,
      files: filesUploaded
    };
  }

  @Get()
  findAll() {
    return this.vinculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vinculoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVinculoDto: UpdateVinculoDto) {
    return this.vinculoService.update(+id, updateVinculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vinculoService.remove(+id);
  }
}
