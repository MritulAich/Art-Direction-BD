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
import Packages from './component/Packages.jsx';
import Gallery from './component/Gallery.jsx';
import Blogs from './component/Blogs.jsx';
import Contact from './component/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/packages',
        element: <Packages></Packages>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
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
     <RouterProvider router={router} />
  </StrictMode>,
)
