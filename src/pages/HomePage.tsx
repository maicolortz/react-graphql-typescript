import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { getLastFifteenUsers } from '../utils/api';

import { useMutationStore } from "../Context/mutactionStore";

interface User {
    id?: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

const HomePage: React.FC = () => {

    const mutationStore = useMutationStore();
    const { mutationAction, setMutationAction } = mutationStore;
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await getLastFifteenUsers();
            setUsers(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        // corre fetch cuando hay una mutacion y asi mantiene actualizado en tiempo real la lista de usuarios
        if (mutationAction) {
            fetchUsers();
        }
    }, [mutationAction, setMutationAction]);

    return (
        <div >
            <UserList users={users} />
        </div>
    );
};

export default HomePage;
