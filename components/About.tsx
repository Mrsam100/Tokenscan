
import React from 'react';

const colors = [
  '#c41e3a', '#8b0000', '#e63946', '#1e3a8a', '#0f1f4a',
  '#3b5998', '#f4d03f', '#d4a84c', '#cc7000', '#ff6b35',
  '#e85d04', '#00f5ff', '#ff1493', '#ff8c00', '#ff3131',
  '#f5f0e8', '#faf5eb', '#0a0a12', '#1a1a2e', '#2d2d44'
];

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="font-caveat text-2xl text-[#c41e3a] mb-6">the project</p>
          <h2 className="font-caveat text-6xl md:text-8xl text-[#0a0a12] mb-8 leading-tight">
            Trust through <span className="text-[#c41e3a]">analysis</span>
          </h2>
          <p className="text-xl text-[#1e3a8a]/80 leading-relaxed mb-8 font-playfair italic">
            TokenScan is a collaborative effort between Schroeder Technologies and Gregorious Creative Studios to bring institutional-grade analysis to the everyday trader.
          </p>
          <p className="text-lg text-[#0a0a12]/70 leading-relaxed">
            In an era of rapid deployment and anonymous founders, research shouldn't take hours. We've combined the raw aesthetic of expressionist art with high-fidelity blockchain data synthesis to provide reports that are as beautiful as they are accurate.
          </p>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {colors.map((color, i) => (
            <div 
              key={i}
              className="aspect-square rounded-full shadow-lg transition-all duration-500 hover:scale-125 cursor-pointer hover:z-10"
              style={{ 
                backgroundColor: color,
                boxShadow: color.startsWith('#00f') || color.startsWith('#ff') ? `0 0 15px ${color}` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
