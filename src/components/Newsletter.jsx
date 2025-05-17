import React from 'react';

const Newsletter = () => {
  return (
    <section className='bg-[#F5F5F5] md:m-5 flex flex-col justify-center items-center py-[100px] px-4 sm:px-6 lg:px-8 space-y-[30px]'>
        <h1 className='font-bold text-center text-[32px] sm:text-[40px]'>Get Discount 30% Off</h1>
       
        <form className='w-full max-w-xl flex flex-col md:flex-row items-stretch md:items-center gap-4'>

            <input
                className='w-full  h-[50px] pl-5 bg-white shadow-lg rounded-md border border-gray-300 focus:ring-2 focus:ring-[#f36523] focus:border-transparent outline-none'
                placeholder='YOUR EMAIL'
                type="email"
                name='email'
                required
            />
           
            <button
                type="submit" // Good practice for form buttons
                className="w-full md:w-auto h-[50px]  relative px-9 py-3 bg-[#f36523] font-semibold uppercase text-sm border-2 group overflow-hidden rounded-md flex justify-center items-center"
            >
                <span className="absolute top-0 bottom-0 left-1/2 w-0 bg-black transition-all duration-500 ease-in-out group-hover:left-0 group-hover:w-1/2" />
                <span className="absolute inset-y-0 right-1/2 w-0 bg-black transition-all duration-500 ease-in-out group-hover:right-0 group-hover:w-1/2" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
                   SUBSCRIBE
                </span>
            </button>
        </form>
    </section>
  );
};

export default Newsletter;