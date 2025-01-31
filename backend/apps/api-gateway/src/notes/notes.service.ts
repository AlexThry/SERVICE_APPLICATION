import { NOTE_PATTERN } from '@app/contracts/notes.pattern';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import * as Yjs from 'yjs';

@Injectable()
export class NotesService implements OnModuleInit {
    constructor(
        @Inject('NOTES_CLIENT') private readonly noteClient: ClientKafka,
    ) {}

    async onModuleInit() {
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.CREATE)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.FIND_ALL)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.FIND_ALL_BY_USER)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.FIND_ONE)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.UPDATE)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.ADD_USER)
        this.noteClient.subscribeToResponseOf(NOTE_PATTERN.REMOVE)
    }

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
