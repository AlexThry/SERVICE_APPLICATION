import axios from 'axios';
import { socket } from './Socket';

type EventCallback = (...args: any[]) => void;

export class ChatService {

    private socket = socket

    disconnect(): void {
        if (this.socket) {
            this.socket.disconnect();
            console.log('Disconnected from the socket server.');
        }
    }

    private emit(event: string, data: any): void {
        if (this.socket) {
            this.socket.emit(event, data);            
        } else {
            console.error('Socket is not connected.');
        }
    }

    on(event: string, callback: EventCallback): void {
        
        if (this.socket) {
            this.socket.on(event, callback);
        } else {
            console.error('Socket is not connected.');
        }
    }

    off(event: string): void {
        if (this.socket) {
            this.socket.off(event);
        } else {
            console.error('Socket is not connected.');
        }
    }

    joinConversation(conversationId: string, userId: string) {
        return this.emit('joinConversation', {conversationId, userId})
    }

    leaveConversation() {
        return this.emit('leaveConversation', {})
    }

    sendMessage(
        conversationId: string,
        messageType: string,
        senderId: string,
        content: string
    ) {
        return this.emit('sendMessage', {conversationId, messageType, senderId, content})
    }

    getUserConversations(userId: string) {

        return axios.post(`http://localhost:3000/chat/getUserConversations`, {
            userId: userId
        }, {
            headers: {
            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            
            return response.data
        })
        .catch(error => {
            console.error('Error fetching conversations:', error);
            throw error;
        });
    }

    getConversationMessages(conversationId: string, page: number) {        
        return axios.post(`http://localhost:3000/chat/getMessages`, {
            conversationId: conversationId,
            page: page
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
            throw error;
        });
    }

    getAllUsers() {
        return axios.get(`http://localhost:3000/users`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            throw error;
        });
    }

    createConversation(userIds: string[], name: string) {
        return axios.post(`http://localhost:3000/chat/createConversation`, {
            userIds,
            name
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error creating conversation:', error);
            throw error;
        });
    }
}
