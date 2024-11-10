'use client'; 

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-xl font-bold">Home</span> 
        </Link>

        
        <div className="block lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

       
        <div className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"}`}>
          <Link href="/about">
            <span className="text-white">About</span> 
          </Link>
          <Link href="/services">
            <span className="text-white">Services</span> 
          </Link>
          <Link href="/projects">
            <span className="text-white">Projects</span> 
          </Link>
          <Link href="/contact">
            <span className="text-white">Contact</span> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



