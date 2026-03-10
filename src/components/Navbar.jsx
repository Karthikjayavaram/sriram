import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <div className="flex items-center z-50">
            <a href="#" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight flex items-center">
                SRIRAM'S <span className="text-secondary ml-2">IAS</span>
              </span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase font-semibold text-slate-500">
                Since 1985
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-primary hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-secondary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-heading text-primary hover:text-secondary transition-colors border-b border-gray-200 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 bg-secondary hover:bg-orange-600 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all shadow-lg w-full"
              >
                Enroll Now
              </button>
            </div>
            
            <div className="mt-auto pb-12">
              <div className="flex flex-col space-y-4 text-slate-600">
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-secondary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-secondary" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
