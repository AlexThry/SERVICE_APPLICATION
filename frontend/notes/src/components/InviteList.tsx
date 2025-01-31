import { useEffect, useState } from 'react';
import { UserService } from '../services/Users.service';
import { EditorService } from '../services/Editor.service';

interface User {
    _id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    __v: number;
}

interface InviteListProps {
    noteId: string;
}

function InviteList({ noteId }: InviteListProps) {
    const userService = new UserService();
    const editorService = new EditorService();

    const [users, setUsers] = useState<User[]>([]);
    const [userSuccesfullyAdded, setUserSuccesfullyAdded] = useState(false);

    async function fetchUsers() {
        const users = await userService.getUsers();
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = (noteId: string, user: User) => {
        editorService.addUserToNote(noteId || '', user._id);
        setUserSuccesfullyAdded(true);
        setTimeout(() => {
            setUserSuccesfullyAdded(false);
        }, 3000);
    };

    return (
        <>
            <div className="flex flex-col">
                {users.map((user, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleAddUser(noteId, user)}
                            className="w-full h-10 hover:bg-base-300 flex items-center justify-center cursor-pointer rounded-md">
                            <h1>{user.username}</h1>
                        </div>
                    );
                })}
            </div>
            {userSuccesfullyAdded && (
                <div role="alert" className="alert alert-success mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>User added</span>
                </div>
            )}
        </>
    );
}

export default InviteList;
