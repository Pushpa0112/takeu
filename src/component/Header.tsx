"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hides the announcement bar after scrolling 50px
      if (window.scrollY > 50) {
        setShowAnnounce(false);
      } else {
        setShowAnnounce(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Primary Navigation Container */}
      <div className={`${isOpen ? 'hidden' : 'block'}`}>
        <AnnouncementBar isVisible={showAnnounce} />
        
        <nav className="w-full bg-[#1d1c20] text-white py-4 px-6 md:px-10 flex items-center justify-between border-b border-white/5">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-zinc-800 p-2 rounded-lg">
              <div className="w-5 h-5 bg-white/20 rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">takeUforward</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#D36D3B] text-white px-8 py-2.5 rounded-lg font-bold shadow-md hover:bg-[#bf5f30] transition-colors">
              Login
            </button>
            <button 
              onClick={() => setIsOpen(true)} 
              className="md:hidden text-white"
              aria-label="Open Menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </nav>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-[#18181B] z-[100] transition-transform duration-300 md:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* Persistent Announcement in Mobile Menu */}
        <AnnouncementBar isVisible={true} isMobileMenu={true} />
        
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3 text-white">
             <div className="bg-zinc-800 p-1.5 rounded-md">
               <div className="w-5 h-5 bg-white/20 rounded-full" />
             </div>
             <span className="text-lg font-bold">takeUforward</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close Menu"
          >
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col p-8 gap-10 text-xl font-medium text-white">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setIsOpen(false)}>Resources</a>
          <button className="bg-[#D36D3B] text-white w-full py-4 rounded-lg font-bold mt-4 shadow-lg">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;