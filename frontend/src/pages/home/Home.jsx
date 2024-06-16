import { useNavigate } from "react-router-dom"
import Slider from '../../components/slider/Slider'

const Home = () => {
  const Navigate = useNavigate();

  const contact = (e) => {
    Navigate("contato");
  }

  return (
    <header className="w-full h-full mt-44">
      <Slider />

      {/* titulo */}
      <div className='md:flex justify-center mt-24'>
        <section>
          <h1 className='text-4xl font-bold'>Descubra o AgroSmart: Tecnologia Inteligente para sua Fazenda</h1>
          <h2 className='text-xl text-center mt-5'>Transforme sua agricultura com nossos sensores!</h2>
        </section>
      </div>

      {/* texto sobre o projeto */}
      <div className='md:flex justify-center mt-24'>
        <section className='bg-white p-8 rounded-lg'>
          <article className='max-w-2xl'>
            <p className='text-xl'>
              <strong>Bem-vindo ao AgroSmart</strong>, onde <strong>a inovação transforma a agricultura</strong>. Nosso sistema utiliza <strong>sensores avançados de temperatura e umidade</strong>, junto com <strong>câmeras ESP32</strong>, para <strong>monitorar sua plantação em tempo real</strong>. Todas as informações são exibidas em um <strong>dashboard intuitivo</strong>, permitindo que você <strong>tome decisões informadas</strong>, <strong>aumente a produtividade</strong> e <strong>garanta a saúde das suas plantas como nunca antes</strong>.
            </p>
          </article>
          <hr className="left-0 m-5" />
          <p className='text-center mt-5'>Entre em contato agora e veja como o <strong>AgroSmart</strong> pode revolucionar sua produção agrícola!</p>
        </section>
      </div>


      {/* botao para formulario */}
      <div className='flex justify-center px-6 md:px-0 mt-12'>
        <section>
          <button className='bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mb-5' onClick={contact}>
            Entrar em contato!
          </button>
        </section>
      </div>

    </header>
  )
}

export default Home
