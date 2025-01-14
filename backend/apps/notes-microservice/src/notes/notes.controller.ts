import { Controller } from '@nestjs/common';
import { NotesService } from './notes.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NOTE_PATTERN } from '@app/contracts/notes.pattern';
import * as Yjs from 'yjs';

@Controller()
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @MessagePattern(NOTE_PATTERN.CREATE)
    createNote(@Payload() payload: { userId: string; title: string }) {
        return this.notesService.createNote(payload.userId, payload.title);
    }

    @MessagePattern(NOTE_PATTERN.UPDATE)
    updateContent(@Payload() payload: { noteId: string; content: string }) {
        return this.notesService.updateContent(payload.noteId, payload.content);
    }

    @MessagePattern(NOTE_PATTERN.ADD_USER)
    addUser(@Payload() payload: { noteId: string; userId: string }) {
        return this.notesService.addParticipant(payload.noteId, payload.userId);
    }

    @MessagePattern(NOTE_PATTERN.FIND_ALL)
    getAll() {
        return this.notesService.findAll();
    }

    @MessagePattern(NOTE_PATTERN.FIND_ALL_BY_USER)
    findAllByUser(@Payload() payload: { userId: string, page: number }) {
        return this.notesService.findAllByUser(payload.userId, payload.page, 20);
    }

    @MessagePattern(NOTE_PATTERN.FIND_ONE)
    findById(@Payload() payload: { noteId: string }) {
        return this.notesService.findById(payload.noteId);
    }
}
