import React, { useEffect, useState } from 'react';

interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
}

interface UserFormProps {
    onSubmit: (user: User) => Promise<void>;
    initialUser?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialUser }) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !gender || !email || !status) {
            setErrorMessage('Todos los campos son requeridos');
            return;
        }
        setErrorMessage('');
        const user: User = { name, gender, email, status };
        try {
            await onSubmit(user);
            setSuccessMessage(initialUser ? 'Usuario actualizado exitosamente' : 'Usuario creado exitosamente');
            setName('');
            setGender('');
            setEmail('');
            setStatus('');
        } catch (error) {
            setErrorMessage('Error al ' + (initialUser ? 'actualizar' : 'crear') + ' el usuario');
        }
    };

    useEffect(() => {
        if (initialUser) {
            setName(initialUser.name);
            setGender(initialUser.gender);
            setEmail(initialUser.email);
            setStatus(initialUser.status);
        }
    }, [initialUser])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="form-input w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        type="text"
                        placeholder="Nombre"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Género
                    </label>
                    <select
                        className="form-select w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-input w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Estado
                    </label>
                    <select
                        className="form-select w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    {initialUser ? 'Actualizar' : 'Crear'}
                </button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
        </div>
    );

};

export default UserForm;
