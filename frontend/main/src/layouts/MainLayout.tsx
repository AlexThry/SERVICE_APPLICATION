import { Outlet } from 'react-router';
import Menu from '../features/Menu';
import NavBar from '../components/NavBar';
import {useEffect, useState} from 'react'

function MainLayout() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (event.clientY >= window.innerHeight - 10 || (event.target && (event.target as HTMLElement).closest('.menu'))) {
                setIsMenuVisible(true);
            } else {
                setIsMenuVisible(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <NavBar />
            <div
                className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full justify-center shadow-md flex transition-transform duration-300 ${
                    isMenuVisible ? 'translate-y-0' : 'translate-y-full'
                }`}>
                <Menu />
            </div>
            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
