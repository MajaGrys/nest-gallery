import { Controller, Get, Post, Patch, Delete, Param, Body, Query} from '@nestjs/common';

@Controller('paintings')
export class PaintingsController {

    @Get() // GET /paintings or e.g. /paintings?author=vangogh&year=1888
    getPaintings(@Query('author') author?: string) {
        return 'all paintings';
    }

    @Get(':id') // GET /paintings/:id
    getOnePainting(@Param('id') id: string) {
        return 'one painting';
    }

    @Post() // POST /paintings
    createPainting(@Body() painting: { }) {
        return 'create';
    }

    @Patch(':id') // PATCH /paintings/:id
    updatePainting(@Param('id') id: string, @Body() paintingUpdate: { }) {
        return 'update';
    }

    @Delete(':id') // DELETE /paintings/:id
    deletePainting(@Param('id') id: string) {
        return 'delete';
    }
}
