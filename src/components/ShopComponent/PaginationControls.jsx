import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // Using react-icons

const PaginationControls = React.memo(({
  currentPage,
  totalPages,
  onPageChange,
  maxPageNumbersToShow = 5 // How many page numbers to show directly (e.g., 1 ... 4 5 6 ... 10)
}) => {
  if (totalPages <= 1) {
    return null; // Don't show pagination if there's only one page or less
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfWay = Math.ceil(maxPageNumbersToShow / 2);
    let startPage, endPage;

    if (totalPages <= maxPageNumbersToShow) {
      // Less than or equal to maxPageNumbersToShow pages, so show all
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= halfWay) {
      // Near the start
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + halfWay -1 >= totalPages) {
      // Near the end
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      // In the middle
      startPage = currentPage - halfWay +1;
      endPage = currentPage + halfWay -1;
       // Adjust endPage if maxPageNumbersToShow is even to maintain count
      if (maxPageNumbersToShow % 2 === 0) {
        endPage = currentPage + halfWay -1 ;
      } else {
         endPage = currentPage + Math.floor(maxPageNumbersToShow / 2);
      }
      startPage = currentPage - Math.floor(maxPageNumbersToShow / 2);

      if (startPage < 1) {
        startPage = 1;
        endPage = maxPageNumbersToShow;
      }
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxPageNumbersToShow + 1;
      }


    }


    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipses and first/last page if needed
    const pagesWithEllipses = [];
    if (startPage > 1) {
      pagesWithEllipses.push(1);
      if (startPage > 2) {
        pagesWithEllipses.push('...');
      }
    }

    pagesWithEllipses.push(...pageNumbers);

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pagesWithEllipses.push('...');
      }
      pagesWithEllipses.push(totalPages);
    }
    // Remove duplicate ellipses or page numbers that might occur with small totalPages
    return [...new Set(pagesWithEllipses)];
  };


  const pagesToRender = getPageNumbers();

  return (
    <nav aria-label="Page navigation" className="flex justify-center items-center space-x-2 sm:space-x-3 my-8 py-3 px-4 bg-slate-50 rounded-md shadow-sm">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-md transition-colors duration-150 ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Previous page"
      >
        <MdChevronLeft size={24} />
      </button>

      {pagesToRender.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm rounded-md font-medium transition-colors duration-150 ${
              currentPage === page
                ? 'bg-indigo-600 text-white cursor-default'
                : 'text-gray-700 bg-white hover:bg-gray-100 border border-gray-300'
            }`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md transition-colors duration-150 ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Next page"
      >
        <MdChevronRight size={24} />
      </button>
    </nav>
  );
});

PaginationControls.displayName = 'PaginationControls';
export default PaginationControls;