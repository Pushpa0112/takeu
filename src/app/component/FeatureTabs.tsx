"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const TABS_DATA = [
  {
    id: 'dsa',
    label: 'DSA (Basics to Advanced)',
    title: 'DSA (Basics to Advanced)',
    description: 'Comprehensive DSA course covering from basic to advanced concepts',
    features: ['150+ structured video lectures', 'Hand-picked coding questions', 'Downloadable notes & cheat-sheets'],
    image: 'https://takeyuforward.vercel.app/Dash.png',
  },
  {
    id: 'problems',
    label: 'Pool of 1000+ Problems',
    title: 'Pool of 1000+ Problems',
    description: 'Practice with our extensive collection of DSA problems',
    features: ['Categorised topic-wise challenges', 'Difficulty-level segregation', 'Editorials & optimal solutions'],
    image: 'https://takeyuforward.vercel.app/questions.png',
  },
  {
    id: 'validity',
    label: 'Lifetime Validity',
    title: 'Lifetime Validity',
    description: 'Access the portal and all its content forever',
    features: ['One-time payment, lifetime access', 'All future updates included', 'Track progress anytime'],
    image: 'https://takeyuforward.vercel.app/home.png',
  },
  {
    id: 'roadmap',
    label: 'Personalised Roadmap',
    title: 'Personalised Roadmap',
    description: 'Custom learning path based on your schedule',
    features: ['AI-driven study planner', 'Adaptive difficulty progression', 'Weekly milestones & reminders'],
    image: 'https://takeyuforward.vercel.app/road.png',
  },
  {
    id: 'subjects',
    label: 'Core Subjects',
    title: 'Core Subjects',
    description: 'In-depth coverage of DBMS, OS, and Computer Networks',
    features: ['Concept videos & notes', 'Topic-wise quizzes', 'Exam-oriented cheat-sheets'],
    image: 'https://takeyuforward.vercel.app/core.png',
  },
  {
    id: 'oops',
    label: 'OOPs Module',
    title: 'OOPs Module',
    description: 'Complete OOPs concepts with video lectures, quizzes, and practice problems',
    features: ['Java & C++ implementations', 'Real-world design patterns', 'Hands-on mini projects'],
    image: 'https://takeyuforward.vercel.app/oops.png',
  }
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0]);

  return (
    <section className="bg-[#1d1c20] py-16 md:py-20 px-4 md:px-6 text-white flex flex-col items-center">
      {/* Updated Heading Section */}
      <div className="max-w-6xl mb-10 text-center mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Everything You Need to{" "}
          <span className="text-[#D36D3B]">
            Crack Interviews
          </span>
        </h2>
      </div>

      {/* Tab Bar - Scrollable on mobile */}
      <div className="w-full overflow-x-auto no-scrollbar mb-8">
        <div className="flex justify-start md:justify-center gap-2 bg-[#ea763f]/10 p-2 rounded-xl border border-white/5 max-w-5xl mx-auto md:w-auto">
          {TABS_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeTab.id === tab.id 
                  ? 'bg-[#D36D3B] text-white shadow-lg' 
                  : 'text-[#ea763f] hover:bg-[#ea763f]/[0.12] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Card - Stacked on Mobile, Row on Desktop */}
      <div className="w-full max-w-5xl bg-[#0F0F0F] rounded-xl overflow-hidden border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[500px]">
        
        {/* IMAGE SIDE: First on mobile, Second on desktop */}
        <div className="w-full md:flex-1 p-6 md:p-12 pb-0 md:pb-12 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#D36D3B]/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={activeTab.image} 
              alt={activeTab.title}
              className="relative rounded-2xl border border-white/10 w-full shadow-2xl"
            />
          </div>
        </div>

        {/* TEXT SIDE: Second on mobile, First on desktop */}
        <div className="w-full md:flex-1 p-8 md:p-12 pt-0 md:pt-12 space-y-6 order-2 md:order-1">
          <h3 className="text-2xl md:text-4xl font-bold text-[#D36D3B]">
            {activeTab.title}
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {activeTab.description}
          </p>
          <ul className="space-y-4">
            {activeTab.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D36D3B] mt-1 text-xl">•</span>
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="flex items-center gap-2 bg-[#D36D3B] hover:bg-[#bf5f30] text-white px-8 py-3.5 rounded-xl font-bold transition-all mt-6 w-full md:w-fit justify-center">
            Explore Syllabus <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}