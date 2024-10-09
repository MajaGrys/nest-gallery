import { Injectable } from '@nestjs/common';
import { CreatePaintingDto } from './dto/create-painting.dto';
import { UpdatePaintingDto } from './dto/update-painting.dto';

@Injectable()
export class PaintingsService {
    private paintings = [
        {
            "id": 1,
            "title": "Starry Night",
            "author": "Vincent Van Gogh",
            "year": 1889,
        },
        {
            "id": 2,
            "title": "Girl with a Pearl Earring",
            "author": "Johannes Vermeer",
            "year": 1665,
        }
    ]

    getPaintings(author?) {
        if (author) {
            return this.paintings.filter(painting => painting.author == author)
        };

        return this.paintings;
    }

    getOnePainting(id: number) {
        const painting = this.paintings.find(painting => painting.id === id);

        return painting;
    }

    createPainting(painting: CreatePaintingDto) {
        const paintingsByHighestId = [...this.paintings].sort((a,b) => b.id - a.id);
        const newPainting = {
            id: paintingsByHighestId[0].id + 1, // generates new highest id
            ...painting
        };

        this.paintings.push(newPainting);
        return newPainting;
    }

    updatePainting(id: number, updatedPainting: UpdatePaintingDto) {
        this.paintings = this.paintings.map(painting => {
            if (painting.id === id) {
                return {...painting, ...updatedPainting} // updatedPainting will override only the properties it contains
            };

            return painting;
        })

        return this.getOnePainting(id);
    }

    deletePainting(id: number) {
        const removedPainting = this.getOnePainting(id);

        this.paintings = this.paintings.filter(painting => painting.id !== id);

        return removedPainting;
    }
}
