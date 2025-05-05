import React from 'react'
import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <div className='flex-shrink-0 flex md:flex-grow lg:flex-grow-0 justify-end lg:justify-start'>
        <img src={logo} alt="icon-logo" />
    </div>
  )
}

export default Logo