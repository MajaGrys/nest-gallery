import { IsString, IsInt, IsPositive, Max } from "class-validator";

export class CreatePaintingDto {
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsInt()
    @IsPositive()
    @Max(new Date().getFullYear())
    year: number;
}