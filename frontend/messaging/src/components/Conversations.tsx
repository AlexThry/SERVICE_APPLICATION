import { useEffect, useState } from 'react';
import { ChatService } from '../services/ChatService';
import Conversation from './Conversation';
import { ConversationObject } from '../objects/ConversationObject';
import Modal from './Modal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleNewConversation = () => {
        console.log('Opening modal...');
        setIsModalOpen(true);
    };

    const handleUserSelect = async (participantId: string) => {
        const userId = sessionStorage.getItem('user_id');
        if (userId) {
            const userIds = [userId, participantId];
            try {
                const newConversation = await chatService.createConversation(userIds, '');
                setConversations((prevConversations) => [newConversation, ...prevConversations]);
                setIsModalOpen(false);
            } catch (error) {
                console.error('Error creating conversation:', error);
            }
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
               <button className="btn" onClick={handleNewConversation}>New Conversation</button>
            </div>
            {isModalOpen && (
                <Modal setIsModalOpen={setIsModalOpen} onUserSelect={handleUserSelect} content={<div>Select a user to start a conversation</div>} chatService={chatService} />
            )}
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
