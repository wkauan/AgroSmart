import axios from 'axios';
import { useState } from "react";

import { NotifyError, NotifySuccess } from "../../components/toast/notify/Notify";
import { baseURL } from "../../utils/Utils";

const Contact = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        telefone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchContact = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}cadastro_contato`, {
                Name: formData.name,
                Telefone: formData.telefone,
                Email: formData.email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                NotifySuccess(response.data.message);
            }else {
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

    return (
        <header className="mt-56 md:mt-44 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsContact" className="bg-white p-6 rounded-lg shadow-md" onSubmit={fetchContact}>
                    <h2 className="text-3xl font-bold mb-4 text-center">Entre em contato conosco</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5">
                        {/* Campo Nome */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="name" className="mb-2 font-semibold text-black">Nome Completo</label>
                            <input type="text" name="name" id="name" placeholder="Insira seu nome completo" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="email" className="mb-2 font-semibold text-black">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Campo Telefone */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="telefone" className="mb-2 font-semibold text-black">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" placeholder="Insira seu número" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleInputChange} required />
                        </section>

                        {/* Botão para enviar */}
                        <section className="flex justify-center mt-5">
                            <button type="submit" className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
                                <span>Enviar</span>
                            </button>
                        </section>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default Contact;
