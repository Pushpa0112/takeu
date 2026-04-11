"use client";
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// --- Animated Counter Hook ---
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return count;
};

// --- Single Stat Item Component (Updated for precise styling) ---
const StatItem = ({ endValue, label }: { endValue: number, label: string }) => {
    const count = useCountUp(endValue);
    return (
        <div className="flex flex-col items-center text-center">
            {/* Number: Responsive sizes to ensure 3-columns fit on small screens */}
            <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white tracking-tight">
                {count}+
            </h3>
            {/* Label: Small, dimmed, and prevented from wrapping to match image */}
            <p className="text-[10px] md:text-xl text-zinc-500 md:text-zinc-400 mt-1 md:mt-2 whitespace-nowrap font-medium">
                {label}
            </p>
        </div>
    );
};

export default function HeroSection() {
    return (
        <section className="bg-black text-white flex flex-col items-center pt-30     px-6">
            {/* Badge */}
            <button className="px-5 py-2 mt-18 rounded-full bg-[#1E1E1E] text-zinc-400 text-[16px] font-medium transition-all hover:text-white mb-8">
                Crafted by Top Engineers
            </button>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-6xl font-extrabold text-center max-w-5xl leading-tight mb-6">
                Upskill yourself With <br />
                <span className="relative inline-block bg-[#D36D3B] text-white px-4 py-1 rounded-lg -rotate-2 origin-left mx-3">
                    Just One
                </span>
                Subscription
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-center max-w-2xl text-lg mb-10 leading-relaxed">
                The most trusted platform for engineers to upskill and crack tech interviews in the least time
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <button className="flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 px-8 py-3 rounded-lg font-semibold transition-all">
                    Explore Offerings <ChevronDown size={20} />
                </button>
                <button className="bg-[#D36D3B] hover:bg-[#bf5f30] text-white px-10 py-3 rounded-lg font-bold transition-all shadow-lg shadow-orange-900/20">
                    Buy Now
                </button>
            </div>

            {/* Dashboard Preview Image */}
            <div className="w-full max-w-5xl relative mb-24 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-xl blur opacity-25"></div>
                <img
                    src="/Dash (1).png"
                    alt="Platform Preview"
                    className="rounded-xl border border-zinc-800 shadow-2xl w-full"
                />
            </div>

            {/* Statistics Section (Force 3 cols on all screens) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-32 w-full max-w-6xl pb-20 px-2 md:px-4">
                <StatItem endValue={5644} label="Users Joined" />
                <StatItem endValue={200} label="Topics Covered" />
                <StatItem endValue={1000} label="Questions" />
            </div>
        </section>
    );
}