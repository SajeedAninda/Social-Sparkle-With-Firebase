import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicesDetails from './Services/ServicesDetails.jsx';
import App from './App';
import Home from '../src/Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Authentication/AuthProvider';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import Planners from './Components/Planners/Planners';
import Blogs from './Components/Blogs/Blogs';
import ErrorRoute from './Components/Error/ErrorRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorRoute></ErrorRoute>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/servicesDetails/:id",
        loader: () => fetch("/eventData.json"),
        element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/planners",
        element: <PrivateRoute><Planners></Planners></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
