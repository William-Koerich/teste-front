import React from 'react';
import UserInfo from './UserInfo';
import UserForm from './UserForm';
import { UserProvider } from './UserContext';

const UserProfilePage = () => {
const activities = ['Logged in', 'Updated profile', 'Logged out'];  // Exemplo simples de atividades

    return (
        <UserProvider>
            <div>
                <UserInfo />
                <UserForm />
            </div>
        </UserProvider>
    );
};

export default UserProfilePage;
