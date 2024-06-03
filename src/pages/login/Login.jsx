import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <header className="mt-60 md:mt-44 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsLogin" className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça login</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5">
                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="email" className="mb-2 font-semibold text-black">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo senha */}
                        <section className="flex flex-col justify-center py-3">
                            <label htmlFor="password" className="mb-2 font-semibold text-black">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Insira sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                        </section>

                        {/* Campo para página de cadastro */}
                        <section className="flex justify-center m-5">
                            <Link to="/cadastro" className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">Ainda não possui uma conta? Cadastre-se</Link>
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
