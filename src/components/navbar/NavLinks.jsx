import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../assets/links'

const NavLinks = () => {
  return (
    
    <ul className="hidden lg:flex justify-center space-x-10 text-[15px] font-semibold flex-grow">
    {navLinks.map(({ name, to }) => (
      <li key={to}>
        <Link to={to}>{name}</Link>
      </li>
    ))}
  </ul>
        
  )
}

export default NavLinks