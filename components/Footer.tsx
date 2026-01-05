
import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ViewType } from '../types';

interface FooterProps {
  setView: (v: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNav = (v: ViewType) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a12] py-16 px-6 md:px-16 border-t border-[#f5f0e8]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <button 
            onClick={() => handleNav('home')}
            className="font-caveat text-4xl font-bold text-[#c41e3a] flex items-center gap-2"
          >
            <ShieldCheck className="text-[#1e3a8a]" size={36} />
            TokenScan
          </button>
          <p className="text-[#f5f0e8]/40 text-sm max-w-xs font-playfair italic">
            Institutional-grade analysis for the community. Expertly crafted by Schroeder Technologies and Gregorious Creative Studios. 2025.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/20 font-bold">Platform</p>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('lab')} className="text-sm text-[#f5f0e8]/50 hover:text-[#ff1493] transition-standard">Analyzer</button></li>
              <li><button onClick={() => handleNav('about')} className="text-sm text-[#f5f0e8]/50 hover:text-[#ff1493] transition-standard">About Us</button></li>
              <li><button onClick={() => handleNav('faq')} className="text-sm text-[#f5f0e8]/50 hover:text-[#ff1493] transition-standard">FAQ</button></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/20 font-bold">Inquiry</p>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('contact')} className="text-sm text-[#f5f0e8]/50 hover:text-[#ff1493] transition-standard">Support</button></li>
              <li><a href="mailto:scan@tokenscan.tech" className="text-sm text-[#f5f0e8]/50 hover:text-[#ff1493] transition-standard">API Partnership</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/20 font-bold">Legalese</p>
          <p className="text-[#f5f0e8]/30 text-xs leading-relaxed italic font-playfair">
            TokenScan provides AI-generated analysis based on on-chain data patterns. This is not financial advice. Always do additional research before interacting with smart contracts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <button onClick={() => handleNav('terms')} className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/30 hover:text-[#ff1493] transition-standard">Terms</button>
          <button onClick={() => handleNav('privacy')} className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/30 hover:text-[#ff1493] transition-standard">Privacy</button>
        </div>
        <span className="font-caveat text-lg text-[#f5f0e8]/30 italic">
          © 2025 Schroeder Technologies & Gregorious Creative Studios
        </span>
      </div>
    </footer>
  );
};

export default Footer;
