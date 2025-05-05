import React from 'react'

const ToggleBtn = ({onClick}) => {
  return (
    <div onClick={onClick} className="lg:hidden flex flex-col items-start space-y-[6px] group hover:cursor-pointer min-w-[30px]">
      {/* Full width bar */}
      <span className="block h-1 w-full bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
      {/* 66% width bar */}
      <span className="block h-1 w-2/3 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
      {/* 33% width bar */}
      <span className="block h-1 w-1/3 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </div>
  )
}

export default ToggleBtn
