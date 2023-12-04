import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import MainLayOut from './Layout/MainLayOut.jsx';
import { ThemeProvider } from './Components/Theme/ThemeContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>   
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
