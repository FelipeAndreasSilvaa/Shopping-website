"use client"

import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
  
  return (
    <nav className="bg-white border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      </a>
      <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="navbar-default" aria-expanded={isMenuOpen ? "true" : "false"}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
              <Link className='navbar__link relative' href="#">HOME</Link>
          </li>
          <li>
              <Link className='navbar__link relative' href="#">CATEGORIES</Link>
          </li>
          <li>
              <Link className='navbar__link relative' href="#">MEN`S</Link>
          </li>
          <li>
             <Link className='navbar__link relative' href="#">WOMEN`S</Link>
          </li>
          <li>
             <Link className='navbar__link relative' href="#">JEWELRY</Link>
          </li>
          <li>
             <Link className='navbar__link relative' href="#">PERFUME</Link>
          </li>
          <li>
             <Link className='navbar__link relative' href="#">BLOG</Link>
          </li>
          <li>
             <Link className='navbar__link relative' href="#">HOT OFFERS</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    //  <div className='hidden lg:block'>
    //    <div className="container">
    //        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
    //          <Link className='navbar__link relative' href="#">HOME</Link>
    //          <Link className='navbar__link relative' href="#">CATEGORIES</Link>
    //          <Link className='navbar__link relative' href="#">MEN`S</Link>
    //          <Link className='navbar__link relative' href="#">WOMEN`S</Link>
    //          <Link className='navbar__link relative' href="#">JEWELRY</Link>
    //          <Link className='navbar__link relative' href="#">PERFUME</Link>
    //          <Link className='navbar__link relative' href="#">BLOG</Link>
    //          <Link className='navbar__link relative' href="#">HOT OFFERS</Link>
    //        </div>{/**flex w-fit gap-10 mx-auto font-medium py-4 text-blackish */}
    //    </div>{/**container */}
    //  </div>

  )
}
