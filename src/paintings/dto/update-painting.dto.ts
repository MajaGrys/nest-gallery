import { CreatePaintingDto } from "./create-painting.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePaintingDto extends PartialType(CreatePaintingDto) {}