import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post()
    createNote(@Body() body: { userId: string; title: string }) {
        return this.notesService.createNote(body.userId, body.title);
    }

    @Put()
    updateContent(@Body() body: { noteId: string; content: string }) {
        return this.notesService.updateContent(body.noteId, body.content);
    }

    @Put('addUser')
    addUser(@Body() body: { noteId: string; userId: string }) {
        return this.notesService.addUser(body.noteId, body.userId);
    }

    @Get()
    getAll() {
        return this.notesService.getAll();
    }

    @Get('user/:id/:page')
    getAllByUser(@Param('id') id: string, @Param('page') page: number) {
        return this.notesService.getAllByUser(id, page);
    }

    @Get(':id')
    getNote(@Param('id') id: string) {
        return this.notesService.getNoteById(id);
    }
}
