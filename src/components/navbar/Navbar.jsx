import React from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import RightSidenav from './RightSidenav'
import ToggleBtn from './ToggleBtn'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[50px] px-[11px] lg:px-[75px] md:px-[60px] sm:px-[45px]'>
      <ToggleBtn/>
        <Logo/>
        <NavLinks/>
        <RightSidenav/>
    </div>
  )
}

export default Navbar