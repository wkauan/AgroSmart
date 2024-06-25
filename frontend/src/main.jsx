import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Rotas

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'

import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Terms from './pages/terms/Terms.jsx'
import Privacy from './pages/privacy/Privacy.jsx'
import Loading from './components/fallback/Loading.jsx'

async function delay(promise) {
  return await new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

const LazyDash = lazy(() => delay(import('./pages/dashboard/Dashboard.jsx')))
const LazyHome = lazy(() => delay(import('./pages/home/Home.jsx')))
const LazyCadastro = lazy(() => delay(import('./pages/cadastro/Cadastro.jsx')));
const LazyLogin = lazy(() => delay(import('./pages/login/Login.jsx')));
const LazyContact = lazy(() => delay(import('./pages/contact/Contact.jsx')));
const LazyHistory = lazy(() => delay(import('./pages/dashboard/history/History.jsx')));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider> <App /> </AuthProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Loading />}> <LazyHome /> </Suspense>
      },
      {
        path: "cadastro",
        element: <Suspense fallback={<Loading />}> <LazyCadastro /> </Suspense>
      },
      {
        path: "login",
        element: <Suspense fallback={<Loading />}> <LazyLogin /> </Suspense>
      },
      {
        path: "painel",
        element: <Suspense fallback={<Loading />}> <LazyDash /> </Suspense>
      },
      {
        path: "historico",
        element: <Suspense fallback={<Loading />}> <LazyHistory /> </Suspense>
      },
      {
        path: "contato",
        element: <Suspense fallback={<Loading />}> <LazyContact /> </Suspense>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
