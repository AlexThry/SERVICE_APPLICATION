import { useState } from "react";
import Modal from "./Modal";
import { EditorService } from "../services/Editor.service";

interface FileListProps {
    files: any[];
    setFileId: (fileId: string) => void;
}

function FileList({ files, setFileId }: FileListProps) {
    const editorService = new EditorService()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");





    const handleCreateNote = async () => {
        try {
            const userId = sessionStorage.getItem('user_id'); // Replace with actual user ID
            if (userId) {
                await editorService.createNote(userId, title);
                setIsModalOpen(false);
            } else {
                console.error("User ID is null");
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error("Failed to create note", error);
        }
    };

    return (
        <>
            <div className="h-full w-full flex flex-col">
                <h1 className="font-bold text-4xl m-4">Choose a file</h1>
                <div className="flex flex-1 w-full flex-col overflow-y-scroll">
                    {files.map((file, index) => (
                        <div
                            onClick={() => {
                                setFileId(file.id);                                
                            }}
                            key={index}
                            className="w-full flex p-4 border-b hover:bg-primary-content cursor-pointer">
                            <h1 className="text-2xl">{file.title}</h1>
                        </div>
                    ))}
                </div>
                <button className="btn" onClick={() => setIsModalOpen(true)}>
                    Create file
                </button>
                {isModalOpen && (
                    <Modal setIsModalOpen={setIsModalOpen} content={
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Title"
                                        className="input input-bordered mb-4"
                                    />
                                    <button onClick={handleCreateNote} className="btn">
                                        Create Note
                                    </button>
                                </div>
                    }/>
                )}
            </div>
        </>
    );
}

export default FileList;
