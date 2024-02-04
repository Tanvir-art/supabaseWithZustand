import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <h2>footer</h2>
      
    </div>
  )
}

export default Root
