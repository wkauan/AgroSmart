import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext.jsx";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate('/login');
    }
  }, [user, Navigate]);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
