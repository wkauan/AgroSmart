import logo from '/static/logo/logo.png'

const Footer = () => {
    return (
        <footer className="w-full bg-verde left-0">
            <header className="md:flex items-center justify-between py-4 md:px-40 px-7 space-y-4">
                <section className="font-bold text-2xl cursor-pointer flex items-center">
                    <img src={logo} alt="Logotipo" className='w-[180px] h-36 object-contain' />
                </section>
                <section>
                    <h2 className="font-bold"> Contato </h2>
                    <ul>
                        <li><a href="tel:+55 (19) 99999-9999" className='hover:text-blue-200 transition-all duration-200 delay-100'>(19) 99999-9999</a></li>
                        <li><a href="mailto:contato@agrosmart.com.br" className='hover:text-blue-200 transition-all duration-200 delay-100'>contato@agrosmart.com.br</a></li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-bold"> Legal </h2>
                    <ul>
                        <li><a className='hover:text-blue-200 transition-all duration-200 delay-100'>Termos de uso</a></li>
                        <li><a className='hover:text-blue-200 transition-all duration-200 delay-100'>Política de Privacidade</a></li>
                    </ul>
                </section>
            </header>
            <hr className="left-0 m-5" />
            <header className="md:flex items-center justify-between">
                <section className='text-sm'>
                    <p> <a className='hover:text-blue-200 transition-all duration-200 delay-100'>©AgroSmart.</a> Todos os direitos reservados.</p>
                </section>
                <section className='text-sm'>
                    <p>Desenvolvido por <a href="/" className='hover:text-blue-200 transition-all duration-200 delay-100'>AgroSmart</a></p>
                </section>
            </header>
        </footer>
    )
}

export default Footer
