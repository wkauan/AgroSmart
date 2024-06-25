import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../contexts/AuthContext.jsx';
import { baseURL } from '../../utils/Utils.js';
import { NotifyError } from '../../components/toast/notify/Notify.jsx';

const Dashboard = () => {
  const user = useAuth();
  const navigate = useNavigate();

  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.post('http://192.168.0.10:8000/sensores'); // Altere o endpoint conforme necessário
      const { temperatura, umidade, imagem } = response.data;

      setTemperature(temperatura);
      setHumidity(umidade);
      setImageData(imagem);
    } catch (error) {
      NotifyError('Erro ao obter dados do servidor:', error);
    }
  };

  const fetchSensorUpload = async () => {
    try {
        const response = await axios.post(`${baseURL}sensor_upload`, {
            Tempatura: temperature,
            Umidade: humidity
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 201) {
          throw new Error(response.data.message);
        }
    } catch (err) {
        if (err.response) {
            NotifyError(err.response.data.message);
        } else {
            NotifyError('Erro desconhecido ao processar a solicitação');
        }
    }
};

  useEffect(() => {
    fetchDataFromServer(); // Carregar dados iniciais ao montar o componente
    fetchSensorUpload();
    const interval = setInterval(fetchDataFromServer, 60000); // Atualizar dados a cada minuto

    return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, [temperature, humidity]);

  return (
    <div className="flex flex-col mt-40 items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Título */}
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Dashboard de Monitoramento</h1>

          {/* Temperatura */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Temperatura</h2>
            <p className="text-gray-600">{temperature} °C</p>
          </div>

          {/* Umidade */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Umidade</h2>
            <p className="text-gray-600">{humidity} %</p>
          </div>

          {/* Imagem da Câmera */}
          <div className="mb-6">
            {imageData && (
              <img src={`data:image/jpeg;base64,${imageData}`} alt="Imagem da câmera" className="w-full rounded-lg shadow-lg" />
            )}
          </div>

          {/* Histórico */}
          <div>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1m10 10h7M7 7h10M5 13h5M17 7h2m-6 6h6M9 21v-6a3 3 0 013-3h7" />
              </svg>
              Ver Histórico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
