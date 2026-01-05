
import React from 'react';

export const LegalView: React.FC<{ type: 'terms' | 'privacy' }> = ({ type }) => {
  const isTerms = type === 'terms';
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-caveat text-6xl text-[#c41e3a] mb-12">
        {isTerms ? 'Terms of Analysis' : 'Privacy & Trust'}
      </h1>
      <div className="space-y-8 text-lg leading-relaxed text-[#1e3a8a]/80 font-playfair italic">
        {isTerms ? (
          <>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">1. No Financial Advice</h2>
              <p>TokenScan is an automated analysis tool. We provide data synthesis, not financial recommendations. All trades involve risk. Only invest what you can afford to lose.</p>
            </section>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">2. Accuracy Limitations</h2>
              <p>AI analysis may miss novel rug pull techniques or sophisticated malicious patterns. Our reports are generated based on current on-chain and social snapshots.</p>
            </section>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">3. Open Source Blessing</h2>
              <p>TokenScan is a free, plug-and-play solution. You may share our reports in your communities as long as the Schroeder & Gregorious branding remains intact.</p>
            </section>
          </>
        ) : (
          <>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">1. Local History</h2>
              <p>We do not store your scan history on our servers. Your "Recent Scans" are stored exclusively in your browser's local storage.</p>
            </section>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">2. Anonymous Access</h2>
              <p>TokenScan requires no login or registration. Your identity remains private while you perform your due diligence.</p>
            </section>
            <section>
              <h2 className="text-[#0a0a12] font-bold not-italic mb-4">3. Data Usage</h2>
              <p>Contract addresses submitted are used only to generate the requested AI report. We do not sell scan data to third parties.</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export const FAQView: React.FC = () => {
  const faqs = [
    { q: "How accurate are the risk scores?", a: "The scores reflect a weighted analysis of contract security, holder concentration, and liquidity health. A low score doesn't guarantee safety, but a high score indicates significant red flags." },
    { q: "Which blockchains are supported?", a: "TokenScan currently detects and analyzes Ethereum (ETH), Binance Smart Chain (BSC), Polygon, Solana (SOL), and major EVM-compatible chains." },
    { q: "Is it really free?", a: "Yes. This platform is a public good provided by Schroeder Technologies and Gregorious Creative Studios to foster a safer crypto ecosystem." },
    { q: "What should I do if a token has a 90+ risk score?", a: "Exercise extreme caution. A high risk score usually means the developers can rug the project at any moment or that the liquidity is dangerously thin." }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-caveat text-6xl text-[#c41e3a] mb-12">Analysis FAQ</h1>
      <div className="space-y-12">
        {faqs.map((f, i) => (
          <div key={i} className="group">
            <h3 className="font-caveat text-3xl text-[#0a0a12] mb-4 group-hover:text-[#c41e3a] transition-standard">
              {f.q}
            </h3>
            <p className="text-xl text-[#1e3a8a]/70 font-playfair italic leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
