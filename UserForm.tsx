import React, { useState } from 'react';
import { useUser } from './UserContext';

const UserForm = () => {
    const { user, setUser } = useUser();
    const [formData, setFormData] = useState(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUser(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit User Information</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default UserForm;
