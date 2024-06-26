import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../contexts/AuthContext.jsx';
import { NotifyError } from '../../components/toast/notify/Notify.jsx';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchDataFromServer();
    }
  }, [user, navigate]);

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('http://192.168.0.10:8000/get_sensores');
      const data = response.data;

      console.log('Dados recebidos:', data);

      // Verifique se há dados de sensores na resposta
      if (Array.isArray(data) && data.length > 0) {
        // Vamos assumir que estamos interessados no primeiro sensor da lista
        const firstSensor = data[0];
        setTemperature(firstSensor.temperature);
        setHumidity(firstSensor.humidity);
      } else {
        NotifyError('Nenhum dado de sensor encontrado');
      }
    } catch (error) {
      NotifyError('Erro ao obter dados de sensores');
    }
  };

  return (
    <div className="flex flex-col mt-40 items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Título */}
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Dashboard de Monitoramento</h1>

          {/* Temperatura */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Temperatura</h2>
            <p className="text-gray-600">{temperature !== null ? `${temperature} °C` : 'Carregando...'}</p>
          </div>

          {/* Umidade */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Umidade</h2>
            <p className="text-gray-600">{humidity !== null ? `${humidity} %` : 'Carregando...'}</p>
          </div>

          {/* Histórico */}
          <div>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m10 10h7M7 7h10M5 13h5M17 7h2m-6 6h6M9 21v-6a3 3 0 013-3h7" />
              </svg>
              <Link to="/historico">
                Ver Histórico
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
