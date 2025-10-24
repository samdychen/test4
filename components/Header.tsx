
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-forest-green tracking-wider">
          Terra
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className={`text-lg transition-colors duration-300 ${isScrolled ? 'text-stone-gray hover:text-forest-green' : 'text-white hover:text-pale-green'}`}>Home</a>
          <a href="#features" className={`text-lg transition-colors duration-300 ${isScrolled ? 'text-stone-gray hover:text-forest-green' : 'text-white hover:text-pale-green'}`}>Features</a>
          <a href="#gallery" className={`text-lg transition-colors duration-300 ${isScrolled ? 'text-stone-gray hover:text-forest-green' : 'text-white hover:text-pale-green'}`}>Gallery</a>
          <a href="#testimonials" className={`text-lg transition-colors duration-300 ${isScrolled ? 'text-stone-gray hover:text-forest-green' : 'text-white hover:text-pale-green'}`}>Testimonials</a>
        </nav>
        <button className="hidden md:block bg-mint-green text-white font-semibold py-2 px-6 rounded-full hover:bg-pine-green transition-transform duration-300 transform hover:scale-105">
          Contact Us
        </button>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
          <svg className={`w-6 h-6 ${isScrolled ? 'text-forest-green' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
