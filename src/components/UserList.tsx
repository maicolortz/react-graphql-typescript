import React from 'react';
import { Link } from 'react-router-dom';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (

        <>
            <h2 className="text-2xl font-bold mb-4 ml-4">Lista de los ultimos 15 usuarios creados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                {users.map((user) => (
                    <div key={user.email} className="bg-white p-4 rounded shadow">
                        <div className="mb-2">
                            <label className="font-bold">Nombre:</label>
                            <p>{user.name}</p>
                        </div>
                        <div className="mb-2">
                            <label className="font-bold">Email:</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="mb-2">
                            <label className="font-bold">Género:</label>
                            <p>{user.gender}</p>
                        </div>
                        <div className="mb-2">
                            <label className="font-bold">Estado:</label>
                            <p>{user.status}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );



};

export default UserList;
