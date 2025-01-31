import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { HomeService } from '../services/HomeService';

function HomePage() {
    const navigate = useNavigate();
    const homeService = new HomeService();
    const [splash, setSplash] = useState('');
    const [username, setUsername] = useState('');

    async function fetchSplash() {
        const splash = await homeService.getSplash();
        setSplash(splash);
    }

    useEffect(() => {
        fetchSplash();

        if (sessionStorage.getItem('user')) {
            const user = sessionStorage.getItem('user');
            if (user) {
                setUsername(user);
            }
        }

        const token = sessionStorage.getItem('access_token');

        if (!token) {
            navigate('/auth');
        } else {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const isExpired = payload.exp * 1000 + 3600 * 1000 < Date.now();
            if (isExpired) {
                navigate('/auth');
            }
        }
    }, []);

    return (
        <>
            <div className="hero bg-base-300 h-full">
                <div className="relative hero-content text-center">
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 text-blue-600">
                        {splash}
                    </div>
                    <div className="max-w-md">
                        {(username && (
                            <h1 className="text-5xl font-bold">
                                Welcome {username}
                            </h1>
                        )) || (
                            <h1 className="text-5xl font-bold">
                                Welcome to SOA
                            </h1>
                        )}
                        <p className="py-6">
                            SOA is a tiny and fast note taker, that allow you to share
                            and save your files as you wish to (not yet).
                        </p>
                        <Link to="/notes" className="btn btn-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                Try hovering here !
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-10">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>
        </>
    );
}

export default HomePage;
