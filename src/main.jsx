import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './Home.jsx';
import Gallery from './component/Gallery.jsx';
import Contact from './component/Contact.jsx';
import Packages from './component/packages/Packages.jsx';
import Photography from './component/packages/Photography.jsx';
import Cinematography from './component/packages/Cinematography.jsx';
import ComboPackages from './component/packages/ComboPackages.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Booking from './component/Booking.jsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/packages',
        element: <Packages></Packages>
      },
      {
        path: '/photography',
        element: <Photography></Photography>
      },
      {
        path: '/cinematography',
        element: <Cinematography></Cinematography>
      },
      {
        path: '/comboPackages',
        element: <ComboPackages></ComboPackages>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
