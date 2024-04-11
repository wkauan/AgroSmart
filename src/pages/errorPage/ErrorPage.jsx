const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-branco">
        <a className="text-2xl mb-4 hover:font-bold hover:text-blue-500 hover:bg-blue-100 transition-all duration-200 delay-100 rounded-full p-2">
          Voltar para a Página Inicial
        </a>
        <p className="text-5xl font-bold mb-2">404</p>
        <p className="text-4xl mb-8">Oops! Página não encontrada</p>
        <p className="text-lg text-gray-600">
          A página que você está procurando pode ter sido removida ou não existe. Verifique o endereço novamente ou retorne à página inicial.
        </p>
      </div>
    );
  };
  
  export default ErrorPage;
