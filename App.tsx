
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Philosophy from './components/Philosophy';
import CreativeLab from './components/CreativeLab';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LegalView, FAQView } from './views/LegalViews';
import { ViewType } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const renderContent = useMemo(() => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <Hero onCta={() => setActiveView('lab')} />
            <HowItWorks />
            <Philosophy />
            <section id="analyzer-preview">
              <CreativeLab />
            </section>
            <Services />
            <Stats />
            <About />
            <Contact />
          </>
        );
      case 'lab':
        return <div className="pt-24 min-h-screen bg-[#0a0a12]"><CreativeLab /></div>;
      case 'about':
        return <div className="pt-24"><About /></div>;
      case 'contact':
        return <div className="pt-24"><Contact /></div>;
      case 'terms':
        return <LegalView type="terms" />;
      case 'privacy':
        return <LegalView type="privacy" />;
      case 'faq':
        return <FAQView />;
      default:
        return <Hero onCta={() => setActiveView('lab')} />;
    }
  }, [activeView]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header 
        isScrolled={isScrolled} 
        activeView={activeView} 
        setView={setActiveView} 
      />
      
      <main className="flex-grow">
        {renderContent}
      </main>
      
      <Footer setView={setActiveView} />
    </div>
  );
};

export default App;
