import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import { getUser, updateUser, deleteUser } from '../utils/api';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface UserPageProps {
    type: 'delete' | 'view';
}

const UserPage: React.FC<UserPageProps> = ({ type }) => {
    const [id, setId] = useState<number | undefined>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value));
    };

    const handleInputKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (id) {
                try {
                    setLoading(true);
                    setError('');
                    const response = await getUser(id);
                    setUser(response);
                } catch (error) {
                    setError('El usuario no se encuentra en la base de datos');
                } finally {
                    setLoading(false);
                }
            }
        }
    };

    const handleDeleteUser = async () => {
        if (!id) {
            setError('Por favor, ingrese un ID válido');
            return;
        }
        setError('');

        try {
            await deleteUser(id);
            setSuccessMessage('Usuario eliminado exitosamente');
            setUser(null);
        } catch (error) {
            setError('El usuario no se encuentra en la Base de datos');
        }
    };

    return (
        <div>
            <h1>{type === 'delete' ? 'Eliminar Usuario' : 'Consultar Usuario por ID'}</h1>
            <input
                type="number"
                placeholder="ID de usuario"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            {loading ? (
                <p>Cargando usuario...</p>
            ) : (
                <div>
                    {user ? (
                        <div>
                            <div>
                                <label>Nombre:</label>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <label>Género:</label>
                                <p>{user.gender}</p>
                            </div>
                            <div>
                                <label>Email:</label>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <label>Estado:</label>
                                <p>{user.status}</p>
                            </div>
                            {type === 'delete' && <button onClick={handleDeleteUser}>Eliminar</button>}
                        </div>
                    ) : (
                        <p>{error || 'Ingrese un ID de usuario válido y presione Enter'}</p>
                    )}
                </div>
            )}
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default UserPage;
