import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
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
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome to SOA</h1>
                        <p className="py-6">
                            A tiny and fast note taker, that allow you to share
                            and save your files as you wish to.
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
