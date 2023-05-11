import React from 'react';
import UserForm from '../components/UserForm';
import { createUser } from '../utils/api';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

const UserCreatePage: React.FC = () => {
    const handleSubmit = async (user: User) => {
        try {
            // Mostrar mensaje o alerta de éxito
        } catch (error) {
            console.log(error);
            // Mostrar mensaje o alerta de error
        }
    };

    return (
        <div className="bg-slate-300 p-8 rounded shadow mx-auto my-auto items-center flex flex-col">

            <h1 className="text-2xl font-bold mb-4">Registrar Usuario</h1>
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};

export default UserCreatePage;
