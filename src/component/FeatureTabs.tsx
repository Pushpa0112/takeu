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
    <section className="bg-[#1d1c20] py-12 md:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="text-[#ea763f]">Crack Interviews</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="w-full max-w-5xl mb-8 md:mb-12">
          <div
            className="flex items-center justify-start lg:justify-between gap-2 p-1 rounded-xl overflow-x-auto no-scrollbar"
            style={{ backgroundColor: 'rgba(234, 118, 63, 0.1)' }}
          >
            {TABS_DATA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab.id === tab.id
                    ? 'bg-[#ea763f] text-white shadow'
                    : 'text-[#ea763f] hover:bg-[#ea763f]/10 hover:text-white' 
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-5xl bg-black rounded-[1.5rem] border border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 md:p-12 min-h-[450px] shadow-2xl transition-all duration-500">

          {/* Text Content */}
          <div className="w-full lg:flex-1 space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-4xl font-bold text-[#ea763f] animate-in fade-in slide-in-from-left-4 duration-500">
              {activeTab.title}
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {activeTab.description}
            </p>
            <ul className="space-y-3 md:space-y-4">
              {activeTab.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ea763f]" />
                  <span className="text-sm md:text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="group flex items-center gap-2 bg-[#ea763f] hover:bg-[#d9652d] text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95">
                Explore Syllabus
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-[#ea763f]/30 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="relative rounded-xl border border-white/10 w-full object-cover shadow-2xl transform transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}