export interface MessageProps {
    userId: string;
    content: string;
    messageType?: 'text' | string;
    senderId: string;
    createdAt?: string;
    senderUsername?: 'AlexThry';
}

function Message({ userId, content, senderId }: MessageProps) {

    return (
        <>
            <div
                className={`chat py-0.5 ${
                    senderId === userId ? 'chat-end' : 'chat-start'
                }`}>
                <div
                    className={`chat-bubble before:hidden ${
                        senderId === userId ? 'bg-primary' : ''
                    }`}>
                    {content}
                </div>
            </div>
        </>
    );
}

export default Message;
