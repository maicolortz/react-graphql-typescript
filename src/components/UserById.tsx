import React, { useState, useEffect } from 'react';
import { getUser, deleteUser } from '../utils/api';
import { useMutationStore } from '../Context/mutactionStore';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface UserPageProps {
    type: 'delete' | 'view';
}

const UserById: React.FC<UserPageProps> = ({ type }) => {
    const mutationStore = useMutationStore();
    const { setMutationAction } = mutationStore;

    const [id, setId] = useState<number | undefined>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [successMessage, setSuccessMessage] = useState('');



    useEffect(() => {
        if (successMessage) {
            setUser(null);
        }
    }, [successMessage]);

    const fetchUser = async () => {
        try {
            setLoading(true);
            setUser(null)
            const response = await getUser(id!);
            setUser(response);
        } catch (error) {
            setError('No existe ese Usuario con ese id en la base de datos');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value));
        setSuccessMessage("");
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (id) {
                fetchUser();
            }
        }
    };

    const handleDeleteUser = async () => {
        if (!id) {
            setError('Por favor, ingrese un ID válido');
            return;
        }

        try {
            const data = await deleteUser(id, setMutationAction);
            setError(null)
            setUser(null)
            setSuccessMessage('Usuario eliminado exitosamente');
            setId(undefined)
            setMutationAction("deletetodo")
        } catch (error) {
            setError('El usuario no se encuentra en la Base de datos');
        }
    };


    return (
        <div className="bg-slate-300  p-8 rounded shadow mx-auto  my-auto items-center flex flex-col">

            <h1 className="text-2xl font-bold mb-4">
                {type === 'delete' ? 'Eliminar Usuario' : 'Consultar Usuario por ID'}
            </h1>
            <input
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="ID de usuario"
                className="border border-gray-300 rounded py-2 px-4 mb-4"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            {loading ? (
                <p>Cargando usuario...</p>
            ) : (
                <div>
                    {user ? (
                        <div>
                            <div className="mb-4">
                                <label className="font-bold">Nombre:</label>
                                <p>{user.name}</p>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Género:</label>
                                <p>{user.gender}</p>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Email:</label>
                                <p>{user.email}</p>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Estado:</label>
                                <p>{user.status}</p>
                            </div>
                            {type === 'delete' && (
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                    onClick={() => handleDeleteUser()}
                                >
                                    Eliminar
                                </button>
                            )}
                        </div>
                    ) : (

                        <p className=" text-red-800 p-4 rounded">
                            {error}
                        </p>


                    )}
                </div>
            )}
            {successMessage && !user && (
                <p className="bg-green-200 text-green-800 p-4 rounded">{successMessage}</p>
            )}
        </div>
    );

};

export default UserById;
