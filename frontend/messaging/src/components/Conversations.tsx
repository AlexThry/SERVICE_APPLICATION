import { useEffect, useState } from 'react';
import { ChatService } from '../services/ChatService';
import Conversation from './Conversation';
import { ConversationObject } from '../objects/ConversationObject';

interface ConversationsProps {
    lastConversation?: string;
    chatService: ChatService;
    setSelectedConversation?: (selectedConversation: string) => void;
}

function Conversations({
    lastConversation: conversationId,
    chatService,
    setSelectedConversation,
}: ConversationsProps) {
    const [conversations, setConversations] = useState<ConversationObject[]>(
        []
    );

    async function getUserConversations() {
        const userId = sessionStorage.getItem('user_id');
        if (userId) {
            const conversations = await chatService.getUserConversations(
                userId
            );
            setConversations(conversations);
            if (conversations[0] && setSelectedConversation) {
                setSelectedConversation(conversations[0]._id);
                conversations[0].selected = true
            }
        }
    }

    function setFirstConversation(conversationId: string) {
        setConversations((prevConversations) => {
            const conversationIndex = prevConversations.findIndex(
                (conv) => conv._id === conversationId
            );
            if (conversationIndex > -1) {
                const updatedConversations = [...prevConversations];
                const [lastConv] = updatedConversations.splice(
                    conversationIndex,
                    1
                );
                updatedConversations.unshift(lastConv);
                return updatedConversations;
            }
            return prevConversations;
        });
    }

    const handleSelection = (selectedIndex: number) => {
        setConversations((prevConversations) =>
            prevConversations.map((conversation, index) => ({
                ...conversation,
                selected: index === selectedIndex,
            }))
        );
        if (setSelectedConversation) {
            setSelectedConversation(conversations[selectedIndex]._id);
        }
    };

    useEffect(() => {
        getUserConversations();
    }, []);

    useEffect(() => {
        if (conversationId) {
            setFirstConversation(conversationId);
        }
    }, [conversationId]);

    return (
        <>
            <div className="flex px-2 flex-col gap-2">
                <h1 className="text-2xl font-bold py-2">Conversations</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>
            <div className="h-full overflow-y-scroll py-2">
                {conversations.map((conversation, index) => {
                    return (
                        <div key={index} onClick={() => handleSelection(index)}>
                            <Conversation
                                key={index}
                                user={
                                    conversation.name &&
                                    conversation.name !== ''
                                        ? conversation.name
                                        : conversation.participants
                                              .map((p) => p.username)
                                              .join(', ')
                                }
                                lastMessage={
                                    conversation.lastMessage &&
                                    conversation.lastMessage.content
                                        ? conversation.lastMessage.content
                                        : ''
                                }
                                onSelect={() => handleSelection(index)}
                                selected={conversation.selected}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Conversations;
