import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import { RouterProvider } from "react-router";
import { router } from './router/router';
import 'aos/dist/aos.css';
import Aos from 'aos';
import AuthProvider from './contexts/Auth/AuthProvider';

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist bg-gray-100'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
