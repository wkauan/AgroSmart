import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Rotas

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'

import Cadastro from './pages/cadastro/Cadastro.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import Login from './pages/login/Login.jsx'
import Contact from './pages/contact/Contact.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Terms from './pages/terms/Terms.jsx'
import Privacy from './pages/privacy/Privacy.jsx'
import Loading from './components/fallback/Loading.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

async function delay(promise) {
  return await new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const LazyHome = lazy(() => delay(import('./pages/home/Home.jsx')))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Loading />}> <LazyHome /> </Suspense>
      },
      {
        path: "cadastro",
        element: <AuthProvider> <Cadastro /> </AuthProvider>
      },
      {
        path: "login",
        element: <AuthProvider> <Login /> </AuthProvider>
      },
      {
        path: "painel",
        element: <AuthProvider> <Dashboard /> </AuthProvider>
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path: "sobre-nos",
        element: <AboutUs />
      },
      {
        path: "termos",
        element: <Terms />
      },
      {
        path: "privacidade",
        element: <Privacy />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
