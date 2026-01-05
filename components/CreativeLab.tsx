
import React, { useState, useEffect, useRef } from 'react';
import { Download, Trash2, History, ShieldCheck, AlertCircle, TrendingUp, Users, Lock, Share2, FileText, Printer } from 'lucide-react';
import { generateTokenReport } from '../services/geminiService';
import { saveManifestation, getManifestations, deleteManifestation } from '../services/storage';
import { TokenReport } from '../types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CreativeLab: React.FC = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TokenReport | null>(null);
  const [history, setHistory] = useState<TokenReport[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory(getManifestations());
  }, []);

  const steps = [
    "Identifying network...",
    "Scanning contract source code...",
    "Analyzing holder distribution...",
    "Evaluating liquidity pools...",
    "Measuring social momentum...",
    "Synthesizing risk report..."
  ];

  const handleScan = async () => {
    if (!address.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);

    let stepIdx = 0;
    const interval = setInterval(() => {
      setProgress(steps[stepIdx]);
      stepIdx = (stepIdx + 1) % steps.length;
    }, 3500);

    try {
      const data = await generateTokenReport(address);
      setResult(data);
      saveManifestation(data);
      setHistory(getManifestations());
      setAddress('');
    } catch (err: any) {
      setError(err.message || "Failed to scan token.");
    } finally {
      clearInterval(interval);
      setLoading(false);
      setProgress('');
    }
  };

  const handleDownloadTxt = (item: TokenReport) => {
    const text = `TOKENSCAN DUE DILIGENCE REPORT: ${item.name} (${item.symbol})\nAddress: ${item.address}\nRisk Score: ${item.riskScore}/100\n\nSUMMARY: ${item.summary}\n\nCONTRACT: ${item.contractAnalysis.status}\nTOKENOMICS: ${item.tokenomics.supply}\nHOLDERS: ${item.holderConcentration.description}\nLIQUIDITY: ${item.liquidity.status}\n\nProduced by Schroeder Technologies & Gregorious Creative Studios • 2025`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tokenscan-${item.symbol.toLowerCase()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportPDF = async () => {
    if (!reportRef.current || !result) return;
    
    setIsExporting(true);
    try {
      // Ensure element is fully rendered and styled for capture
      await new Promise(r => setTimeout(r, 200));
      
      const canvas = await html2canvas(reportRef.current, {
        scale: 2, // 2x resolution for print quality
        useCORS: true,
        backgroundColor: '#0a0a12', // Strict theme background
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`TokenScan_Audit_${result.symbol}_${Date.now()}.pdf`);
    } catch (err) {
      console.error('Export Error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDelete = (id: string) => {
    deleteManifestation(id);
    setHistory(getManifestations());
    if (result?.id === id) setResult(null);
  };

  const getRiskColor = (score: number) => {
    if (score < 30) return 'bg-[#22C55E]';
    if (score < 60) return 'bg-[#F59E0B]';
    return 'bg-[#DC2626]';
  };

  const getRiskTextColor = (score: number) => {
    if (score < 30) return 'text-[#22C55E]';
    if (score < 60) return 'text-[#F59E0B]';
    return 'text-[#DC2626]';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <p className="font-caveat text-3xl text-[#00f5ff] flex items-center gap-2 neon-glow-cyan">
              <ShieldCheck size={24} /> Token Analyzer
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
              Paste a contract address. <span className="italic italic">Get reports for free.</span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Contract Address (EVM, Solana, etc.)"
                className="flex-grow bg-[#1a1a2e] border-2 border-[#1e3a8a] rounded-xl px-6 py-4 text-[#f5f0e8] font-playfair text-xl focus:outline-none focus:border-[#00f5ff] transition-standard shadow-inner"
              />
              <button
                onClick={handleScan}
                disabled={loading || !address.trim()}
                className="md:w-56 font-caveat text-3xl bg-[#00f5ff] text-[#0a0a12] py-4 rounded-xl hover:scale-[1.05] active:scale-[0.95] transition-standard disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                {loading ? 'Analyzing...' : 'Generate Report'}
              </button>
            </div>
            {loading && (
              <div className="mt-4 flex items-center gap-3 text-[#00f5ff] font-caveat text-2xl animate-pulse">
                <span className="w-5 h-5 border-2 border-[#00f5ff] border-t-transparent rounded-full animate-spin"></span>
                {progress}
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-200 flex items-center gap-3">
                <AlertCircle size={20} /> {error}
              </div>
            )}
          </div>

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
              <div 
                ref={reportRef}
                className="bg-[#0a0a12] rounded-3xl p-8 md:p-12 border border-[#1e3a8a]/30 relative overflow-hidden"
              >
                {/* Branding Watermark Layer */}
                <div className="export-watermark font-caveat select-none">
                  TOKENSCAN | SCHROEDER & GREGORIOUS
                </div>

                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <ShieldCheck size={200} />
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 relative z-10">
                  <div className="space-y-2">
                    <h3 className="font-caveat text-6xl md:text-8xl text-[#f5f0e8] leading-none">{result.name}</h3>
                    <p className="text-[#00f5ff] font-bold tracking-[0.2em] text-2xl neon-glow-cyan uppercase">{result.symbol}</p>
                    <p className="text-xs text-[#f5f0e8]/30 font-mono break-all bg-white/5 inline-block px-3 py-1 rounded-full">{result.address}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#f5f0e8]/30 mb-2 font-bold">Risk Assessment</p>
                    <div className={`font-caveat text-[6rem] md:text-[8rem] font-bold leading-none ${getRiskTextColor(result.riskScore)}`}>
                      {result.riskScore}
                    </div>
                    <div className="risk-bar w-48 h-2">
                      <div className={`risk-fill ${getRiskColor(result.riskScore)}`} style={{ width: `${result.riskScore}%` }} />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-8 mb-10 border border-white/5 relative z-10 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-widest text-[#00f5ff] mb-4 font-bold">Audit Executive Summary</p>
                  <p className="font-playfair italic text-2xl text-[#f5f0e8]/90 leading-relaxed">
                    "{result.summary}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#ff1493]/30 transition-standard group">
                    <div className="flex items-center gap-3 text-[#ff1493] mb-4">
                      <Lock size={20} /> <span className="text-[11px] uppercase font-bold tracking-widest">Contract Risks</span>
                    </div>
                    <ul className="space-y-3">
                      {result.contractAnalysis.warnings.map((w, i) => (
                        <li key={i} className="text-sm text-red-400/90 flex gap-3">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" /> {w}
                        </li>
                      ))}
                      <li className="text-sm text-[#f5f0e8]/50 italic border-t border-white/5 pt-3 mt-3">
                        Integrity: {result.contractAnalysis.status}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#f4d03f]/30 transition-standard">
                    <div className="flex items-center gap-3 text-[#f4d03f] mb-4">
                      <Users size={20} /> <span className="text-[11px] uppercase font-bold tracking-widest">Wallets & Holders</span>
                    </div>
                    <p className="text-base text-[#f5f0e8]/80 leading-relaxed mb-4">{result.holderConcentration.description}</p>
                    <p className="text-[11px] text-[#f5f0e8]/30 font-mono bg-black/30 p-3 rounded-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
                      Trace: {result.holderConcentration.topWallets}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#00f5ff]/30 transition-standard">
                    <div className="flex items-center gap-3 text-[#00f5ff] mb-4">
                      <TrendingUp size={20} /> <span className="text-[11px] uppercase font-bold tracking-widest">Tokenomics Analysis</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-xs text-[#f5f0e8]/40">Total Supply</span>
                        <span className="text-sm font-bold text-[#f5f0e8]">{result.tokenomics.supply}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-xs text-[#f5f0e8]/40">Fees (Buy/Sell)</span>
                        <span className="text-sm font-bold text-[#f5f0e8]">{result.tokenomics.tax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-[#f5f0e8]/40">Allocation</span>
                        <span className="text-sm font-bold text-[#f5f0e8]">{result.tokenomics.distribution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#ff8c00]/30 transition-standard flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[#ff8c00] mb-4">
                        <Share2 size={20} /> <span className="text-[11px] uppercase font-bold tracking-widest">Sentiment Profile</span>
                      </div>
                      <p className="font-caveat text-4xl text-[#f5f0e8] leading-none mb-2">{result.socialSentiment.vibe}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#f5f0e8]/30 uppercase tracking-[0.2em]">Momentum: {result.socialSentiment.strength}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Branding for Official Reports */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 opacity-30">
                   <div className="font-caveat text-2xl text-white">
                      Schroeder Technologies & Gregorious Creative Studios
                   </div>
                   <div className="text-[#00f5ff] text-[10px] tracking-[0.4em] uppercase font-black">
                      Automated Verification System • 2025
                   </div>
                </div>
              </div>

              {/* Functional Export Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleExportPDF}
                  disabled={isExporting}
                  className="flex-grow flex items-center justify-center gap-3 font-caveat text-3xl bg-[#c41e3a] text-white py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(196,30,58,0.4)] transition-standard transform hover:-translate-y-1 disabled:opacity-50"
                >
                  {isExporting ? <span className="animate-spin"><Printer size={24}/></span> : <FileText size={24} />}
                  Export Branded PDF
                </button>
                <button 
                  onClick={() => handleDownloadTxt(result)}
                  className="flex-grow flex items-center justify-center gap-3 font-caveat text-3xl bg-white/5 text-white py-5 rounded-2xl hover:bg-white/10 transition-standard"
                >
                  <Download size={24} /> Export Text Data
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
          <div className="flex items-center gap-2 font-caveat text-2xl text-[#f5f0e8]/60">
            <History size={20} /> Local Archive
          </div>
          
          <div className="space-y-4 max-h-[1000px] overflow-y-auto pr-2 custom-scrollbar">
            {history.length === 0 ? (
              <div className="py-20 text-center border-2 border-dashed border-white/10 rounded-3xl">
                <p className="font-playfair italic text-[#f5f0e8]/20">The archives are empty.</p>
              </div>
            ) : (
              history.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#00f5ff]/30 transition-standard group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#c41e3a]/5 -mr-12 -mt-12 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <button 
                      onClick={() => setResult(item)}
                      className="font-caveat text-2xl text-[#00f5ff] hover:text-white transition-standard text-left"
                    >
                      {item.name} <span className="opacity-40">({item.symbol})</span>
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="p-2 text-[#f5f0e8]/40 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={16}/>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3 relative z-10">
                    <span className={`text-sm font-black px-2 py-0.5 rounded ${getRiskColor(item.riskScore)} text-white`}>
                      Score: {item.riskScore}
                    </span>
                    <span className="text-[10px] text-[#f5f0e8]/20 uppercase tracking-widest">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeLab;
