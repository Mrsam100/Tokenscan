
import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { 
    id: 'contract-analysis',
    name: 'Contract Analysis', 
    description: 'Deep scan of source code patterns, ownership status, and malicious admin function identification.', 
    borderColor: 'border-[#c41e3a]',
    details: 'Detects honeypots, mint functions, and hidden backdoors in 30 seconds.'
  },
  { 
    id: 'tokenomics-insight',
    name: 'Tokenomics Insight', 
    description: 'Automatic calculation of circulating supply, buy/sell taxes, and burning mechanisms.', 
    borderColor: 'border-[#1e3a8a]',
    details: 'Visualizes tax impacts and deflationary models clearly.'
  },
  { 
    id: 'holder-map',
    name: 'Holder Distribution', 
    description: 'Analyzes whale concentration and identifies team vs community wallet health.', 
    borderColor: 'border-[#d4a84c]',
    details: 'Alerts on suspicious wallet clusters and exchange liquidity status.'
  },
  { 
    id: 'sentiment-scan',
    name: 'Social Sentiment', 
    description: 'AI evaluation of X (Twitter) and Telegram activity to gauge community hype vs real momentum.', 
    borderColor: 'border-[#ff6b35]',
    details: 'Filters out bot activity to show genuine community engagement strength.'
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#f5f0e8]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-caveat text-2xl text-[#0a0a12] mb-2">core capabilities</p>
          <h2 className="font-caveat text-7xl md:text-9xl text-[#0a0a12] leading-none">
            Trust the <span className="text-[#c41e3a]">Code</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-[#faf5eb] p-12 border-l-8 ${service.borderColor} shadow-sm transition-all duration-300 hover:translate-x-4 hover:shadow-xl group`}
            >
              <h3 className="font-caveat text-4xl text-[#0a0a12] mb-4 group-hover:text-[#c41e3a] transition-colors">
                {service.name}
              </h3>
              <p className="text-[#1e3a8a]/70 leading-relaxed text-lg mb-4">
                {service.description}
              </p>
              <p className="text-[#1e3a8a]/50 text-sm font-playfair italic">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
