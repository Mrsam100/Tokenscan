
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WorkPiece } from '../types';

const workPieces: WorkPiece[] = [
  { 
    id: 1, 
    title: 'Quantum', 
    category: 'Digital Narrative', 
    neonWord: 'Dream', 
    gradient: 'from-[#c41e3a] via-[#8b0000] to-[#1e3a8a]', 
    neonColor: 'text-[#00f5ff]',
    description: "A generative identity project exploring the collision between algorithmic precision and human subconscious. We developed a series of 10,000 unique 'dreams' as part of a digital art collection."
  },
  { 
    id: 2, 
    title: 'Atlas', 
    category: 'Spatial Branding', 
    neonWord: 'Rise', 
    gradient: 'from-[#1e3a8a] via-[#3b5998] to-[#f4d03f]', 
    neonColor: 'text-[#ff1493]',
    description: "Wayfinding and environmental graphics for the Atlas Creative Hub in Berlin. The project involved physical neon installations integrated directly into textured concrete walls."
  },
  { 
    id: 3, 
    title: 'Prism', 
    category: 'Visual Identity', 
    neonWord: 'Fly', 
    gradient: 'from-[#f4d03f] via-[#ff6b35] to-[#c41e3a]', 
    neonColor: 'text-[#ff8c00]',
    description: "Rebranding for a high-performance aeronautics startup. The identity focuses on the refraction of light at high speeds, translated through a bold, kinetic color system."
  },
  { 
    id: 4, 
    title: 'Element', 
    category: 'Motion Design', 
    neonWord: 'Soar', 
    gradient: 'from-[#0f1f4a] via-[#c41e3a] to-[#d4a84c]', 
    neonColor: 'text-[#fff700]',
    description: "A series of abstract motion pieces for a luxury timepiece brand. Every frame was hand-painted digitally to retain the raw texture of physical oil paint."
  },
  { 
    id: 5, 
    title: 'Flora', 
    category: 'Experiential', 
    neonWord: 'Free', 
    gradient: 'from-[#e85d04] via-[#e63946] to-[#3b5998]', 
    neonColor: 'text-[#00f5ff]',
    description: "An interactive botanical exhibit where light intensity is controlled by live data from nearby plant biosensors. A true fusion of biology and electric poetry."
  },
  { 
    id: 6, 
    title: 'Muse', 
    category: 'Editorial Art', 
    neonWord: 'Love', 
    gradient: 'from-[#8b0000] via-[#1e3a8a] to-[#cc7000]', 
    neonColor: 'text-[#ff3131]',
    description: "Art direction and layout for 'MUSE' magazine, an independent publication dedicated to raw expressionism in the 21st century. Featured heavy use of neon-ink printing."
  },
];

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WorkPiece | null>(null);

  return (
    <section className="bg-[#1a1a2e] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-caveat text-2xl text-[#f4d03f] mb-2">curated works</p>
          <h2 className="font-caveat text-7xl md:text-9xl text-[#f5f0e8] leading-none">The Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {workPieces.map((work) => (
            <div 
              key={work.id} 
              onClick={() => setSelectedProject(work)}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:-rotate-1"
            >
              <div className="bg-[#f5f0e8] p-4 shadow-2xl relative">
                <div className={`aspect-[4/5] relative overflow-hidden bg-gradient-to-br ${work.gradient}`}>
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-caveat text-5xl font-bold whitespace-nowrap animate-flicker ${work.neonColor} drop-shadow-[0_0_15px_currentColor]`}>
                    {work.neonWord}
                  </span>
                </div>
                <div className="pt-6 pb-2 text-center">
                  <h3 className="font-caveat text-3xl text-[#0a0a12]">{work.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a] font-bold opacity-60">{work.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0a0a12]/95 backdrop-blur-xl animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-8 right-8 text-[#f5f0e8] hover:text-[#ff1493] tap-target"
          >
            <X size={40} />
          </button>
          
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`aspect-[4/5] bg-gradient-to-br ${selectedProject.gradient} rounded-lg flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
              <span className={`font-caveat text-[8rem] font-bold animate-flicker ${selectedProject.neonColor} drop-shadow-[0_0_30px_currentColor]`}>
                {selectedProject.neonWord}
              </span>
            </div>
            <div className="space-y-6">
              <p className="font-caveat text-3xl text-[#ff1493]">{selectedProject.category}</p>
              <h2 className="font-caveat text-7xl text-[#f5f0e8]">{selectedProject.title}</h2>
              <p className="text-xl text-[#f5f0e8]/80 leading-relaxed font-playfair italic">
                {selectedProject.description}
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-caveat text-2xl text-[#f4d03f] border-b-2 border-[#f4d03f] pb-1 hover:text-[#ff1493] hover:border-[#ff1493] transition-standard"
                >
                  Return to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
