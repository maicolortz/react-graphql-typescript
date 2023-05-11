import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { getLastFiveteenUsers, getUser } from '../utils/api';
import { Link } from 'react-router-dom';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getLastFiveteenUsers();
                setUsers(response);
                console.log(response);

                /*   const data = await getUser(925)
                  console.log(data) */
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <div id='secciones'>
                <nav className="flex justify-between bg-slate-300 py-4 px-8">
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-blue-500 hover:shadow"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users"
                                className="hover:text-blue-500 hover:shadow"
                            >
                                Consultar Usuario por ID
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users/new"
                                className="hover:text-blue-500 hover:shadow"
                            >
                                Crear Usuario
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users/edit"
                                className="hover:text-blue-500 hover:shadow"
                            >
                                Editar Usuario
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users/delete"
                                className="hover:text-blue-500 hover:shadow"
                            >
                                Eliminar Usuario
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <UserList users={users} />
        </div>
    );
};

export default HomePage;
