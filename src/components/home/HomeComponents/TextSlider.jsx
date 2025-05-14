import React from 'react'

const TextSlider = ({label , title , description}) => {
  return (
    <>
         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start px-6 md:px-6 lg:pr-8 space-y-4 mb-8 md:mb-0"> 
                                <span className="text-xs text-topButton font-bold uppercase tracking-widest">
                                    {label}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
                                    {title}
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 max-w-md">
                                    {description}
                                </p>
                                <button
                                    className="mt-5 relative px-6 py-2.5 bg-white text-black font-semibold uppercase text-sm border-2 border-black group overflow-hidden"
                                >
                                    <span className="absolute top-0 bottom-0 left-1/2 w-0 bg-topButton transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-1/2" />
                                    <span className="absolute inset-y-0 right-1/2 w-0 bg-topButton transition-all duration-500 ease-in-out group-hover:right-0 group-hover:w-1/2" />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
                                        Shop Now
                                    </span>
                                </button>
                            </div>
    </>
  )
}

export default TextSlider