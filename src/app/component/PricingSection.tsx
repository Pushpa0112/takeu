"use client";
import React from 'react';
import { Check, X } from 'lucide-react';

const PLANS = [
  {
    name: "Sprint Plan",
    description: "Perfect for beginners starting their coding journey",
    originalPrice: "8999",
    regularPrice: "6599",
    finalPrice: "4,289",
    discount: "27% OFF",
    validity: "12 Months",
    features: [
      { text: "All features", included: true },
      { text: "Only DSA, Core & Aptitude", included: true },
      { text: "AI Doubt Support", included: false },
      { text: "Biweekly Sessions", included: false },
      { text: "Code Review", included: false },
    ],
    buttonText: "Buy Now @ ₹4289.35",
    highlight: false,
  },
  {
    name: "Pinnacle Plan",
    description: "Go all in — with expert support & lifetime access",
    originalPrice: "11999",
    regularPrice: "9120",
    finalPrice: "5,928",
    discount: "24% OFF",
    validity: "Lifetime",
    features: [
      { text: "All features", included: true },
      { text: "DSA, Core, Design & Aptitude", included: true },
      { text: "AI Doubt Support", included: true },
      { text: "Biweekly Sessions", included: true },
      { text: "Code Review", included: true },
    ],
    buttonText: "Buy Now @ ₹5928",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise Plan",
    description: "Perfect for a group of people (minimum 30) who are looking for an extra discount",
    features: [
      { text: "All features of Pinnacle", included: true },
      { text: "Performance Dashboard", included: true },
      { text: "Centralized Billing & Licensing", included: true },
      { text: "Custom Curriculum", included: true },
      { text: "Exclusive Webinars & Industry Events", included: true },
      { text: "Batch Enrollment & Role Access", included: true },
    ],
    buttonText: "Contact Us",
    highlight: false,
    isContact: true
  }
];

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your <span className="text-[#D36D3B]">Plan</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base">Select the perfect plan for your coding journey</p>
      </div>

      {/* Main Grid: items-stretch ensures all cards are the same height before the scale transform */}
      <div className="flex flex-col md:flex-row md:items-stretch justify-center max-w-6xl mx-auto md:gap-0 gap-10">
        {PLANS.map((plan, index) => (
          <div 
            key={index}
            className={`relative flex flex-col p-8 transition-all duration-300 w-full md:w-1/3 ${
              plan.highlight 
                ? 'bg-[#E67E22] text-white rounded-2xl md:scale-110 z-20 shadow-[0_20px_50px_rgba(230,126,34,0.3)]' 
                : index === 0 
                  ? 'bg-white text-black rounded-2xl md:rounded-r-none z-10' 
                  : 'bg-white text-black rounded-2xl md:rounded-l-none z-10'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#E67E22] px-4 py-1.5 rounded-full text-[10px] font-bold shadow-lg">
                {plan.badge}
              </div>
            )}

            <div className="mb-6 mt-2">
              <h3 className={`text-2xl font-extrabold mb-2 ${plan.highlight ? 'text-white' : 'text-black'}`}>
                {plan.name}
              </h3>
              <p className={`text-[13px] leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                {plan.description}
              </p>
            </div>

            {/* Price Box */}
            {!plan.isContact && (
              <div className={`rounded-xl p-5 mb-8 border ${
                plan.highlight ? 'bg-orange-50 border-orange-100 shadow-inner' : 'bg-[#F4F6F8] border-gray-200 shadow-sm'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Original <span className="line-through ml-1">₹{plan.originalPrice}</span></p>
                    <p className="text-[10px] text-gray-400 font-black uppercase">Regular <span className="line-through ml-1">₹{plan.regularPrice}</span></p>
                  </div>
                  <div className="bg-[#FF6B00] text-white text-[9px] font-black px-2 py-1 rounded">
                    {plan.discount} OFF
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] text-gray-400 font-black uppercase">Now</span>
                  <span className="text-4xl font-black text-[#E67E22]">₹{plan.finalPrice}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-dashed border-gray-400/50">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-gray-400 font-black uppercase">Coupon:</span>
                    <span className="bg-[#E67E22] text-white text-[10px] px-2 py-0.5 rounded font-black">PAYDAY</span>
                  </div>
                  <div className="text-[9px] text-gray-400 font-black uppercase">
                    Validity: <span className="text-black ml-0.5">{plan.validity}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Features List */}
            <div className={`flex-grow ${plan.isContact ? 'mt-8' : ''}`}>
              <p className={`text-[11px] font-black mb-4 uppercase tracking-wider ${plan.highlight ? 'text-white' : 'text-black'}`}>
                What's included:
              </p>
              <ul className="space-y-3.5 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-[13px] font-bold">
                    {feature.included ? (
                      <div className="bg-[#2ECC71] rounded-full p-0.5 mt-0.5">
                        <Check size={12} strokeWidth={4} className="text-white" />
                      </div>
                    ) : (
                      <div className="bg-[#E74C3C] rounded-full p-0.5 mt-0.5">
                        <X size={12} strokeWidth={4} className="text-white" />
                      </div>
                    )}
                    <span className={!feature.included ? (plan.highlight ? 'text-white/60' : 'text-gray-400') : (plan.highlight ? 'text-white' : 'text-gray-800')}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rectangular Buttons - Rounded-md as in image */}
            <button className={`w-full py-4 rounded-md font-black text-sm transition-all shadow-md active:scale-95 ${
              plan.highlight 
                ? 'bg-white text-[#E67E22] hover:bg-orange-50' 
                : 'bg-[#151C26] text-white hover:bg-[#0a0f18]'
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}