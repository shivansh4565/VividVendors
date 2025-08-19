import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
const UserLayout = () => {
  return (
  <>
   {/* Header component */}
   <Header/>
    {/* main component */}
    <main>
      <Outlet/>
    </main>
     {/* footer component */}
<Footer/>
  </>
  )
}

export default UserLayout
