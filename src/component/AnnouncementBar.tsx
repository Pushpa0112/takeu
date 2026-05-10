"use client";
import React, { useState } from 'react';

interface AnnouncementBarProps {
  // Adding '?' makes this optional to solve the ts(2741) error
  isVisible?: boolean; 
  isMobileMenu?: boolean;
}

// We set default values (= true / = false) in the destructuring
const AnnouncementBar = ({ 
  isVisible = true, 
  isMobileMenu = false 
}: AnnouncementBarProps) => {
  
  const [timeLeft] = useState({ 
    days: "07", 
    hours: "24", 
    minutes: "00", 
    seconds: "00" 
  });

  return (
    <div className={`
      w-full bg-[#D36D3B] text-white transition-all duration-300 ease-in-out overflow-hidden
      ${isVisible || isMobileMenu ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} 
    `}>
      {/* Desktop View Layout */}
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

      {/* Mobile View Layout */}
      <div className="md:hidden flex flex-col items-center p-4 gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold">Use Code "PAYDAY"</h2>
          <button className="bg-black text-white px-3 py-1 rounded-md text-[10px] font-bold">
            Click Here
          </button>
        </div>
        <div className="flex items-center gap-4">
          {[
            { l: "DAYS", v: timeLeft.days },
            { l: "HOURS", v: timeLeft.hours },
            { l: "MINUTES", v: timeLeft.minutes },
            { l: "SECONDS", v: timeLeft.seconds }
          ].map((item, i, arr) => (
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

export default AnnouncementBar;