"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface AnnouncementBarProps {
  isVisible: boolean;
  isMobileMenu?: boolean;
}

const AnnouncementBar = ({ isVisible, isMobileMenu }: AnnouncementBarProps) => {
  const [timeLeft] = useState({ days: "07", hours: "24", minutes: "00", seconds: "00" });

  return (
    <div className={`
      w-full bg-[#D36D3B] text-white transition-all duration-300 ease-in-out overflow-hidden
      ${isVisible || isMobileMenu ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} 
    `}>
      {/* Desktop View Layout (Matches Image) */}
      <div className="hidden md:flex items-center justify-between px-10 py-3 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold italic tracking-tight">Use Code "PAYDAY"</h2>
          <span className="text-sm opacity-80 font-medium ml-2">Lifetime Access Won't Last Forever</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, index, arr) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tabular-nums">{item.value}</span>
                <span className="text-[10px] font-bold opacity-80 pt-1">{item.label}</span>
              </div>
              {index !== arr.length - 1 && <span className="text-2xl font-light opacity-50">:</span>}
            </React.Fragment>
          ))}
        </div>

        <button className="bg-[#18181B] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
          Click Here
        </button>
      </div>

      {/* Mobile View Layout (As discussed) */}
      <div className="md:hidden flex flex-col items-center p-4 gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold">Use Code "PAYDAY"</h2>
          <button className="bg-black text-white px-3 py-1 rounded-md text-[10px] font-bold">Click Here</button>
        </div>
        <div className="flex items-center gap-4">
          {[{l:"DAYS",v:timeLeft.days},{l:"HOURS",v:timeLeft.hours},{l:"MINUTES",v:timeLeft.minutes},{l:"SECONDS",v:timeLeft.seconds}].map((item, i, arr) => (
            <React.Fragment key={item.l}>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{item.v}</span>
                <span className="text-[8px] font-medium opacity-70">{item.l}</span>
              </div>
              {i !== arr.length - 1 && <span className="text-xl opacity-30">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowAnnounce(false);
      else setShowAnnounce(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className={`${isOpen ? 'hidden' : 'block'}`}>
        <AnnouncementBar isVisible={showAnnounce} />
        <nav className="w-full bg-[#1d1c20] text-white py-4 px-6 md:px-10 flex items-center justify-between border-b border-white/5">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-zinc-800 p-2 rounded-lg">
              <div className="w-5 h-5 bg-white/20 rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">takeUforward</span>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#D36D3B] text-white px-8 py-2.5 rounded-lg font-bold shadow-md hover:bg-[#bf5f30]">
              Login
            </button>
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <Menu size={30} />
            </button>
          </div>
        </nav>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#18181B] z-[100] transition-transform duration-300 md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <AnnouncementBar isVisible={true} isMobileMenu={true} />
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
             <div className="bg-zinc-800 p-1.5 rounded-md"><div className="w-5 h-5 bg-white/20 rounded-full" /></div>
             <span className="text-lg font-bold">takeUforward</span>
          </div>
          <button onClick={() => setIsOpen(false)}><X size={30} /></button>
        </div>
        <div className="flex flex-col p-8 gap-10 text-xl font-medium">
          <a href="#">Home</a><a href="#">Pricing</a><a href="#">Resources</a>
          <button className="bg-[#D36D3B] text-white w-full py-4 rounded-lg font-bold mt-4">Login</button>
        </div>
      </div>
    </header>
  );
}