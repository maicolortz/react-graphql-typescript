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
            const data = await createUser(user);
            console.log(data);
            alert("creado con exito")
            // Mostrar mensaje o alerta de éxito
        } catch (error) {
            console.log(error);
            // Mostrar mensaje o alerta de error
        }
    };

    return (
        <div>
            <h1>Crear Usuario</h1>
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};

export default UserCreatePage;
