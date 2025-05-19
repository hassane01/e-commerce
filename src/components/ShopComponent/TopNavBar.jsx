import React from 'react'
import { MdTableRows } from 'react-icons/md'
import { RiLayoutGrid2Fill } from 'react-icons/ri'

const TopNavBar = React.memo( ({setViewMode , viewMode , sortOption , setSortOption , allCategories , setActiveCategory , activeCategory}) => {
  return (
    <>
    <div className='flex items-center space-x-2 sm:space-x-3 mb-4 md:mb-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar'>
    <span className='font-semibold text-gray-800 text-sm sm:text-base whitespace-nowrap mr-2'>
      Categories
    </span>
    <ul className='flex space-x-1.5 sm:space-x-2'>
      {allCategories.map(category => (
        <li key={category}>
          <button
            onClick={() => setActiveCategory(category)}
            className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded font-medium whitespace-nowrap transition-colors duration-150 ease-in-out
              ${activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  </div>
    <div className='flex items-center space-x-3 sm:space-x-4 shrink-0'>
    <div className='flex items-center border border-gray-300 rounded'>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 sm:p-2 transition-colors duration-150 ease-in-out ${viewMode === 'grid' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} rounded-l-sm`}
              aria-label="Grid view"
              title="Grid view"
            >
              <RiLayoutGrid2Fill size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 sm:p-2 border-l border-gray-300 transition-colors duration-150 ease-in-out ${viewMode === 'list' ? 'text-blue-600 bg-gray-100' : 'text-gray-500 hover:bg-gray-100'} rounded-r-sm`}
              aria-label="List view"
              title="List view"
            >
              <MdTableRows size={18} />
            </button>
          </div>
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className='appearance-none text-xs sm:text-sm bg-white border border-gray-300 text-gray-600 py-1.5 sm:py-2 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            >
              <option value="low-to-high">low to high</option>
              <option value="high-to-low">high to low</option>
              <option value="best-seller">best seller</option>
              <option value="new-products">New products</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          </div>
          </>
  )
})

export default TopNavBar