import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../../utils/Utils';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { NotifyError, NotifySuccess } from '../../components/toast/notify/Notify.jsx';

const Login = () => {
    const { login } = useAuth();
    const Navigate = useNavigate();

    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}login`, {
                Email: formData.Email,
                Password: formData.Password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                login();

                localStorage.setItem('isAuthenticated', 'true');

                NotifySuccess(response.data.message);

                Navigate("/painel");
            } else {
                throw new Error(response.data.message);
            }
        } catch (err) {
            if (err.response) {
                NotifyError(err.response.data.message);
            } else {
                NotifyError('Erro desconhecido ao processar a solicitação');
            }
        }
    };

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'true') {
            Navigate("/painel");
        }
    }, [Navigate]);

    return (
        <header className="mt-60 md:mt-44 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsLogin" className="bg-white p-6 rounded-lg shadow-md" onSubmit={fetchLogin}>
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça login</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5">
                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="email" className="mb-2 font-semibold text-black">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="on"
                                placeholder="Insira seu E-mail"
                                className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleInputChange}
                                required
                            />
                        </section>

                        {/* Campo senha */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="password" className="mb-2 font-semibold text-black">Senha</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Insira sua senha"
                                className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={handleInputChange}
                                required
                            />
                        </section>

                        {/* Campo para página de cadastro */}
                        <section className="flex justify-center m-5">
                            <Link to="/cadastro" className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">
                                Ainda não possui uma conta? Cadastre-se
                            </Link>
                        </section>

                        {/* Botão para entrar */}
                        <section className="flex justify-center">
                            <button type="submit" className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
                                <span>Entrar</span>
                            </button>
                        </section>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default Login;
