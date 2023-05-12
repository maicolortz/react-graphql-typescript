import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import { createUser } from '../utils/api';
import { useMutationStore } from '../Context/mutactionStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

const UserCreatePage: React.FC = () => {
    const mutationStore = useMutationStore();
    const { setMutationAction } = mutationStore;
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (user: User) => {
        try {
            await createUser(user, setMutationAction)
            toast.success("'Usuario creado exitosamente'")
            setErrorMessage("")
            // Mostrar mensaje o alerta de éxito
        } catch (error) {
            console.log(error)
            setErrorMessage("Problema de validacion")
            // Mostrar mensaje o alerta de error
        }
    };

    return (
        <div className="bg-slate-300 p-8 rounded shadow mx-auto my-auto items-center flex flex-col">

            <h1 className="text-2xl font-bold mb-4">Registrar Usuario</h1>
            <UserForm onSubmit={handleSubmit} />
            {errorMessage && <p className="bg-red-200 text-red-800 p-4 rounded">{errorMessage}</p>}
            <ToastContainer />

        </div>
    );
};

export default UserCreatePage;
