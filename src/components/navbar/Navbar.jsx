import React, { useState } from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import RightSidenav from './RightSidenav'
import ToggleBtn from './ToggleBtn'
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='flex items-center justify-between py-[50px] px-[11px] lg:px-[75px] md:px-[60px] sm:px-[45px]'>
      <ToggleBtn onClick={()=>{setOpen(o=>!o)}}/>
        <Logo/>
        <NavLinks/>
        <RightSidenav/>
        {open && (
        <MobileNavbar
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar