import React from 'react'
import { Search , CircleUser , ShoppingBasket   } from 'lucide-react'
import ToggleBtn from './ToggleBtn'
const RightSidenav = () => {
  return (
    <div className='flex justify-end items-center md:space-x-9 text-sm  font-semibold md:flex-grow'>
        
        <Search className='cursor-pointer' size='28px' strokeWidth='1.5px'/>
        <div  className='hidden lg:flex items-center space-x-3'>
        <CircleUser className='cursor-pointer' color='black' enableBackground='white'  size='28px' strokeWidth='1.5px'/>
            <span className='cursor-pointer'>ACCOUNT</span>
        </div>
        <div className='flex relative cursor-pointer'>
        <ShoppingBasket size='28px' strokeWidth='1.5px'/>
        <span className='absolute -top-1 -right-2  bg-topButton h-5 w-5 text-white items-center justify-center flex rounded-full'>5</span>
        </div>

    </div>
  )
}

export default RightSidenav