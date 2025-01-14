import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
    theme: 'light',
    setTheme: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('light');
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
};