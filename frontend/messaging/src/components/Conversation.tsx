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
            </div>
        </>
    );
}

export default Conversation;
