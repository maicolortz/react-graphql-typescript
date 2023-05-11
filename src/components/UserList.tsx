import React from 'react';

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
        <div>
            <h2>Lista de Usuarios</h2>

            {users.map((user) => (
                <ul key={user.email}>
                    <li >{user.name}</li>
                    <li>{user.email}</li>
                    <li >{user.gender}</li>
                    <li >{user.status}</li>

                </ul>

            ))}

        </div>
    );
};

export default UserList;
