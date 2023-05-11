import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../utils/api';
interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

const UserEditPage: React.FC<{ id2: number }> = ({ id2 }) => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser(id2);
                setUser(user);
                console.log(user)
            } catch (error) {
                console.log(error);
                // Mostrar mensaje o alerta de error
            }
        };

        fetchUser();
    }, [id2]);

    const handleSubmit = async (user: User) => {
        try {
            const userdata = await updateUser(id2, user);
            console.log(userdata)
            alert("actualizado con exito")
            // Mostrar mensaje o alerta de éxito
        } catch (error) {
            console.log(error);
            // Mostrar mensaje o alerta de error
        }
    };

    return (
        <div>
            <h1>Editar Usuario</h1>

            {user ? (
                <UserForm onSubmit={handleSubmit} initialUser={user} />
            ) : (
                <p>Cargando usuario...</p>
            )}
        </div>
    );
};

export default UserEditPage;
