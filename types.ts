
export interface TokenReport {
  id: string;
  address: string;
  symbol: string;
  name: string;
  riskScore: number;
  summary: string;
  contractAnalysis: {
    status: string;
    risks: string[];
    warnings: string[];
  };
  tokenomics: {
    supply: string;
    tax: string;
    distribution: string;
  };
  holderConcentration: {
    score: number;
    description: string;
    topWallets: string;
  };
  liquidity: {
    status: string;
    locked: boolean;
    depth: string;
  };
  socialSentiment: {
    vibe: string;
    strength: string;
  };
  createdAt: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  borderColor: string;
  details: string;
}

// Added WorkPiece interface used in the Gallery component
export interface WorkPiece {
  id: number;
  title: string;
  category: string;
  neonWord: string;
  gradient: string;
  neonColor: string;
  description: string;
}

export type ViewType = 'home' | 'lab' | 'about' | 'contact' | 'terms' | 'privacy' | 'faq';
