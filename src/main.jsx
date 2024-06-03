import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Rotas

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import Login from './pages/login/Login.jsx'
import Contact from './pages/contact/Contact.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path: "sobre-nos",
        element: <AboutUs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
