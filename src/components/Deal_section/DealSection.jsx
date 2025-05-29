import React from 'react'
import { weeklydeal } from '../../assets/weeklyDeal'
import CountdownTimer from './CountdownTImer'
const DealSection = () => {
  return (
    <section className='flex flex-col justify-center items-center md:flex-row md:justify-around bg-[#F6F6F6]'>
        <div className='flex flex-col items-center md:items-start '>
            <h2 className='text-[30px] font-bold'>Weekly Deal</h2>
            <span   className='text-[#F36523] font-bold text-[20px]'>{weeklydeal.price}</span>
            <CountdownTimer  eventdeal = {weeklydeal.eventfinishdate}/>
            <button className= 'text-[20px] font-bold text-white bg-[#f36523] py-2 px-6 '>SHOP NOW</button>
        </div>
        <div className=''>
            <img src={weeklydeal.imagProduct} alt="icon" />
        </div>
    </section>
  )
}

export default DealSection