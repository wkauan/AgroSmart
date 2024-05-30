import React from 'react'
// import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <header className="w-full md:h-screen mt-44">
      {/* <Slider /> */}

      {/* titulo */}
      <div className='md:flex justify-center mt-24'>
        <section>
          <h1 className='text-5xl font-bold'>Descubra o AgroSmart: Tecnologia Inteligente para sua Fazenda</h1>
          <h2 className='text-xl text-center mt-5'>Transforme sua agricultura com nossos sensores</h2>
        </section>
      </div>

      {/* texto sobre o projeto */}
      <div className='md:flex justify-center mt-24'>
        <section className='bg-white p-8 rounded-lg'>
          <article className='max-w-2xl'>
            <p className='text-xl'>Bem-vindo ao AgroSmart, onde a inovação transforma a agricultura. Nosso sistema utiliza sensores avançados de temperatura e umidade, junto com câmeras ESP32, para monitorar sua plantação em tempo real. Todas as informações são exibidas em um dashboard intuitivo, permitindo que você tome decisões informadas, aumente a produtividade e garanta a saúde das suas plantas como nunca antes.</p>
          </article>
          <hr className="left-0 m-5" />
          <p className='text-center mt-5'>Entre em contato agora e veja como o AgroSmart pode revolucionar sua produção agrícola!</p>
        </section>
      </div>

      {/* botao para formulario */}
      <div className='md:flex justify-center mt-12'>
        <section>
          <button className='bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300'>
            Entrar em contato!
          </button>
        </section>
      </div>

    </header>
  )
}

export default Home
