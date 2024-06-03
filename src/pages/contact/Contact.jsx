const Contact = () => {
    return (
        <header className="mt-60 md:mt-44 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsContact" className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Entre em contato conosco</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5">
                        {/* Campo Nome */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="name" className="mb-2 font-semibold text-black">Nome Completo</label>
                            <input type="text" name="name" id="name" placeholder="Insira seu nome completo" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="email" className="mb-2 font-semibold text-black">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo Telefone */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="telefone" className="mb-2 font-semibold text-black">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" placeholder="Insira seu número" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
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
