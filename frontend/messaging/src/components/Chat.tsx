import { useEffect, useRef } from 'react';
import Message, { MessageProps } from '../components/Message';
import { useState } from 'react';
import { ChatService } from '../services/ChatService';

interface MessagingProps {
    chatService: ChatService;
    user: string;
    selectedConversation: string;
    setLastConversation: (lastConversation: string) => void;
}

function Chat({
    chatService,
    user,
    selectedConversation,
    setLastConversation,
}: MessagingProps) {
    const userId = sessionStorage.getItem('user_id');
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [page, setPage] = useState(1);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [messageInput, setMessageInput] = useState('');
    const textInput = document.querySelector('textarea');

    useEffect(() => {
        chatService.on('receiveMessage', (newMessage: MessageProps) => {
            if (newMessage.senderId !== userId) {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
                }, 0);
            }
        });
    }, []);

    useEffect(() => {
        if (selectedConversation) {
            fetchMessages(true);
            chatService.leaveConversation();
            chatService.joinConversation(selectedConversation, userId || '');
        }
    }, [selectedConversation]);

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            const newMessage: MessageProps = {
                userId: userId || '',
                content: messageInput,
                senderId: userId || '',
            };
            setMessages([...messages, newMessage]);
            setMessageInput('');
            chatService.sendMessage(
                selectedConversation,
                'text',
                userId || '',
                messageInput
            );
            setLastConversation(selectedConversation);
        }
        if (textInput) {
            textInput.style.height = 'auto';
        }
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
        }, 0);
    };

    async function fetchMessages(firstPage?: boolean) {
        let fetchedMessages;
        if (firstPage) {
            fetchedMessages = await chatService.getConversationMessages(
                selectedConversation,
                1
            );
            setPage(1);
            setMessages(fetchedMessages)
        } else {
            fetchedMessages = await chatService.getConversationMessages(
                selectedConversation,
                page
            );
            setMessages([...fetchedMessages, ...messages]);

        }
        setPage(page + 1);
    }

    return (
        <>
            <div className="flex border-b border-base-300 p-1 items-center gap-2">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <h1 className="font-bold text-xl">{user}</h1>
            </div>
            <div className="flex-1 overflow-y-scroll px-2">
                <div className="flex w-full justify-center">
                    <button
                        className="btn h-8 min-h-8"
                        onClick={() => fetchMessages()}>
                        Load more
                    </button>
                </div>
                {messages.map((message, index) => {
                    return (
                        <Message
                            key={index}
                            userId={userId || ''}
                            content={message.content}
                            senderId={message.senderId}
                        />
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex border-t border-base-300 p-1 gap-2 items-center">
                <textarea
                    placeholder="Type here"
                    className="textarea w-full focus:outline-none border-none resize-none max-h-80"
                    value={messageInput}
                    rows={1}
                    style={{ maxHeight: '200px' }}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = `${Math.min(
                            target.scrollHeight,
                            200
                        )}px`;
                        setMessageInput(target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                        }
                    }}
                />
                <button
                    onClick={handleSendMessage}
                    className="btn btn-primary h-full">
                    <svg height="20px" viewBox="0 0 24 24" width="20px">
                        <title>Appuyer sur Entrée pour envoyer</title>
                        <path
                            d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                            fill="white"></path>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Chat;
