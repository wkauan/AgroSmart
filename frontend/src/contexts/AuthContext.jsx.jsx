import { createContext, useContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Criação de um contexto para autenticação
const AuthContext = createContext();

// Provedor de Autenticação que envolve a aplicação e fornece o estado de autenticação
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;

    // Efeito para checar o armazenamento local e verificar se há dados de usuário criptografados
    useEffect(() => {
        const encryptedUserData = localStorage.getItem('encryptedUser');

        if (encryptedUserData) {
            try {
                // Descriptografar os dados do usuário
                const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
                const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

                if (decryptedData) {
                    const userData = JSON.parse(decryptedData);

                    if (userData) {
                        setUser(true);
                    } else {
                        console.error('Dados descriptografados estão vazios');

                        localStorage.removeItem('encryptedUser');

                        setUser(false);
                    }
                } else {
                    console.error('Dados descriptografados estão vazios');

                    localStorage.removeItem('encryptedUser');

                    setUser(false);
                }
            } catch (error) {
                console.error('Erro ao descriptografar dados do usuário:', error);

                localStorage.removeItem('encryptedUser');

                setUser(false);
            }
        }
    }, [encryptionKey]);

    // Função de login que criptografa e armazena os dados do usuário
    const login = (userData) => {
        try {
            const encryptedUserData = CryptoJS.AES.encrypt(JSON.stringify(userData), encryptionKey).toString();

            localStorage.setItem('encryptedUser', encryptedUserData);

            setUser(true); 
        } catch (error) {
            console.error('Erro ao criptografar dados do usuário:', error);

            setUser(false);
        }
    };

    // Função de logout que remove os dados do usuário do armazenamento local
    const logout = () => {
        localStorage.removeItem('encryptedUser');

        setUser(false); 
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
};
