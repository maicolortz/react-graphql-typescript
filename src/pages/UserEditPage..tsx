import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import { getUser, updateUser } from '../utils/api';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

const UserEditPage: React.FC = () => {
    const [id, setId] = useState<number | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    const fetchUser = async () => {
        try {
            setLoading(true);
            const userData = await getUser(id!);
            if (userData) {
                setUser(userData);
                setError('');
            } else {
                fetchUser();
                setError('No existe ese Usuario con ese id ');

            }
        } catch (error) {
            console.log(error);
            setId(null);
            setUser(null);
            setLoading(false);
            setError('No existe el Usuario con ese id ');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (user: User) => {
        try {
            await updateUser(id!, user);
            // Vuelve a obtener el usuario actualizado
            setId(null);
            setUser(null);
            setLoading(false);
            setError('');
            fetchUser();
        } catch (error) {
            console.log(error);
            setError('Ocurrio un problema al actualizar ');

        }
    };

    return (
        <div className="bg-slate-300 p-8 rounded shadow mx-auto h-full my-auto items-center flex flex-col">

            <h1 className="text-2xl font-bold mb-4">Editar Usuario</h1>
            <label className="font-bold">Consulta de Usuario</label>
            <input
                type="number"
                placeholder="ID de usuario"
                value={id !== null ? id : ''}
                onChange={(e) => setId(e.target.value !== '' ? parseInt(e.target.value) : null)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        fetchUser();
                    }
                }}
                className="border border-gray-300 rounded py-2 px-4 mb-4"
            />
            {loading ? (
                <p >Cargando usuario...</p>
            ) : user ? (
                <UserForm onSubmit={handleSubmit} initialUser={user} />
            ) : (
                <p className="bg-red-200 text-red-800 p-4 rounded">{error}</p>
            )}
        </div>
    );

};

export default UserEditPage;
