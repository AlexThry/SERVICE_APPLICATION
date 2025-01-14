export type ConversationObject = {
    participants: { id: string; username: string }[];
    _id: string;
    name?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    lastMessage?: {
        _id: string;
        conversationId: string;
        messageType: string;
        senderId: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    selected: boolean;
};
