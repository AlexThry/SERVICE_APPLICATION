import { NOTE_PATTERN } from '@app/contracts/notes.pattern';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import * as Yjs from 'yjs';

@Injectable()
export class NotesService {
    constructor(
        @Inject('NOTES_CLIENT') private readonly noteClient: ClientProxy,
    ) {}
    createNote(userId: string, title: string) {
        return this.noteClient.send(NOTE_PATTERN.CREATE, {
            userId: userId,
            title: title,
        });
    }

    updateContent(noteId: string, content: string) {
        return this.noteClient.send(NOTE_PATTERN.UPDATE, {
            noteId: noteId,
            content: content,
        });
    }

    addUser(noteId: string, userId: string) {
        return this.noteClient.send(NOTE_PATTERN.ADD_USER, {
            noteId: noteId,
            userId: userId,
        });
    }

    getAll() {
        return this.noteClient.send(NOTE_PATTERN.FIND_ALL, {});
    }

    getAllByUser(userId: string, page: number) {
        return this.noteClient.send(NOTE_PATTERN.FIND_ALL_BY_USER, {
            userId: userId,
            page: page
        });
    }

    getNoteById(noteId: string) {
        return this.noteClient.send(NOTE_PATTERN.FIND_ONE, { noteId: noteId });
    }
}
