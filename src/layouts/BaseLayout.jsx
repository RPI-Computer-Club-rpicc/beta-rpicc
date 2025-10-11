import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/layouts/NavBar'
import Footer from '../components/layouts/Footer'
import RegistrationPopUp from '../components/marketing_modals/RegistrationPopUp'

const BaseLayout = () => {
  return (
    <div>
        <NavBar/>
        <RegistrationPopUp/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BaseLayout