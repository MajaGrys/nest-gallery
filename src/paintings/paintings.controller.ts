import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { PaintingsService } from './paintings.service';
import { CreatePaintingDto } from './dto/create-painting.dto';
import { UpdatePaintingDto } from './dto/update-painting.dto';

@Controller('paintings')
export class PaintingsController {
    constructor(private readonly paintingsService: PaintingsService) {}

    @Get() // GET /paintings or e.g. /paintings?author=Vincent Van Gogh
    getPaintings(@Query('author') author?) {
        return this.paintingsService.getPaintings(author);
    }

    @Get(':id') // GET /paintings/:id
    getOnePainting(@Param('id', ParseIntPipe) id: number) {
        return this.paintingsService.getOnePainting(id);
    }

    @Post() // POST /paintings
    createPainting(@Body() painting: CreatePaintingDto) {
        return this.paintingsService.createPainting(painting);
    }

    @Patch(':id') // PATCH /paintings/:id
    updatePainting(@Param('id', ParseIntPipe) id: number, @Body() paintingUpdate: UpdatePaintingDto) {
        return this.paintingsService.updatePainting(id, paintingUpdate);
    }

    @Delete(':id') // DELETE /paintings/:id
    deletePainting(@Param('id', ParseIntPipe) id: number) {
        return this.paintingsService.deletePainting(id);
    }
}
