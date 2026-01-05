
import React from 'react';
import { ClipboardCheck, Cpu, FileBadge } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: "Paste Address",
      desc: "Paste any EVM or Solana contract address. No wallet connection required for scanning.",
      color: "text-[#c41e3a]",
      glow: "shadow-[0_0_30px_-10px_rgba(196,30,58,0.3)]"
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Pulse Scan",
      desc: "Gemini 3 Pro analyzes the source code, bytecode, and on-chain liquidity depth in real-time.",
      color: "text-[#1e3a8a]",
      glow: "shadow-[0_0_30px_-10px_rgba(30,58,138,0.3)]"
    },
    {
      icon: <FileBadge size={32} />,
      title: "Instant Audit",
      desc: "Receive a branded PDF report identifying honeypots, tax issues, and holder red flags.",
      color: "text-[#f4d03f]",
      glow: "shadow-[0_0_30px_-10px_rgba(244,208,63,0.3)]"
    }
  ];

  return (
    <section className="relative bg-[#f5f0e8] py-20 px-6 z-40 -mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white ${step.glow} group hover:scale-[1.02] transition-all duration-500`}
            >
              <div className={`${step.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>
              <h3 className="font-caveat text-3xl text-[#0a0a12] mb-4">
                {idx + 1}. {step.title}
              </h3>
              <p className="text-[#1e3a8a]/70 font-playfair italic leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Subtle separator */}
        <div className="mt-20 flex justify-center opacity-10">
          <div className="w-px h-24 bg-gradient-to-b from-[#1e3a8a] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
