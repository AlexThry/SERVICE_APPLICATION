export interface ConversationProps {
    user: string;
    lastMessage?: string;
    selected?: boolean;
    onSelect?: () => void;
}

function Conversation({
    user,
    lastMessage,
    selected,
    onSelect,
}: ConversationProps) {
    return (
        <>
            <div
                onClick={onSelect}
                className={`flex items-center w-full hover:bg-primary-content cursor-pointer ${
                    selected ? 'bg-primary-content' : ''
                }`}>
                <div className="w-full p-2 flex flex-1">
                    <div className="avatar flex-shrink-0">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Avatar"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="ml-3 flex flex-col overflow-hidden">
                        <h1 className="font-medium truncate">{user}</h1>
                        <p className="text-gray-500 text-sm truncate">
                            {lastMessage}
                        </p>
                    </div>
                </div>
                <button className="btn btn-ghost h-6 min-h-6 px-1 mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Conversation;
