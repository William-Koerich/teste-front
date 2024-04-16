import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = {
    name: string;
    email: string;
    phoneNumber: string;
};

type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType>({ name: '', email: '', phoneNumber: '' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
