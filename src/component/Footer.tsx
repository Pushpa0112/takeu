import React from 'react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Contact Us", "Pricing", "Privacy Policy", "Terms and Conditions", "Cancellation / Refund Policy"]
    },
    {
      title: "Quick Access",
      links: ["Striver's DSA Sheet", "Technical Blogs", "CS Subjects", "Striver's CP Sheet"]
    },
    {
      title: "DSA Sheets",
      links: ["Striver's SDE Sheet", "Striver's AZ2 DSA Playlist", "SDE Core Sheet", "Striver's CP Sheet"]
    },
    {
      title: "DSA Playlist",
      links: ["Array Series", "Graph Series", "DP Series", "LinkedList Series"]
    }
  ];

  // Inline SVGs for social icons to bypass library errors
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: "#", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
    },
    { 
      name: 'Twitter', 
      href: "#", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> 
    },
    { 
      name: 'Instagram', 
      href: "#", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> 
    },
    { 
      name: 'Youtube', 
      href: "#", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg> 
    },
  ];

  return (
    <footer className="bg-[#1d1c20] text-gray-400 py-16 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-zinc-800">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Logo</span>
          </div>
          <p className="text-sm leading-relaxed mb-8 max-w-xs">
            The best place to learn Data Structures, algorithms, and most asked coding interview questions. Real interview experiences free of cost.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#E67E22] hover:text-white hover:border-[#E67E22] transition-all duration-300"
                aria-label={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerSections.map((section, idx) => (
          <div key={idx} className="lg:col-span-1">
            <h4 className="text-[#E67E22] font-bold text-lg mb-6">
              {section.title}
            </h4>
            <ul className="space-y-4">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a 
                    href="#" 
                    className="text-sm hover:text-white transition-colors duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;