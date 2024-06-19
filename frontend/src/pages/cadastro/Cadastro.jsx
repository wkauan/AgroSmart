import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { baseURL } from '../../utils/Utils';
import Toast from '../../components/toast/Toast';

const Cadastro = () => {
    const [cadastro, setCadastro] = useState({
        id: '800',
        Name: 'lucas Roger Xavier 242',
        Telefone: '5145442',
        Email: 'l4uc5as5544@gmail.com',
        Password: '4956865toikkau7',

    });

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const fetchCadastro = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post(`${baseURL}cadastro`, cadastro, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.data

            if (response.status === 201) {
                notifySuccess(data.message);
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            if (err.response) {
                notifyError(err.response.data.message);
            } else {
                notifyError('Erro desconhecido ao processar a solicitação');
            }
        }
    };

    return (
        <header className="mt-60 md:mt-44 w-full py-8 h-screen">
            <Toast />
            <section className="max-w-md mx-auto">
                <form id="formsCadastro" className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça o seu cadastro</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5 space-y-4">
                        {/* Campo nome */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="name" className="font-medium">Nome Completo</label>
                            <input type="text" name="name" id="name" autoComplete="on" placeholder="Insira seu nome completo" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo telefone celular */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="telCelular" className="font-medium">Telefone Celular</label>
                            <input type="tel" name="telCelular" id="telCelular" placeholder="Insira seu telefone celular" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="email" className="font-medium">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="password" className="font-medium">Senha</label>
                            <input type="password" name="password" id="password" autoComplete="new-password" placeholder="Insira sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo confirmar senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="confirmPassword" className="font-medium">Confirme sua senha</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" placeholder="Confirme sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo para página de login */}
                        <section className="flex justify-center mb-5">
                            <Link to="/login" className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">Já possui uma conta? Faça login</Link>
                        </section>

                        <section className="flex justify-center mb-5">
                            <p className="text-sm">Ao continuar você concorda com nossa <Link to="/privacidade" className="font-medium hover:font-bold transition-all duration-200 delay-100 cursor-pointer">política de privacidade</Link>.</p>
                        </section>

                        {/* Botão para cadastrar */}
                        <section className="flex justify-center">
                            <button type="submit" onClick={fetchCadastro} className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
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
