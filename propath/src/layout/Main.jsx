import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../components/navbar/Navbar2'
import Navbar1 from '../components/navbar/Navbar1'

const Main = () => {
  return (
    <div>
        <Navbar1/>
        <Navbar2/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}

export default Main