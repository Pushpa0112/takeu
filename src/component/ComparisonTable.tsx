import React from 'react';
import { CheckCircle2, XCircle, Check, X } from 'lucide-react';

// --- Interfaces ---
interface StatusProps {
  status: 'yes' | 'no';
}

interface ComparisonRow {
  feature: string;
  tuf: {
    status: 'yes' | 'no';
    advantage: boolean;
    description: string;
  };
  alpha: {
    status: 'yes' | 'no';
    description: string;
  };
}

// --- Data ---
const comparisonData: ComparisonRow[] = [
  {
    feature: "DSA (Basics to Advanced)",
    tuf: { status: 'yes', advantage: true, description: "Curated list for beginners with practice set" },
    alpha: { status: 'yes', description: "Basic coverage" }
  },
  {
    feature: "Live Content",
    tuf: { status: 'no', advantage: false, description: "Too crowded and chaotic" },
    alpha: { status: 'yes', description: "Available" }
  },
  {
    feature: "Recorded Content",
    tuf: { status: 'yes', advantage: true, description: "Broken down to smaller parts to save time" },
    alpha: { status: 'yes', description: "Available" }
  },
  {
    feature: "DSA (Pattern Wise)",
    tuf: { status: 'yes', advantage: true, description: "Comprehensive patterns" },
    alpha: { status: 'no', description: "Limited" }
  },
  {
    feature: "1000+ Practice Problems",
    tuf: { status: 'yes', advantage: true, description: "Extensive problem bank" },
    alpha: { status: 'no', description: "Apart from very few" }
  },
  {
    feature: "Customised Roadmap",
    tuf: { status: 'yes', advantage: true, description: "Personalized learning path" },
    alpha: { status: 'no', description: "Generic approach" }
  },
  {
    feature: "Course + Platform",
    tuf: { status: 'yes', advantage: true, description: "Integrated experience" },
    alpha: { status: 'no', description: "Apart from few dead ones" }
  },
  {
    feature: "Notes Downloader to Google Docs",
    tuf: { status: 'yes', advantage: true, description: "Seamless integration" },
    alpha: { status: 'no', description: "Not available" }
  }
];

// --- Sub-Component: Fixed Icons to match Image ---
const StatusIcon = ({ status }: StatusProps) => {
  if (status === 'yes') {
    return (
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#E67E22]">
        <Check className="w-4 h-4 text-white stroke-[2px]" />
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-[#E67E22]/50">
      <X className="w-3.5 h-3.5 text-white stroke-[2px]" />
    </div>
  );
};

// --- Main Component ---
const ComparisonTable: React.FC = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare <span className="text-[#E67E22]">What You Learn</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            See how TUF stands out from other platforms
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#1A1A1A]">
                <th className="p-5 md:p-7 text-white font-bold text-lg md:text-xl tracking-wide w-1/3">
                  Features
                </th>
                <th className="p-5 md:p-7 text-[#E67E22] font-bold text-lg md:text-xl text-center w-1/3 border-x border-zinc-800">
                  TUF +
                </th>
                <th className="p-5 md:p-7 text-zinc-400 font-bold text-lg md:text-xl text-center w-1/3">
                  Alpha Platforms
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0F0F0F]' : 'bg-[#141414]'}>
                  {/* Feature Name */}
                  <td className="p-6 text-white font-medium text-sm md:text-base">
                    {row.feature}
                  </td>

                  {/* TUF Column */}
                  <td className="p-6 border-x border-zinc-800">
                    <div className="flex flex-col items-center sm:items-start sm:pl-8">
                      <div className="flex items-center gap-3 mb-1.5">
                        <StatusIcon status={row.tuf.status} />
                        <span className="text-white font-bold text-sm md:text-base">
                          {row.tuf.status === 'yes' ? 'Yes' : 'No'}
                        </span>
                        {row.tuf.advantage && (
                          <span className="text-[12px] bg-[#E67E22]/20 text-[#E67E22] border border-[#E67E22]/40 px-2 py-0.5 rounded font-bold  tracking-wider">
                            Advantage
                          </span>
                        )}
                      </div>
                      <p className="text-zinc-500 text-xs md:text-sm">{row.tuf.description}</p>
                    </div>
                  </td>

                  {/* Alpha Column */}
                  <td className="p-6">
                    <div className="flex flex-col items-center sm:items-start sm:pl-8">
                      <div className="flex items-center gap-3 mb-1.5">
                        <StatusIcon status={row.alpha.status} />
                        <span className="text-zinc-300 font-bold text-sm md:text-base">
                          {row.alpha.status === 'yes' ? 'Yes' : 'No'}
                        </span>
                      </div>
                      <p className="text-zinc-600 text-xs md:text-sm">{row.alpha.description}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;