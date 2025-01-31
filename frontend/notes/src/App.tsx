import { HocuspocusProvider } from '@hocuspocus/provider';
import * as Y from 'yjs';
import './style.scss';

import Editor from './features/Editor';
import { useEffect, useState } from 'react';
import { EditorService } from './services/Editor.service';

const ydoc = new Y.Doc();

interface AppProps {
    noteId: string;
	setNoteId: (noteId: string) => void
}

function App({ noteId, setNoteId }: AppProps) {
    const [provider, setProvider] = useState<HocuspocusProvider | null>(null);

    useEffect(() => {
        if (provider) {
            provider.destroy(); // Détruire l'ancien provider
        }

        const newProvider = new HocuspocusProvider({
            url: 'ws://localhost:1234',
            name: noteId || '',
            document: ydoc,
        });

        setProvider(newProvider);

        return () => {
            newProvider.destroy(); // Nettoyer le provider lors du démontage
        };
    }, [noteId]);

    const editorService = new EditorService();

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
            });
    }, []);

    return (
        <>
            <div className="flex h-full w-full">
                {provider && (
                    <Editor
                        provider={provider}
                        ydoc={ydoc}
                        noteId={noteId || ''}
                        setNoteId={setNoteId}
                        noteList={noteList}
                    />
                )}
            </div>
        </>
    );
}

export default App;
