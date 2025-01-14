import { Note } from '@app/dtos/notes/note.schema';
import { User } from '@app/dtos/users/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as Yjs from 'yjs';

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Note.name) private readonly noteModel: Model<Note>,
    ) {}

    createNote(userId: string, title: string) {
        return this.noteModel.create({
            title: title,
            ownerId: userId,
            participants: [userId],
            content: '',
        });
    }

    updateContent(noteId: string, content: string) {
        return this.noteModel
            .findOneAndUpdate(
                { _id: noteId },
                { content: content },
                { new: true },
            )
            .exec();
    }

    addParticipant(noteId: string, userId: string) {
		return this.noteModel
			.findOneAndUpdate(
			{ _id: noteId, participants: { $ne: userId } },
			{ $addToSet: { participants: userId } },
			{ new: true },
			)
			.exec();
    }

    findAll() {
        return this.noteModel.find();
    }

	async findAllByUser(userId: string, page: number, limit: number) {
		const skip = (page - 1) * limit;
		const notes = await this.noteModel
			.find({ participants: userId })
			.sort({ updatedAt: -1 })
			.skip(skip)
			.limit(limit)
			.exec();
		const totalNotes = await this.noteModel.countDocuments({ participants: userId });
		const hasNextPage = skip + notes.length < totalNotes;
		return { notes, hasNextPage };
	}

    findById(noteId: string) {
        return this.noteModel.findById(noteId).exec();
    }
}
