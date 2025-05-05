import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    
       <ul className='hidden lg:flex justify-center  space-x-10 text-[15px] font-semibold flex-grow'>
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/shop'>Shop</Link></li>
        <li><Link to='/newsletter'>Newsletter</Link></li>
        <li ><Link to='/contact'>Contact</Link></li>
       </ul>
        
  )
}

export default NavLinks