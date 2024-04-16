import React from 'react';
import { useUser } from './UserContext';

const UserInfo = () => {
    const { user } = useUser();

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phoneNumber}</p>
        </div>
    );
};

export default UserInfo;
