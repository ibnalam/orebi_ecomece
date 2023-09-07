import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Layout/Navber'
import Searchber from './Layout/Searchber'
import Footer from './Footer'

const Rootlayout = () => {
  return (
   <>
    <Navber/>
    <Searchber/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Rootlayout