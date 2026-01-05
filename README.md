# TokenScan | AI-Powered Crypto Due Diligence

<div align="center">

![TokenScan Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

**Instant institutional-grade token analysis. Paste a contract address. Get a comprehensive report in 30 seconds. 100% free, no login required.**

[Live Demo](https://tokenscan.tech) · [Report Bug](https://github.com/tokenscan/issues) · [Request Feature](https://github.com/tokenscan/issues)

</div>

---

## 🚀 Features

### Core Functionality
- ✅ **Real AI-Powered Analysis**: Gemini 3 Pro analyzes tokenomics, contract risks, and holder distribution
- ✅ **No Login Required**: Completely free, plug-and-play solution
- ✅ **Local Data Storage**: All analysis history stored in browser localStorage
- ✅ **Professional Export**: Download reports as branded PDF or plain text
- ✅ **Real-Time Analysis**: Get comprehensive reports in under 30 seconds
- ✅ **Multi-Chain Support**: Supports EVM chains (Ethereum, BSC, Polygon) and Solana

### Security & Analysis
- 🔍 **Contract Risk Assessment**: Detects honeypots, mint functions, and hidden backdoors
- 📊 **Tokenomics Breakdown**: Supply, taxes, burn mechanisms, and distribution analysis
- 👥 **Holder Distribution**: Whale concentration and wallet cluster detection
- 💧 **Liquidity Health**: Pool depth and lock status verification
- 📈 **Social Sentiment**: AI-powered community vibe analysis

### User Experience
- 📱 **Fully Responsive**: Optimized for mobile (320px+), tablet, and desktop
- ♿ **Accessible**: WCAG compliant with ARIA labels and keyboard navigation
- 🌐 **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- ⚡ **Fast Performance**: Optimized build with efficient rendering
- 🎨 **Professional Design**: Expressionist art aesthetic with neon accents

---

## 🏁 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Gemini API Key** ([Get one free here](https://ai.google.dev/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tokenscan/tokenscan.git
   cd tokenscan/Tokenscan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local and add your Gemini API key
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Development

### Project Structure

```
Tokenscan/
├── components/          # React components
│   ├── Header.tsx       # Main navigation with mobile menu
│   ├── Hero.tsx         # Landing hero section
│   ├── CreativeLab.tsx  # Token analyzer (main feature)
│   ├── HowItWorks.tsx   # Process explanation
│   ├── Philosophy.tsx   # Philosophy section
│   ├── Services.tsx     # Feature showcase
│   ├── Stats.tsx        # Statistics section
│   ├── About.tsx        # Company info
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Site footer
├── services/
│   ├── geminiService.ts # AI integration
│   └── storage.ts       # LocalStorage with quota handling
├── views/
│   └── LegalViews.tsx   # Terms, Privacy, FAQ
├── App.tsx              # Main app component with routing
├── index.tsx            # Entry point
├── types.ts             # TypeScript interfaces
├── index.html           # HTML with inline styles & meta tags
├── vite.config.ts       # Vite configuration
├── vercel.json          # Deployment config
└── package.json         # Dependencies
```

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

### Key Technologies

- **React 19.2.3**: UI framework
- **TypeScript 5.8.2**: Type safety
- **Vite 6.2.0**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling (via CDN)
- **Gemini AI**: Token analysis engine
- **html2canvas + jsPDF**: PDF export functionality
- **Lucide React**: Icon library

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push code to GitHub**

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Import your repository
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Add environment variable**
   - Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your key
   - Redeploy

4. **Custom domain** (optional)
   - Settings → Domains
   - Add your custom domain

### Environment Variables

```bash
GEMINI_API_KEY=your_api_key_here
```

**Security Note**: Always use environment variables in your hosting platform. Never commit `.env.local` to version control.

---

## 🏗 Architecture

### Data Flow

```
User Input (Contract Address)
    ↓
CreativeLab Component
    ↓
geminiService.ts → Gemini API
    ↓
AI Analysis (30s)
    ↓
TokenReport Object
    ↓
├─→ Display in UI
├─→ Save to localStorage (with quota handling)
└─→ Export as PDF/TXT
```

### LocalStorage Strategy

- **Key**: `tokenscan_analysis_history`
- **Max Reports**: 50 (auto-trimmed)
- **Quota Handling**: Graceful degradation to 25→10 reports if storage full
- **Error Recovery**: Try-catch blocks prevent data loss

---

## 🎯 Features in Detail

### 1. Hero Section Button Fix

**Issue Fixed**: On large/tall screens, the "Start Analysis" button was pushed outside visible area.

**Solution**:
- Removed `justify-center` causing unpredictable centering
- Changed from `min-h-[95vh]` to `min-h-screen`
- Added explicit padding (`pt-12 md:pt-20 pb-8`)
- Button now always visible across all screen sizes

### 2. Token Analyzer

- Real-time input validation
- Keyboard shortcut (Enter to submit)
- 6-step progress animation
- Error handling with user-friendly messages
- localStorage quota management
- Fully responsive (mobile, tablet, desktop)

### 3. Export Functionality

**PDF**: Branded report with watermark, full styling preserved
**TXT**: Plain text for easy sharing

### 4. Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader compatible
- Sufficient color contrast (WCAG AA)
- Semantic HTML structure
- Focus management in modals

### 5. SEO & Social Sharing

- Complete Open Graph tags for Facebook/LinkedIn
- Twitter Card metadata
- Structured data (JSON-LD)
- Optimized meta descriptions
- Canonical URLs

---

## 🔒 Security & Privacy

### Data Handling

- ✅ No server-side storage
- ✅ All data in browser localStorage
- ✅ No user tracking or analytics
- ✅ No third-party data sharing
- ✅ HTTPS-only in production
- ✅ Security headers configured (vercel.json)

---

## 🛠 Troubleshooting

### Build Fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API Errors

- Verify `GEMINI_API_KEY` is set correctly
- Check API key has quota remaining
- Ensure network allows requests to `ai.google.dev`

### LocalStorage Full

- App automatically trims to 10 most recent reports
- Users can manually delete old reports
- Export important reports as PDF/TXT

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👥 Credits

**Built by**: Schroeder Technologies & Gregorious Creative Studios

**Philosophy**: Combining institutional-grade analysis with expressionist art aesthetics.

---

## 📞 Support

- **Email**: scan@tokenscan.tech
- **Website**: [tokenscan.tech](https://tokenscan.tech)

---

<div align="center">

**Made with ♡ for the crypto community**

⭐ Star us on GitHub if TokenScan helped you avoid a rug pull!

</div>
