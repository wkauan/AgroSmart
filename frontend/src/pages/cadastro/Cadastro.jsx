import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { baseURL } from '../../utils/Utils';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { NotifyError, NotifySuccess } from '../../components/toast/notify/Notify.jsx';

const Cadastro = () => {
    const { user, login } = useAuth();
    const Navigate = useNavigate();

    // Estado para armazenar os dados do formulário
    const [formData, setformData] = useState({
        Name: '',
        Telefone: '',
        Email: '',
        Password: '',
        confirmPassword: '',
    });

    // Função para atualizar o estado do formulário com as mudanças nos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }

    // Função para lidar com o envio do formulário de cadastro
    const fetchCadastro = async (e) => {
        e.preventDefault();

        // Verifica se as senhas coincidem
        if (formData.Password !== formData.confirmPassword) {
            NotifyError("As senhas não coincidem");
            return;
        }

        try {
            // Requisição POST para o backend com os dados do formulário
            const response = await axios.post(`${baseURL}cadastro`, {
                Name: formData.Name,
                Telefone: formData.Telefone,
                Email: formData.Email,
                Password: formData.Password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Se o cadastro for bem-sucedido (status 201)
            if (response.status === 201) {
                login(response.data);

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

    // Efeito para verificar se o usuário já está autenticado e redirecionar para o painel
    useEffect(() => {
        if (user) {
            Navigate("/painel");
        }
    }, [user, Navigate]);

    return (
        <header className="mt-60 md:mt-44 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsCadastro" className="bg-white p-6 rounded-lg shadow-md" onSubmit={fetchCadastro}>
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça o seu cadastro</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5 space-y-4">
                        {/* Campo para o nome completo */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="Name" className="font-medium">Nome Completo</label>
                            <input type="text" name="Name" id="Name" autoComplete="on" placeholder="Insira seu nome completo" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo para o telefone celular */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="Telefone" className="font-medium">Telefone Celular</label>
                            <input type="tel" name="Telefone" id="Telefone" placeholder="Insira seu telefone celular" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo para o e-mail */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="Email" className="font-medium">E-mail</label>
                            <input type="email" name="Email" id="Email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo para a senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="Password" className="font-medium">Senha</label>
                            <input type="password" name="Password" id="Password" autoComplete="new-password" placeholder="Insira sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo para confirmar a senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="confirmPassword" className="font-medium">Confirme sua senha</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" placeholder="Confirme sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Link para login caso o usuário já tenha uma conta */}
                        <section className="flex justify-center mb-5">
                            <Link to="/login" className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">Já possui uma conta? Faça login</Link>
                        </section>

                        {/* Link para a política de privacidade */}
                        <section className="flex justify-center mb-5">
                            <p className="text-sm">Ao continuar você concorda com nossa <Link to="/privacidade" className="font-medium hover:font-bold transition-all duration-200 delay-100 cursor-pointer">política de privacidade</Link>.</p>
                        </section>

                        {/* Botão de cadastro */}
                        <section className="flex justify-center">
                            <button type="submit" className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
                                <span>Cadastrar</span>
                            </button>
                        </section>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default Cadastro;
