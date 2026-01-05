
import React from 'react';
import { ChevronDown, MousePointer2 } from 'lucide-react';

interface HeroProps {
  onCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCta }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#0a0a12] overflow-hidden px-6 pt-20 pb-32">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[600px] bg-[#c41e3a] opacity-20 blur-[120px] rounded-full -rotate-12 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[500px] bg-[#1e3a8a] opacity-20 blur-[120px] rounded-full rotate-12"></div>
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[550px] bg-[#f4d03f] opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0 canvas-texture pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col justify-start pt-12 md:pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f5f0e8]/60 text-xs font-bold tracking-[0.2em] uppercase mb-8 self-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <MousePointer2 size={14} className="text-[#00f5ff]" /> Powered by Gemini 3 Pro
        </div>

        <p className="font-playfair italic text-2xl md:text-5xl text-[#f5f0e8] leading-tight mb-8">
          The research that <span className="font-caveat not-italic text-4xl md:text-7xl text-[#ff8c00] neon-glow-orange animate-flicker">Saves</span> you<br />
          from the next <span className="font-caveat not-italic text-4xl md:text-7xl text-[#ff3131] neon-glow-red animate-flicker">Rug</span><br />
          Paste address. Get <span className="font-caveat not-italic text-4xl md:text-7xl text-[#00f5ff] neon-glow-cyan animate-flicker">Report.</span>
        </p>
        
        <h1 className="font-caveat text-[5rem] md:text-[13rem] font-bold text-[#ff1493] neon-glow-pink leading-none mb-10 animate-flicker select-none">
          TokenScan
        </h1>
        
        <p className="text-lg md:text-xl text-[#f5f0e8]/70 leading-relaxed max-w-2xl mx-auto mb-12">
          Instant institutional-grade due diligence. We synthesize tokenomics, holder distribution, and hidden contract risks in <span className="text-[#f4d03f] font-bold">under 30 seconds.</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button 
            onClick={onCta}
            className="group relative inline-block font-caveat text-3xl bg-[#f4d03f] text-[#0a0a12] px-16 py-5 rounded-full hover:shadow-[0_20px_60px_rgba(244,208,63,0.5)] transition-standard transform hover:-translate-y-1 active:scale-95 tap-target"
          >
            Start Analysis
            <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
          
          <div className="flex flex-col items-start md:items-center text-left md:text-center border-l-2 md:border-l-0 md:border-t-2 border-white/10 pl-6 md:pl-0 md:pt-4">
            <p className="text-[#f5f0e8]/60 font-playfair italic text-sm">Schroeder Technologies</p>
            <p className="text-[#f5f0e8]/60 font-playfair italic text-sm">& Gregorious Creative Studios</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-12 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => window.scrollTo({top: window.innerHeight * 0.9, behavior: 'smooth'})}>
        <ChevronDown size={32} className="text-[#f5f0e8]" />
      </div>

      {/* Transition Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f0e8] to-transparent z-20"></div>
      <div className="absolute bottom-[-1px] left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120H1440V40C1440 40 1080 0 720 0C360 0 0 40 0 40V120Z" fill="#f5f0e8"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
