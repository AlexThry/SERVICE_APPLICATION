import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { useEffect, useState } from 'react';

const Main = () => {
    const [id, setId] = useState('');

    useEffect(() => {
        setId(window.location.pathname.split('/').pop() || "");
    }, []);

    useEffect(() => {
        if (id) {
            window.history.pushState(null, '', `/${id}`);
        }
    }, [id]);

    return (
        <div className="h-screen">
            <App noteId={id || ''} setNoteId={setId}/>
        </div>
    );
};

createRoot(document.getElementById('root')!).render(<Main />);
