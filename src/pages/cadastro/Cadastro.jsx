// import { baseURL } from '../../utils/utils';
// import { useAuth } from '../../contexts/AuthContext';

const Cadastro = () => {
    // const { login } = useAuth();
    // const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     nome: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    //     confirmSenha: '',
    //     promoEmails: true,
    // });

    // const [error, setError] = useState('');

    // const handleFormEdit = (e, nome) => {
    //     if (nome === 'promoEmails') {
    //         setFormData({
    //             ...formData,
    //             promoEmails: e.target.checked,
    //         });
    //     } else {
    //         setFormData({
    //             ...formData,
    //             [nome]: e.target.value,
    //         });
    //     }
    // };

    // const handleCheckboxChange = () => {
    //     setFormData({
    //         ...formData,
    //         promoEmails: !formData.promoEmails,
    //     });
    // };

    // const handleForm = async (e) => {
    //     try {
    //         e.preventDefault();

    //         const response = await fetch(`${baseURL}cadastro/`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const json = await response.json();

    //         if (response.status === 200) {
    //             login(json.name);

    //             navigate("/");
    //         } else {
    //             throw new Error(json.error);
    //         }
    //     } catch (err) {
    //         setError(err.message);

    //         setTimeout(() => {
    //             setError('');
    //         }, 5000)
    //     }
    // };

    return (
        <header className="mt-40 w-full py-8 h-screen">
            <section className="max-w-md mx-auto">
                <form id="formsLogin" className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center">Faça o seu cadastro</h2>
                    <hr className="left-0 m-5" />
                    <fieldset className="mt-5 space-y-4">
                        {/* Campo nome */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="name" className="font-medium">Insira seu Nome completo</label>
                            <input type="text" name="name" id="name" autoComplete="on" className="border-black border-2 px-8 py-2 rounded-lg text-black" required  />
                        </section>

                        {/* Campo telefone celular */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="telCelular" className="font-medium">Telefone Celular:</label>
                            <input type="tel" name="telCelular" id="telCelular" className="border-black border-2 px-8 py-2 rounded-lg text-black" required />
                        </section>

                        {/* Campo E-mail */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="email" className="font-medium">Insira seu E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="on" className="border-black border-2 px-8 py-2 rounded-lg text-black" required />
                        </section>

                        {/* Campo senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="password" className="font-medium">Insira sua senha</label>
                            <input type="password" name="password" id="password" autoComplete="new-password" className="border-black border-2 px-8 py-2 rounded-lg text-black" required />
                        </section>

                        {/* Campo confirmar senha */}
                        <section className="flex flex-col justify-center">
                            <label htmlFor="confirmPassword" className="font-medium">Confirme sua senha</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="new-password" className="border-black border-2 px-8 py-2 rounded-lg text-black" required />
                        </section>

                        {/* Campo para página de login */}
                        <section className="flex justify-center mb-5">
                            <a  className="text-sm text-blue-400 hover:font-bold transition-all duration-200 delay-100">Já possui uma conta? Faça login</a>
                        </section>

                        <section className="flex justify-center mb-5">
                            <p className="text-sm">Ao continuar você concorda com nossa <a className="font-medium hover:font-bold transition-all duration-200 delay-100">política de privacidade</a>.</p>
                        </section>

                        {/* Botão para cadastrar */}
                        <section className="flex justify-center">
                            <button type="submit" className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
                                <span>Cadastrar</span>
                            </button>
                        </section>
                        {/* {error && <p className="m-3 error">{error}</p>} */}
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default Cadastro;
