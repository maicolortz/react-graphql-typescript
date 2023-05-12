import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div id="secciones">
            <nav className="flex justify-between bg-slate-300 py-4 px-8">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-500 border-b-2 border-b-blue-400 hover:shadow">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" className="hover:text-blue-500 border-b-2 border-b-blue-400 hover:shadow">
                            Consultar Usuario por ID
                        </Link>
                    </li>
                    <li>
                        <Link to="/users/new" className="hover:text-blue-500 border-b-2 border-b-blue-400 hover:shadow">
                            Crear Usuario
                        </Link>
                    </li>
                    <li>
                        <Link to="/users/edit" className="hover:text-blue-500 border-b-2 border-b-blue-400 hover:shadow">
                            Editar Usuario
                        </Link>
                    </li>
                    <li>
                        <Link to="/users/delete" className="hover:text-blue-500 border-b-2 border-b-blue-400 hover:shadow">
                            Eliminar Usuario
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
