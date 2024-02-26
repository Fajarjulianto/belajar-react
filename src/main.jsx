import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ProductsPage from './pages/products.jsx'
import ProfilePage from './pages/profile.jsx'
import DetailProductPage from './pages/detailproduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeContextProvider from './context/DarkMode.jsx'
import { TotalPriceProvider } from './context/totalPriceContext.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello guys</h1>,
    errorElement: 
    <div className="flex justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold text-red-600">Page Not Found !</h1>
    </div> ,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/detailproduct/:id',
    element: <DetailProductPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
           <TotalPriceProvider>
              <RouterProvider  router={router}/>
           </TotalPriceProvider>
       </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
