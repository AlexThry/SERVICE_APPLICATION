export type MessagesListResponseObject = {};

export type MessageObject = {
    userId: string;
    content: string;
    messageType?: 'text' | string;
    senderId: string;
    createdAt?: string;
    senderUsername?: 'AlexThry';
};
