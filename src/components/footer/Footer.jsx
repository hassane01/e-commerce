import React from 'react';
import { FaAngleDoubleUp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi';

const Footer = () => {
  return (
    <section className='bg-white text-gray-700 py-12 lg:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 pb-12'>
        
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1"> 
             <div className="text-4xl font-bold mb-5">
                <span className="bg-black text-white px-2 py-0.5 tracking-tight">Go</span>
                <span className="tracking-tight">ru</span>
                <span className="text-orange-500">.</span>
            </div>
            <p className='text-sm text-gray-500 leading-relaxed mb-6'>
              Sed ut perspiciatis unde omnis iste natus er sit voluptatem accusantium dolore.ea commo do consequat. Duis aute irure dolor in re prehenderit in.
            </p>
            <div className="flex space-x-4">
              <a href="#!" aria-label="Facebook" className="text-gray-500 hover:text-orange-500 transition-colors">
                <FaFacebookF size={18}/>
              </a>
              <a href="#!" aria-label="Twitter" className="text-gray-500 hover:text-orange-500 transition-colors">
                <FaXTwitter size={18}/>
              </a>
              <a href="#!" aria-label="Instagram" className="text-gray-500 hover:text-orange-500 transition-colors">
                <FaInstagram size={18}/>
              </a>
              <a href="#!" aria-label="LinkedIn" className="text-gray-500 hover:text-orange-500 transition-colors">
                <FaLinkedinIn size={18}/>
              </a>
            </div>
          </div>

          
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-5'>Useful Links</h3>
            <ul className='space-y-2.5'>
              {['Privacy Policy', 'Return Policy', 'Blog', 'Contact', 'Terms & Conditions'].map(link => (
                <li key={link}>
                  <a href="#!" className='text-sm text-gray-500 hover:text-orange-500 transition-colors'>{link}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-5'>Account</h3>
            <ul className='space-y-2.5'>
              {['My Account', 'Log in', 'Sign Up', 'Purchases', 'Shipping Address'].map(link => (
                <li key={link}>
                  <a href="#!" className='text-sm text-gray-500 hover:text-orange-500 transition-colors'>{link}</a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-5'>Contact & Address</h3>
            <ul className='space-y-2.5 text-sm text-gray-500'>
              <li>123 Street, Gandy Street, Syracuse New York - 13221.</li>
              <li>Phone: +1 315-234-3812 Email:</li>
              <li>info@goru.com</li>
            </ul>
          </div>

         
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-5'>Subscribe</h3>
            <form action="#">
              <input 
                type="email" 
                placeholder='admin@mail.com' 
                className='w-full p-3 mb-3 text-sm border border-gray-200 rounded-md bg-rose-50 placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none' 
              />
              <button 
                type="submit" 
                className='overflow-hidden relative text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm group flex items-center'
              >
                Subscribe 
                <span className="mx-1 transition-transform duration-200 ease-in-out inline-block group-hover:translate-x-1 font-sans text-lg">→</span>
              
              <span className='w-full h-0.5 bg-orange-500 absolute bottom-1 transition-transform duration-200 ease-in-out group-hover:translate-x-[100%]'></span>
              </button>
            </form>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        
          <div className="text-xs text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            <a href="#!" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <span className="mx-1.5">|</span>
            <a href="#!" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
          
         
          <div className="flex flex-col-reverse items-center md:flex-row md:space-x-4">
            <p className="text-xs text-gray-500 mt-4 md:mt-0">
              © Copyright WpSmasher 2020 | All Rights Reserved
            </p>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                className="bg-blue-600 hover:bg-blue-700 text-white p-0 rounded-sm flex items-center justify-center w-8 h-8 shrink-0" 
            >
                <FaAngleDoubleUp size={14}  /> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;