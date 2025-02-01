import { ReactNode, useEffect, useState } from 'react';
import { ChatService } from '../services/ChatService';

interface ModalProps {
    setIsModalOpen: (isOpen: boolean) => void;
    content: ReactNode;
    onUserSelect?: (userId: string) => void;
    chatService: ChatService;
}

function Modal({ setIsModalOpen, content, onUserSelect, chatService }: ModalProps) {
    const [users, setUsers] = useState<{ _id: string, username: string }[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const users = await chatService.getAllUsers();
                console.log('Fetched users:', users);
                setUsers(users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <>
            <div
                onClick={() => setIsModalOpen(false)}
                className="h-screen w-screen absolute top-0 left-0 bg-slate-500 opacity-65 z-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-white rounded-lg shadow-sm items-center justify-center z-40">
                <div onClick={() => setIsModalOpen(false)} className="absolute z-50 top-2 right-2 cursor-pointer hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="h-full w-full p-8 dark:bg-gray-800 dark:text-white">
                    {content}
                    {onUserSelect && (
                        <div>
                            <ul>
                                {users.map(user => (
                                    <li key={user._id} onClick={() => onUserSelect(user._id)} className="cursor-pointer hover:bg-gray-200 p-2">
                                        {user.username}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Modal;
