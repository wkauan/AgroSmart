import logo from '/static/logo/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-verde left-0">
        <header className="md:flex items-center justify-between py-4 md:px-40 px-7 space-y-4">
            <section className="font-bold text-2xl cursor-pointer flex items-center">
                <Link to="/"><img src={logo} alt="Logotipo" className='w-[180px] h-36 object-contain' /></Link>
            </section>
            <section>
                <h2 className="font-bold"> Institucional </h2>
                <ul>
                    <li><Link to="/sobre-nos" className='hover:text-blue-200 transition-all duration-200 delay-100'>Sobre nós</Link></li>
                    <li><Link to="/termos" className='hover:text-blue-200 transition-all duration-200 delay-100'>Termos de uso</Link></li>
                    <li><Link to="/privacidade" className='hover:text-blue-200 transition-all duration-200 delay-100'>Política de Privacidade</Link></li>
                </ul>
            </section>
            <section>
                <h2 className="font-bold"> Contato </h2>
                <ul>
                    <li><a href="tel:+55 (19) 00000-0000<" className='hover:text-blue-200 transition-all duration-200 delay-100'>(19) 00000-0000</a></li>
                    <li><a href="mailto:contato@agrosmart.com.br" className='hover:text-blue-200 transition-all duration-200 delay-100'>contato@agrosmart.com.br</a></li>
                    <li><a href="/" className='hover:text-blue-200 transition-all duration-200 delay-100'>Fatec Araras-SP</a></li>
                </ul>
            </section>
        </header>
        <hr className="left-0 m-5" />
        <header className="md:flex items-center justify-between">
            <section className='text-sm'>
                <p> <Link to="/" className='hover:text-blue-200 transition-all duration-200 delay-100'>©AgroSmart</Link> Todos os direitos reservados.</p>
            </section>
        </header>
    </footer>
)
}

export default Footer
