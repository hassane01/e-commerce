import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContrloersSlidr = ({current , total , prev , next}) => {
  return (
    <>
    <div className='flex flex-col items-center py-4 md:py-6 bg-gray-50'> 
                <div className="hidden md:flex items-center space-x-3 text-xl font-semibold mb-4 lg:absolute lg:left-0 lg:ml-20">
                    <span>{String(current + 1).padStart(2, '0')}</span>
                    <span className="bg-black w-24 md:w-[150px] lg:w-[200px] h-0.5"></span>
                    <span>{String(total).padStart(2, '0')}</span>
                </div>
                <div className='lg:absolute top-1/2 w-full flex justify-center space-x-2 md:space-x-32 lg:space-x-60 lg:justify-between '>
                    <button
                        onClick={prev}
                        className="p-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
                    >
                        <ChevronLeft size={32} strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={next}
                        className="p-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
                    >
                        <ChevronRight size={32} strokeWidth={2.5}/>
                    </button>
                </div>
            </div>
    </>
  )
}

export default ContrloersSlidr