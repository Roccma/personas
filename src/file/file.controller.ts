import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

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
    @Body() body: any,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    console.log(files);
    return {
      message: `Archivos cargados correctamente` 
    }
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.fileService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
