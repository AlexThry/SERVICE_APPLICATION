import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Editor = React.lazy(() => import('notes/Editor'));
import { Suspense } from 'react';

function NotesPage() {
    const { id: paramNoteId } = useParams();
    const [noteId, setNoteId] = useState(paramNoteId || '');

    const navigate = useNavigate();

    useEffect(() => {
        if (noteId && noteId !== paramNoteId) {
            navigate(`/notes/${noteId}`);
        }
        
    }, [noteId]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Editor noteId={noteId} setNoteId={setNoteId} />
        </Suspense>
    );
}

export default NotesPage;
