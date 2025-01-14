import { IsString, IsMongoId, IsArray, ValidateNested } from 'class-validator';
import * as Y from 'yjs';

export class NoteDto {
    @IsMongoId()
    _id: string;

    @IsString()
    content: string;

    @IsString()
    title: string;

    @IsMongoId()
    ownerId: string;

    @IsArray()
    @IsMongoId({ each: true })
    participants: string[];
}

export class CreateNoteDto {
    @ValidateNested()
    @IsString()
    content: string;

    @IsString()
    title: string;

    @IsMongoId()
    ownerId: string;

    @IsArray()
    @IsMongoId({ each: true })
    participants: string[];
}

export class UpdateNoteDto {
    @IsMongoId()
    _id: string;
    
    @IsString()
    content: string;

    @IsString()
    title: string;

    @IsMongoId()
    ownerId: string;

    @IsArray()
    @IsMongoId({ each: true })
    participants: string[];
}

function Type(arg0: () => typeof Y.Doc): (target: CreateNoteDto, propertyKey: "content") => void {
    throw new Error('Function not implemented.');
}
