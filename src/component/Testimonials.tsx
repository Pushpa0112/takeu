import React from 'react';
import { X } from 'lucide-react';

interface Testimonial {
  name: string;
  handle: string;
  content: string;
  list?: string[];
  footer?: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kashish",
    handle: "@whatkashish",
    content: "I am genuinely impressed by how every little detail is so well thought out. It's so evident that when someone is truly passionate about what they're building, it reflects in the product and that's exactly the case with TUF. 👏",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kashish"
  },
  {
    name: "Suraj Jha",
    handle: "@sigmadev234",
    content: "Just had a demo of @takeUforward_V3 — super impressive!",
    list: ["Feature-rich & intuitive", "Learner-first approach", "Smart personalization", "Real problem-solving focus"],
    footer: "A big shoutout to the amazing team — you're building something truly impactful. Best of luck",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suraj"
  },
  {
    name: "Aarchi Gandhi",
    handle: "@FafdaJalebie",
    content: "Such a crazy 1 stop platform for Interview Preparation. The content quality and structure is amazing! The personalized roadmap and lifetime access make it even better. Highly Recommending TUF+ V3 for anyone serious about their tech career 🔥",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarchi"
  },
  {
    name: "Ankush Dharkar",
    handle: "@ankushdharkar",
    content: "What a great demo! Nicely done @striver_79 and team!! 👌\n\nSo excited to think about all the devs who would be using this product to prepare themselves for the challenges and skills ahead!\n\nIt has a single-pay lifetime access license!! So cool! ❤️\n\n(P.S — Goodbye Leetcode)",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ankush"
  },
  {
    name: "Saurabh Kumar",
    handle: "@drummatick",
    content: "TUF+ V3 is a one-of-a-kind platform that's revolutionizing interview prep. Really amazing what @striver_79 and team have pulled in such a small amount of time. The attention to detail and comprehensive coverage of topics is outstanding. Definitely the best platform I've seen for technical interview preparation!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saurabh"
  },
  {
    name: "Riti Kumari",
    handle: "@riti2409",
    content: "V3 looks very promising 💯\n\nAll the very best @striver_79 and entire @takeUforward_team.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riti"
  }
];

const TestimonialCard: React.FC<{ data: Testimonial }> = ({ data }) => (
  <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col h-full relative hover:border-gray-700 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[#E67E22] font-bold text-sm tracking-tight">TUF+ V3</span>
      <X className="text-white w-5 h-5 opacity-80 cursor-pointer" />
    </div>
    
    <div className="flex-grow">
      <p className="text-gray-300 text-[14px] leading-relaxed whitespace-pre-line">
        "{data.content}"
      </p>
      {data.list && (
        <ul className="mt-3 space-y-1">
          {data.list.map((item, i) => (
            <li key={i} className="text-gray-300 text-[14px] flex items-start">
              <span className="mr-2 text-gray-500">•</span> {item}
            </li>
          ))}
        </ul>
      )}
      {data.footer && (
        <p className="mt-4 text-gray-300 text-[14px]">{data.footer}</p>
      )}
    </div>

    <div className="mt-8 pt-5 border-t border-gray-800/50 flex items-center gap-3">
      <img 
        src={data.image} 
        alt={data.name} 
        className="w-10 h-10 rounded-full bg-zinc-800 object-cover border border-gray-700" 
      />
      <div>
        <h4 className="text-white font-semibold text-[14px] leading-tight">{data.name}</h4>
        <p className="text-gray-500 text-[12px]">{data.handle}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-[#1d1c20] py-24 px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            What People Are <span className="text-[#E67E22]">Saying</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium opacity-90">
            Real testimonials from our community of successful engineers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;