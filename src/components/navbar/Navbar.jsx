import logo from '/static/logo/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-10">
      <header className="md:flex items-center justify-between bg-verde py-4 md:px-40 px-7 space-y-4">
        <section className="font-bold text-2xl cursor-pointer flex items-center">
          <Link to="/"><img src={logo} alt="Logotipo" className='w-[180px] h-36 object-contain' /></Link>
        </section>
        <section>
          <button type="submit" className="w-40 h-10 mb-4 bg-cinza text-white hover:w-44 hover:font-bold transition-all duration-200 delay-100">
            <span><Link to="/login">Login</Link></span>
          </button>

        </section>
      </header>
    </nav>
  )
}

export default Navbar
