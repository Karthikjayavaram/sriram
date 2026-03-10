import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'About Us', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Centres', href: '#centres' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 glassmorphism ${isScrolled ? 'py-3' : 'py-5'} top-0`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight flex items-center">
                SRIRAM'S <span className="text-secondary ml-2">IAS</span>
              </span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase font-semibold text-slate-500">
                Since 1985
              </span>
            </a>
          </div>

          {/* Navigation Links - Now always visible */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm md:text-base font-medium text-primary hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="hidden sm:block bg-secondary hover:bg-orange-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Enroll Now
            </button>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
