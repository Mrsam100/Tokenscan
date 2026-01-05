
import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#c41e3a] via-[#1e3a8a] to-[#d4a84c] relative overflow-hidden">
      <div className="absolute inset-0 canvas-texture opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-playfair italic text-2xl md:text-4xl text-[#f5f0e8] leading-loose">
          "They didn't just design our brand — they gave it a soul. 
          Part painting, part poetry, part pure electricity. 
          We've never felt more alive."
        </p>
        <p className="font-caveat text-2xl text-[#f4d03f] mt-12">— Someone Who Found Their Wings</p>
      </div>
    </section>
  );
};

export default Quote;
