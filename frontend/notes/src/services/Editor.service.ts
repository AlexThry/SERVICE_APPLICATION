import axios from 'axios';

export class EditorService {
    async saveContent(noteId: string, content: string): Promise<void> {
        try {
            await axios.put('http://localhost:3000/notes', {
                noteId,
                content
            });
        } catch (error) {
            console.error('Error saving content:', error);
            throw error;
        }
    }

    async getUserNotes(userId: string, page: number): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:3000/notes/user/${userId}/${page}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user notes:', error);
            throw error;
        }
    }

    async getNote(noteId: string): Promise<string> {        
        try {
            const response = await axios.get(`http://localhost:3000/notes/${noteId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching content:', error);
            throw error;
        }
    }

    async createNote(userId: string, title: string) {
        try {
            const response = await axios.post('http://localhost:3000/notes', {
            userId,
            title
            });
            return response.data;
        } catch (error) {
            console.error('Error creating note:', error);
            throw error;
        }

    }

    async addUserToNote(noteId: string, userId: string) {
        try {
            const response = await axios.put('http://localhost:3000/notes/addUser', {
                noteId,
                userId
            })
            return response.status
        } catch (error) {
            return
        }
    }
}