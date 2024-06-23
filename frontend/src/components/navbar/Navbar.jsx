import React from 'react';
import { useAuth } from '../../contexts/AuthContext.jsx';
import logo from '/static/logo/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-10">
      <header className="md:flex items-center justify-between bg-verde py-4 md:px-40 px-7 space-y-4">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo" className='w-[180px] h-36 object-contain' />
          </Link>
        </div>

        {/* Dashboard Link */}
        <div className="md:flex items-center space-x-4">
          {user && (
            <Link
              to="/painel"
              className="text-lg text-white font-semibold hover:text-gray-300 transition-colors duration-200 hover:underline"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            // Logout Button
            <button
              type="button"
              onClick={logout}
              className="px-4 py-2 rounded bg-cinza text-white hover:font-semibold hover:text-gray-300 transition-all duration-200 delay-100"
            >
              Desconectar
            </button>
          ) : (
            // Login Button
            <button
              className="px-4 py-2 rounded bg-cinza text-white hover:font-semibold hover:text-gray-300 transition-all duration-200 delay-100"
            >
              <Link to="/login">
                Login
              </Link>
            </button>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
