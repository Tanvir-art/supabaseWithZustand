import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/",
        element: <Home/>
      }
    ]
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
