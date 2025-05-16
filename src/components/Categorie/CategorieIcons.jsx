import React from 'react';
import dataCategories from '../../assets/Categorie'; // Ensure this path is correct

const CategorieIcons = () => {
  return (
    // Optional: Add a container for padding and centering the whole section
    <section className=" py-10 md:py-16 px-4">
      <div className=" flex justify-around">
        {/* Optional: Vertical "CATEGORIES" Text - from your earlier design */}
        <div className="mr-6 md:mr-10 hidden lg:flex self-stretch  items-center">
          <h2 className="transform -rotate-90 text-gray-400 uppercase tracking-wider text-xl font-bold whitespace-nowrap">
            Categories
          </h2>
        </div>

        {/* The UL element will be our grid container */}
        <div className='flex flex-grow'>

        
        <ul
          className="

          flex-1
            grid
            grid-cols-1         
            md:grid-cols-2  
            lg:grid-cols-3        
            gap-4                 
            md:gap-6              
            list-none             
            p-0 
            lg:mx-6     

            
          "
        >
          {dataCategories.map(({ icon, name }) => {
            const IconComponent = icon;

            return (
              <li
                key={name}
                className="
                  bg-white
                  shadow-lg
                  rounded-lg
                  p-4 sm:p-5        
                  flex
                  items-center
                  justify-between
                  min-h-[80px]       
                  hover:shadow-xl
                  transition-shadow
                  duration-300
                  cursor-pointer
                "
              >
                <span className="font-bold text-gray-800 text-[20px] md:text-base mr-2 sm:mr-3">
                  {name}
                </span>
                <IconComponent size={50} style={{}} className="text-gray-700 flex-shrink-0 " / > {/* Added flex-shrink-0 */}
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default CategorieIcons;