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
import Photography from './component/packages/Photography.jsx';
import Cinematography from './component/packages/Cinematography.jsx';
import ComboPackages from './component/packages/ComboPackages.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Booking from './component/Booking.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ClientPortal from './component/ClientPortal.jsx';
import Services from './component/packages/Packages.jsx';
import Update from './component/Update.jsx';
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
        path: '/services',
        element: <Services></Services>
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
        // element: <PrivateRoute><Booking></Booking></PrivateRoute>
        element: <Booking></Booking>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/clientPortal',
        element:<ClientPortal></ClientPortal>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
