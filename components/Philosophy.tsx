
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#f5f0e8] overflow-hidden">
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-48 h-96 bg-gradient-to-b from-[#c41e3a] to-[#8b0000] rounded-full opacity-10 animate-brush blur-md"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-caveat text-2xl text-[#c41e3a] mb-6">the philosophy ♡</p>
        <p className="font-playfair italic text-3xl md:text-4xl text-[#0a0a12] leading-loose">
          Schroeder Technologies and Gregorious Creative Studios believe that 
          <span className="font-caveat not-italic font-bold text-[#c41e3a] text-5xl"> Truth </span> 
          is the only currency that matters. In a landscape of anonymous actors and hidden 
          vulnerabilities, we leverage high-fidelity AI to give every participant 
          <span className="font-caveat not-italic font-bold text-[#1e3a8a] text-5xl"> Clarity</span>. 
          Analysis shouldn't take hours; protection should be instant.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
