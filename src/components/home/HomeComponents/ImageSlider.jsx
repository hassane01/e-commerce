import React from 'react'

const ImageSlider = ({image ,title}) => {
  return (
    <>
     <div className="w-full md:w-1/2 hidden md:flex justify-around items-center px-4 md:pl-4 lg:pl-8"> 
                                <div
                                    style={{ backgroundImage: `url(${image})` }}
                                    className="animate-[spin_8s_linear_infinite] hidden xl:block h-16 w-16 opacity-50 self-start rounded-full bg-cover bg-center"
                                ></div>
                                <div className="relative mx-4 ">
                                    <div
                                        className="absolute rounded-full bg-[#F7E8E2] bottom-8 left-8 w-48 h-48 lg:w-96 lg:h-96 -z-10" 
                                    />
                                    <div className="relative rounded-full overflow-hidden w-48 h-48 lg:w-96 lg:h-96 z-0 border-4 shadow-rose-300 border-white shadow-lg"> 
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{ backgroundImage: `url(${image})` }}
                                    className="animate-[spin_8s_linear_infinite] hidden xl:block h-16 w-16 opacity-50 self-end rounded-full bg-cover bg-center"
                                ></div>
                            </div>
    </>
  )
}

export default ImageSlider