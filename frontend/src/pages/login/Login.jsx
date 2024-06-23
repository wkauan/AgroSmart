import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../../utils/Utils';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { NotifyError, NotifySuccess } from '../../components/toast/notify/Notify.jsx';

const Login = () => {
    const { user, login } = useAuth();
    const navigate = useNavigate();

    // Estado para armazenar os dados do formulário de login
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Função para atualizar o estado do formulário com as mudanças nos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para lidar com o envio do formulário de login
    const fetchLogin = async (e) => {
        e.preventDefault();

        try {
            // Requisição POST para o backend com os dados do formulário
            const response = await axios.post(`${baseURL}login`, {
                Email: formData.email,
                Password: formData.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Se o login for bem-sucedido (status 200)
            if (response.status === 200) {
                login(response.data);

                NotifySuccess(response.data.message);

                navigate("/painel");
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

    // Efeito para verificar se o usuário já está autenticado e redirecionar para o painel
    useEffect(() => {
        if (user) {
            navigate("/painel");
        }
    }, [user, navigate]);

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

                        {/* Link para página de cadastro */}
                        <section className="flex justify-center m-5">
                            <Link to="/cadastro" className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">
                                Ainda não possui uma conta? Cadastre-se
                            </Link>
                        </section>

                        {/* Botão de entrar */}
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
