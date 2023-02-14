import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria de Leitores')
@Controller('reader-category')
export class ReaderCategoryController {}
