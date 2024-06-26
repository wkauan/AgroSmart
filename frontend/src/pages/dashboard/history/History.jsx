import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext.jsx';

const History = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [sensorData, setSensorData] = useState([]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            fetchSensorData();
        }
    }, [user, navigate]);

    const fetchSensorData = async () => {
        try {
            const response = await axios.get(`http://192.168.0.10:8000/get_sensores`);
            const formattedData = response.data.map(sensor => ({
                ...sensor,
                id: 'ESP32_CAM_1' // Fixa o ID para ESP32_CAM_1 para todos os sensores
            }));
            setSensorData(formattedData);
        } catch (error) {
            console.error('Erro ao buscar histórico de sensores:', error);
            // Aqui poderia ser adicionada uma lógica para exibir uma mensagem de erro ao usuário
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Formato padrão da data e hora local, pode ser ajustado conforme necessário
    };

    return (
        <div className="max-w-4xl mx-auto py-8 mt-64 md:mt-44 h-full">
            <h1 className="text-3xl font-bold mb-4 text-center">Histórico de Sensores</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperatura (°C)</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Umidade (%)</th>
                            <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Log de Criação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sensorData.map((sensor) => (
                            <tr key={sensor.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{sensor.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{sensor.temperature}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{sensor.humidity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatTimestamp(sensor.timestamp)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
