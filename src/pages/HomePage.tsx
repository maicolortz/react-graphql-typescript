import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { getLastFiveteenUsers, getUser } from '../utils/api';

interface User {
    id: number;
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

                const data = await getUser(925)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Inicio</h1>
            <UserList users={users} />
        </div>
    );
};

export default HomePage;
