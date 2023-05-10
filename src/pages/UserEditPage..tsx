import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../utils/api';

const UserEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser(parseInt(id || "0"));
                setName(user.name);
            } catch (error) {
                console.log(error);
                // Mostrar mensaje o alerta de error
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (name: string | undefined) => {
        try {
            await updateUser(parseInt(id || "0"), name ?? "");
            // Mostrar mensaje o alerta de éxito
        } catch (error) {
            console.log(error);
            // Mostrar mensaje o alerta de error
        }
    };

    return (
        <div>
            <h1>Editar Usuario</h1>
            {name ? (
                <UserForm onSubmit={handleSubmit} initialName={name} />
            ) : (
                <p>Cargando usuario...</p>
            )}
        </div>
    );
};

export default UserEditPage;
