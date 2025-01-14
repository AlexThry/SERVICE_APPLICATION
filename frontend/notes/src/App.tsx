import { HocuspocusProvider } from '@hocuspocus/provider';
import * as Y from 'yjs';
import './style.scss';

import Editor from './features/Editor';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import FileList from './components/FileList';
import { EditorService } from './services/Editor.service';

const ydoc = new Y.Doc();

interface AppProps {
    noteId: string;
	setNoteId: (noteId: string) => void
}

function App({ noteId, setNoteId }: AppProps) {
    const provider = new HocuspocusProvider({
        url: 'ws://localhost:1234',
        name: noteId || '',
        document: ydoc,
    });

    const editorService = new EditorService();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setFile] = useState('');
    const [noteList, setNoteList] = useState<
        { hasNextPage: boolean; notes: { title: String; id: string }[] }[]
    >([]);

    useEffect(() => {
        editorService
            .getUserNotes(sessionStorage.getItem('user_id') || '', 1)
            .then((noteList) => {
                const filteredNotes = noteList.notes.map(
                    (note: {
                        _id: string;
                        content: string;
                        title: string;
                        ownerId: string;
                        participants: string[];
                        __v: number;
                    }) => ({
                        id: note._id,
                        title: note.title,
                    })
                );
                setNoteList(filteredNotes);
                console.log(filteredNotes);
            });
    }, []);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="absolute btn z-50 top-0">
                Choose File
            </button>
            <div className="flex h-full w-full">
                {isModalOpen && (
                    <Modal
                        setIsModalOpen={setIsModalOpen}
                        content={
                            <FileList files={noteList} setFileId={setNoteId} />
                        }
                    />
                )}
                <Editor
                    provider={provider}
                    ydoc={ydoc}
                    documentId={noteId || ''}
                    initialValue={file || ''}
					setDocumentId={setFile}
                />
            </div>
        </>
    );
}

export default App;
