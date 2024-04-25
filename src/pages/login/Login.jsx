// import { baseURL } from '../../utils/utils';
// import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    // const { login } = useAuth();
    // const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     email: '',
    //     senha: '',
    // });

    // const [error, setError] = useState('');

    // const handleFormEdit = (e, nome) => {
    //     setFormData({
    //         ...formData,
    //         [nome]: e.target.value
    //     })
    // };

    // const handleForm = async (e) => {
    //     try {
    //         e.preventDefault();

    //         const response = await fetch(`${baseURL}login/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         const json = await response.json();

    //         if (response.status === 200) {
    //             login();

    //             navigate("/");
    //         } else {
    //             throw new Error(json.error);
    //         }
    //     } catch (err) {
    //         setError(err.message);

    //         setTimeout(() => {
    //             setError('');
    //         }, 5000);
    //     }
    // };

    return (
        <header className="mt-40 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsLogin" className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça login</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5">
                    {/* {error && <p className="m-3 error">{error}</p>} */}
                        {/* Campo E-mail */}
                        <section className="flex justify-center py-3">
                            <input type="email" name="email" id="email" autoComplete="on" placeholder="Insira seu E-mail" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-black" required />
                        </section>

                        {/* Campo senha */}
                        <section className="flex justify-center">
                            <input type="password" name="password" id="password" placeholder="Insira sua senha" className="border-black border-2 px-8 py-2 rounded-lg text-black placeholder:text-black" required />
                        </section>

                        {/* Campo para página de cadastro */}
                        <section className="flex justify-center m-5">
                            <a className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100 cursor-pointer">Ainda não possui uma conta? Cadastre-se</a>
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
