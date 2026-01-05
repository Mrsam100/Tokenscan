
import React from 'react';

const stats = [
  { value: '250K', label: 'Tokens Scanned', color: 'text-[#00f5ff]', neon: 'neon-glow-cyan' },
  { value: '18K', label: 'Rugs Detected', color: 'text-[#ff1493]', neon: 'neon-glow-pink' },
  { value: '30s', label: 'Avg Scan Time', color: 'text-[#ff8c00]', neon: 'neon-glow-orange' },
  { value: '100%', label: 'Free Forever', color: 'text-[#ff3131]', neon: 'neon-glow-red' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-[#0a0a12] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="group">
            <div className={`font-caveat text-7xl font-bold mb-4 ${stat.color} ${stat.neon} animate-flicker group-hover:scale-110 transition-transform duration-500`}>
              {stat.value}
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f5f0e8]/50 font-bold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
