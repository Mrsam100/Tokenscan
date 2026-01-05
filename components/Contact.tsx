
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-[#1a1a2e] py-32 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[500px] bg-[#c41e3a] opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[450px] bg-[#1e3a8a] opacity-20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-caveat text-7xl md:text-[10rem] text-[#f5f0e8] leading-none mb-4">
          Ready to<br />
          <span className="text-[#00f5ff] neon-glow-cyan animate-flicker">Scan?</span>
        </h2>
        <p className="font-playfair italic text-2xl text-[#f5f0e8]/60 mb-12">
          Don't let the darkness take your liquidity.
        </p>
        
        <a 
          href="mailto:scan@tokenscan.tech" 
          className="font-caveat text-4xl md:text-6xl text-[#ff8c00] neon-glow-orange hover:text-[#00f5ff] hover:neon-glow-cyan transition-all duration-500 animate-flicker"
        >
          scan@tokenscan.tech
        </a>
        
        <div className="mt-20 flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/30 font-bold mb-2">Partner Studio</p>
            <p className="text-[#f5f0e8]/80 text-lg">Schroeder Technologies</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/30 font-bold mb-2">Design Lead</p>
            <p className="text-[#f5f0e8]/80 text-lg">Gregorious Creative Studios</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
