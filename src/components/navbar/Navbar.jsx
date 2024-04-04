const Navbar = () => {
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-10">
      <header className="md:flex items-center justify-between bg-verde py-4 md:px-40 px-7 space-y-4">
        <section className="font-bold text-2xl cursor-pointer flex items-center"><img className="w-[130px] h-30 object-contain" src="./logo.png" alt="" /></section>
        <section className="text-lg cursor-pointer">
          <ul className="flex flex-row gap-8">
            <li>Inicio</li>
            <li>teste</li>
            <li>teste2</li>
          </ul>
        </section>
        <section>login/logout</section>
      </header>
    </nav>
  )
}

export default Navbar
