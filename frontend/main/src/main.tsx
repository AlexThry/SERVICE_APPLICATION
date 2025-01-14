import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import AuthPage from './pages/AuthPage.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import { AppProvider } from './utils/AppContext.tsx';
import NotesPage from './pages/NotesPage.tsx';
import MessagingPage from './pages/MessagingPage.tsx';
import ContactsPage from './pages/ContactsPage.tsx';

createRoot(document.getElementById('root')!).render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth" element={<AuthPage />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/notes" element={<NotesPage />} />
                    <Route path="/notes/:id" element={<NotesPage />} />
                    <Route path="/messaging" element={<MessagingPage />} />
                    <Route path="/files" element={<p>files</p>} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
);
