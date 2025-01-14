import React, { useState } from 'react';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Editor = React.lazy(() => import('notes/Editor'))
import { Suspense } from 'react';

function NotesPage() {

    const [noteId, setNoteId] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        setNoteId(id || '');
    }, [id, navigate])

    useEffect(() => {
        if (noteId) {
            navigate(`/notes/${noteId}`);
        }
    }, [noteId, history]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Editor noteId={noteId} setNoteId={setNoteId}/>
        </Suspense>
    );
}

export default NotesPage;
