
import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { ViewType } from '../types';

interface HeaderProps {
  isScrolled: boolean;
  activeView: ViewType;
  setView: (v: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; value: ViewType }[] = [
    { label: 'Analyzer', value: 'lab' },
    { label: 'Philosophy', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'FAQ', value: 'faq' },
  ];

  const handleNav = (v: ViewType) => {
    setView(v);
    setIsMenuOpen(false);
  };

  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-16 py-6 transition-all duration-500 ${isScrolled || activeView !== 'home' ? 'bg-[#f5f0e8]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => handleNav('home')}
          aria-label="TokenScan home"
          className="text-3xl font-bold font-caveat text-[#c41e3a] flex items-center gap-2 tap-target"
        >
          <ShieldCheck className="text-[#1e3a8a]" size={32} aria-hidden="true" />
          TokenScan
        </button>

        <nav aria-label="Main navigation" className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNav(item.value)}
              aria-current={activeView === item.value ? 'page' : undefined}
              className={`text-xs uppercase tracking-widest font-semibold transition-standard relative group ${activeView === item.value ? 'text-[#c41e3a]' : 'text-[#1e3a8a] hover:text-[#c41e3a]'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#c41e3a] transition-all duration-300 ${activeView === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`} aria-hidden="true"></span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('lab')}
          aria-label="Go to token analyzer"
          className="hidden md:block font-caveat text-xl bg-[#c41e3a] text-[#f5f0e8] px-8 py-2 rounded-full hover:bg-[#1e3a8a] hover:scale-105 transition-standard"
        >
          Instant Scan
        </button>

        <button
          className="md:hidden tap-target text-[#1e3a8a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[#f5f0e8] z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <button
          className="absolute top-6 right-6 tap-target text-[#1e3a8a]"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} aria-hidden="true" />
        </button>
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => handleNav(item.value)}
            aria-current={activeView === item.value ? 'page' : undefined}
            className="text-4xl font-caveat text-[#1e3a8a] hover:text-[#c41e3a]"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => handleNav('lab')}
          aria-label="Go to token analyzer"
          className="mt-8 font-caveat text-3xl bg-[#c41e3a] text-[#f5f0e8] px-12 py-4 rounded-full"
        >
          Instant Scan
        </button>
      </div>
    </header>
  );
};

export default Header;
