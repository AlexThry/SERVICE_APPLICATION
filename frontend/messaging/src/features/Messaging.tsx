import Conversations from '../components/Conversations';
import Chat from '../components/Chat';
import { useState } from 'react';
import { ChatService } from '../services/ChatService';

function Messaging() {
    const [selectedConversation, setSelectedConversation] = useState('');
    const [lastConversation, setLastConversation] = useState('')

    let chatService: ChatService = new ChatService()

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
                        user="Andreea"
                    />
                </div>
            </div>
        </>
    );
}

export default Messaging;
