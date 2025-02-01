import Conversations from '../components/Conversations';
import Chat from '../components/Chat';
import { useState, useEffect } from 'react';
import { ChatService } from '../services/ChatService';

function Messaging() {
    const [selectedConversation, setSelectedConversation] = useState('');
    const [lastConversation, setLastConversation] = useState('');
    const [conversationName, setConversationName] = useState('');

    let chatService: ChatService = new ChatService();

    useEffect(() => {
        async function fetchConversationName() {
            if (selectedConversation) {
                const conversations = await chatService.getUserConversations(sessionStorage.getItem('user_id') || '');
                const conversation = conversations.find((conv: any) => conv._id === selectedConversation);
                if (conversation) {
                    setConversationName(conversation.name || 'Unnamed Conversation');
                }
            }
        }
        fetchConversationName();
    }, [selectedConversation]);

    return (
        <>
            <div className="flex h-full">
                <div className="w-1/4 flex border-r border-base-300 flex-col">
                    <Conversations
                        lastConversation={lastConversation}
                        chatService={chatService}
                        setSelectedConversation={setSelectedConversation}
                    />
                </div>
                <div className="h-full flex flex-col flex-1">
                    <Chat
                        setLastConversation={setLastConversation}
                        chatService={chatService}
                        selectedConversation={selectedConversation}
                        user={conversationName}
                    />
                </div>
            </div>
        </>
    );
}

export default Messaging;
