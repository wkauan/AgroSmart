import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') === 'true');

    const login = () => {
        setUser(true);

        localStorage.setItem('user', 'true')
    };

    const logout = () => {
        setUser(null);

        localStorage.setItem('user', 'false')
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
