import { AuthService } from '../services/AuthService';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const authService = new AuthService();
    const navigate = useNavigate();

    const [isValidated, setIsValidated] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isBadCredential, setIsBadCredential] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isValidRegister, setIsValidRegister] = useState(true);

    const handleLogin = async () => {
        const username = (
            document.querySelector(
                'input[name="username-log"]'
            ) as HTMLInputElement
        ).value;
        const password = (
            document.querySelector(
                'input[name="password-log"]'
            ) as HTMLInputElement
        ).value;
        setIsLoading(true);
        // TODO: supprimer le timeout
        const response = await authService.login(username, password);
        if (response && response.access_token) {
            sessionStorage.setItem('access_token', response.access_token);
            sessionStorage.setItem('user', username)
            sessionStorage.setItem('user_id', response.userId)
            setIsBadCredential(false);
            navigate('/home');
        } else {
            setIsBadCredential(true);
        }

        setIsLoading(false);
    };

    const handleRegister = async () => {
        setIsLoading(true);
        const username = (
            document.querySelector('input[name="username"]') as HTMLInputElement
        ).value;
        const email = (
            document.querySelector('input[name="email"]') as HTMLInputElement
        ).value;
        const password = (
            document.querySelector('input[name="password"]') as HTMLInputElement
        ).value;
        const confirmPassword = (
            document.querySelector(
                'input[name="confirm-password"]'
            ) as HTMLInputElement
        ).value;
        const firstName = (
            document.querySelector(
                'input[name="firstName"]'
            ) as HTMLInputElement
        ).value;
        const lastName = (
            document.querySelector('input[name="lastName"]') as HTMLInputElement
        ).value;

        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword ||
            !firstName ||
            !lastName
        ) {
            setIsError(true);
            setIsValidRegister(false);
            setIsInvalidPassword(false);
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setIsError(true);
            setIsInvalidPassword(true);
            setIsValidRegister(true);
            setIsLoading(false);
            return;
        }

        const response = await authService.register(
            email,
            username,
            password,
            firstName,
            lastName
        );

        if (response && response._id) {
            setIsError(false);
            setIsValidated(true);
            setIsInvalidPassword(false);
            setIsValidRegister(true);
        } else {
            setIsError(true);
            setIsValidRegister(false);
        }
        setIsLoading(false);
    };

    return (
        <>
            <div
                role="tablist"
                className={`tabs tabs-lifted w-96 z-10 ${
                    isLoading ? 'pointer-events-none opacity-60 relative' : ''
                }`}>
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Login"
                    defaultChecked
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {isLoading && (
                        <span className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-dots loading-lg"></span>
                    )}
                    <TextInput
                        type="username"
                        name="username-log"
                        style={{ marginBottom: '0.5rem', width: '100%' }}
                    />
                    <TextInput
                        type="password"
                        name="password-log"
                        style={{ marginBottom: '0.5rem', width: '100%' }}
                        onKeyDownFn={(e) => {
                            if (e.key === 'Enter') {
                                handleLogin();
                            }
                        }}
                    />
                    <button
                        id="login"
                        className="btn btn-primary btn-block"
                        onClick={handleLogin}>
                        Login
                    </button>
                    {isBadCredential && (
                        <div
                            role="alert"
                            className="alert alert-error mt-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Error while connecting.</span>
                        </div>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Register"
                />
                <div
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {isLoading && (
                        <span className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-dots loading-lg"></span>
                    )}
                    <div className="flex gap-2 mb-2">
                        <TextInput
                            type="text"
                            name="firstName"
                            placeHolder="First Name"
                        />
                        <TextInput
                            type="text"
                            name="lastName"
                            placeHolder="Last Name"
                        />
                    </div>
                    <TextInput
                        type="username"
                        name="username"
                        style={{ marginBottom: '0.5rem' }}
                    />
                    <TextInput
                        type="email"
                        name="email"
                        style={{ marginBottom: '0.5rem' }}
                    />
                    <TextInput
                        type="password"
                        name="password"
                        style={{ marginBottom: '0.5rem' }}
                    />
                    <TextInput
                        type="password"
                        name="confirm-password"
                        placeHolder="Confirm password"
                        style={{ marginBottom: '0.5rem' }}
                        onKeyDownFn={(e) => {
                            if (e.key === 'Enter') {
                                handleRegister();
                            }
                        }}
                    />
                    <button
                        id="register"
                        className="btn btn-primary btn-block"
                        onClick={handleRegister}>
                        Register
                    </button>
                    {isError && (
                        <div
                            role="alert"
                            className="alert alert-error rounded-lg mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                {isInvalidPassword &&
                                    'The password are not matching.'}{' '}
                                {!isValidRegister && 'The username is taken.'}
                            </span>
                        </div>
                    )}

                    {isValidated && isValidRegister && (
                        <div
                            role="alert"
                            className="alert alert-success mt-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>User created !</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Auth;
