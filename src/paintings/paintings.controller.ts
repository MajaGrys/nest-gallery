import { Controller, Get, Post, Patch, Delete, Param, Body, Query} from '@nestjs/common';
import { PaintingsService } from './paintings.service';

@Controller('paintings')
export class PaintingsController {
    constructor(private readonly paintingsService: PaintingsService) {}

    @Get() // GET /paintings or e.g. /paintings?author=Vincent Van Gogh
    getPaintings(@Query('author') author?) {
        return this.paintingsService.getPaintings(author);
    }

    @Get(':id') // GET /paintings/:id
    getOnePainting(@Param('id') id: string) {
        return this.paintingsService.getOnePainting(+id);
    }

    @Post() // POST /paintings
    createPainting(@Body() painting: { title: string, author: string, year: number }) {
        return this.paintingsService.createPainting(painting);
    }

    @Patch(':id') // PATCH /paintings/:id
    updatePainting(@Param('id') id: string, @Body() paintingUpdate: { title?: string, author?: string, year?: number }) {
        return this.paintingsService.updatePainting(+id, paintingUpdate);
    }

    @Delete(':id') // DELETE /paintings/:id
    deletePainting(@Param('id') id: string) {
        return this.paintingsService.deletePainting(+id);
    }
}
