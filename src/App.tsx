/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Check, 
  Bot,
  Share2
} from 'lucide-react';
import { WaitlistHero } from './components/ui/waitlist-hero';

// Import all images
import logoImage from './assets/logo.png';
import netflixImg from './assets/netfllx.jpg';
import spotifyImg from './assets/Spotify.jpg';
import primeImg from './assets/Prime.jpg';
import telegramImg from './assets/Telegram.png';
import snapchatImg from './assets/Snapchat.jpg';
import playstationImg from './assets/playstation.jpg';
import codImg from './assets/call of duty.jpg';
import pubgImg from './assets/pubg.jpg';
import appleImg from './assets/appel.jpg';
import googlePlayImg from './assets/googel play gift cards.jpg';
import chatgptImg from './assets/Chatgpt.jpg';
import geminiImg from './assets/Gemini.jpg';
import grokImg from './assets/Grock.jpg';
import grammarlyImg from './assets/gramarilly.jpg';
import tradingViewImg from './assets/TradingView Pro.jpg';
import nordVpnImg from './assets/nord vpn.jpg';

const CATALOG_ITEMS = [
  // Entertainment - Streaming
  { 
    id: 'ENT_01', 
    name: 'Netflix Premium', 
    category: 'Entertainment', 
    desc: '4K Ultra HD streaming access.', 
    features: ['1 Month', '3 Months', '6 Months'], 
    image: netflixImg,
    imageSrcSet: netflixImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'ENT_02', 
    name: 'Spotify Premium', 
    category: 'Entertainment', 
    desc: 'Ad-free high-fidelity audio.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: spotifyImg,
    imageSrcSet: spotifyImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'ENT_03', 
    name: 'YouTube Premium', 
    category: 'Entertainment', 
    desc: 'Ad-free videos & background play.', 
    features: ['1 Year', 'Music Included', 'Offline Downloads'], 
    image: primeImg,
    imageSrcSet: primeImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  
  // Social & Communication
  { 
    id: 'SOC_01', 
    name: 'Telegram Premium', 
    category: 'Social', 
    desc: 'Enhanced messaging features.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: telegramImg,
    imageSrcSet: telegramImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'SOC_02', 
    name: 'Snapchat Premium', 
    category: 'Social', 
    desc: 'Advanced filters & features.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: snapchatImg,
    imageSrcSet: snapchatImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  
  // Gaming
  { 
    id: 'GAM_01', 
    name: 'PlayStation Gift Cards', 
    category: 'Gaming', 
    desc: 'Digital wallet top-up for PlayStation.', 
    features: ['$25 Cards', '$50 Cards', '$100 Cards'], 
    image: playstationImg,
    imageSrcSet: playstationImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'GAM_02', 
    name: 'Call of Duty', 
    category: 'Gaming', 
    desc: 'Premium gaming experience.', 
    features: ['Battle Pass', 'Premium Content', 'Exclusive Access'], 
    image: codImg,
    imageSrcSet: codImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'GAM_03', 
    name: 'PUBG Mobile', 
    category: 'Gaming', 
    desc: 'Mobile gaming premium features.', 
    features: ['UC Credits', 'Battle Pass', 'Exclusive Skins'], 
    image: pubgImg,
    imageSrcSet: pubgImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  
  // Gift Cards
  { 
    id: 'GIF_01', 
    name: 'Apple Gift Cards', 
    category: 'Gift Cards', 
    desc: 'App Store & iTunes credit.', 
    features: ['$10 - $200', 'Instant Delivery', 'Global Valid'], 
    image: appleImg,
    imageSrcSet: appleImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'GIF_02', 
    name: 'Google Play Gift Cards', 
    category: 'Gift Cards', 
    desc: 'Play Store & Google services credit.', 
    features: ['$10 - $200', 'Instant Delivery', 'Multiple Regions'], 
    image: googlePlayImg,
    imageSrcSet: googlePlayImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  
  // Productivity & AI
  { 
    id: 'PRO_01', 
    name: 'ChatGPT Plus', 
    category: 'Productivity', 
    desc: 'Advanced AI assistant access.', 
    features: ['1 Month', '3 Months', 'Priority Access'], 
    image: chatgptImg,
    imageSrcSet: chatgptImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'PRO_02', 
    name: 'Google Gemini Pro', 
    category: 'Productivity', 
    desc: 'Advanced AI by Google.', 
    features: ['Monthly Plans', 'Advanced AI', 'Google Integration'], 
    image: geminiImg,
    imageSrcSet: geminiImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'PRO_03', 
    name: 'Grok AI (X Premium)', 
    category: 'Productivity', 
    desc: 'AI assistant by X (Twitter).', 
    features: ['Monthly Access', 'Real-time Data', 'X Integration'], 
    image: grokImg,
    imageSrcSet: grokImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'PRO_04', 
    name: 'Grammarly Premium', 
    category: 'Productivity', 
    desc: 'Advanced writing assistant.', 
    features: ['Monthly Plans', 'Grammar Check', 'Writing Enhancement'], 
    image: grammarlyImg,
    imageSrcSet: grammarlyImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'PRO_05', 
    name: 'TradingView Pro', 
    category: 'Productivity', 
    desc: 'Advanced trading charts & analysis.', 
    features: ['Pro Features', 'Advanced Charts', 'Real-time Data'], 
    image: tradingViewImg,
    imageSrcSet: tradingViewImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
  { 
    id: 'PRO_06', 
    name: 'NordVPN Premium', 
    category: 'Productivity', 
    desc: 'Secure VPN connection worldwide.', 
    features: ['Global Servers', 'No Logs Policy', 'Fast Connection'], 
    image: nordVpnImg,
    imageSrcSet: nordVpnImg,
    botLink: 'https://t.me/Ezonstorebot' 
  },
];

const ShareButton = ({ item }: { item: typeof CATALOG_ITEMS[0] }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: item.name,
      text: `Check out ${item.name} on Enzo OS: ${item.desc}`,
      url: window.location.href,
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 sm:p-2.5 bg-[#050810]/70 hover:bg-[#4a6fa5] text-white rounded-full backdrop-blur-md transition-all border border-[#4a6fa5]/15 hover:border-[#6b9bd1]/50 z-20 shadow-lg hover:shadow-[0_0_15px_rgba(107,155,209,0.6)] group/btn touch-manipulation"
      style={{ minWidth: '44px', minHeight: '44px' }}
      title="Share"
      aria-label="Share this service"
    >
      {copied ? <Check className="w-4 h-4 text-[#6b9bd1] drop-shadow-[0_0_8px_rgba(107,155,209,0.6)] group-hover/btn:text-white" /> : <Share2 className="w-4 h-4 opacity-70 group-hover/btn:opacity-100" />}
    </button>
  );
};

const BackgroundGlows = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
            {/* FLUID FIX: Use max() to prevent overflow on small screens */}
            <div className="absolute top-[-10%] right-[-5%] bg-[#1a2942] rounded-full blur-[180px]" 
                 style={{ width: 'min(900px, 160vw)', height: 'min(900px, 160vw)' }} />
            <div className="absolute bottom-[-10%] left-[-10%] bg-[#2d4a7c] rounded-full blur-[180px]" 
                 style={{ width: 'min(1000px, 180vw)', height: 'min(1000px, 180vw)' }} />
            <div className="absolute top-[30%] left-[40%] bg-[#0d1420] rounded-full blur-[180px]" 
                 style={{ width: 'min(700px, 140vw)', height: 'min(700px, 140vw)' }} />
            <div className="absolute top-[50%] right-[20%] bg-[#4a6fa5] rounded-full blur-[200px] opacity-40" 
                 style={{ width: 'min(600px, 120vw)', height: 'min(600px, 120vw)' }} />
        </div>
    )
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(CATALOG_ITEMS.map((item) => item.category))];
  const filteredItems = activeCategory === 'All' ? CATALOG_ITEMS : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050810] bg-grid font-sans relative flex flex-col overflow-x-hidden">
      <BackgroundGlows />

      {/* Nav - Enhanced Mobile Responsiveness */}
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-subtle backdrop-blur-[25px]" 
           style={{ 
             padding: 'clamp(0.75rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
             paddingTop: 'max(0.75rem, env(safe-area-inset-top))'
           }}>
        <div className="flex justify-between items-center max-w-[90rem] mx-auto">
          <div className="logo-container group cursor-pointer">
            <img 
              src={logoImage} 
              alt="Enzo OS" 
              className="w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ height: 'clamp(3.5rem, 8vw, 4.5rem)' }}
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              className="glass-pill flex items-center justify-center gap-1 sm:gap-2 group hover:bg-white/10 transition-all touch-manipulation" 
              style={{ 
                padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(0.875rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.6875rem, 1.6vw, 0.875rem)',
                minHeight: '44px',
                minWidth: '44px'
              }}
              aria-label="Access Platform"
            >
              <span className="hidden xs:inline">Access Platform</span>
              <span className="inline xs:hidden">Access</span>
              <ArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" 
                          style={{ width: 'clamp(0.875rem, 2vw, 1rem)', height: 'clamp(0.875rem, 2vw, 1rem)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* RESPONSIVE HERO - Optimized for all devices */}
      <section className="relative w-full h-screen z-20 overflow-hidden" style={{ minHeight: '100svh' }}>
        <WaitlistHero />
      </section>

      {/* THE DASHBOARD */}
      <section 
        id="service-catalog"
        className="relative z-30 w-full" 
        style={{ 
          minHeight: '100vh',
          padding: 'clamp(2rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 12vw, 12rem)',
          maxWidth: '90rem',
          margin: '0 auto'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-end justify-between border-b border-white/10 gap-6"
          style={{ 
            paddingBottom: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          <div>
            <h2 className="font-semibold tracking-tighter" 
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                }}>
              Service Catalog
            </h2>
            <p className="text-slate-400 font-mono" 
               style={{ 
                 maxWidth: 'min(28rem, 90vw)',
                 fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                 lineHeight: '1.6'
               }}>
              Browse our encrypted service roster. Select a category below to filter targeted resources. All requests route to our secure deployment bot.
            </p>
          </div>
        </motion.div>

        {/* Category Filters - Enhanced Mobile Scrolling */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide snap-x snap-mandatory sm:snap-none" 
             style={{ 
               gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
               marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
               WebkitOverflowScrolling: 'touch'
             }}>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`glass-pill font-mono uppercase tracking-wider transition-all whitespace-nowrap border flex-shrink-0 snap-start touch-manipulation ${
                activeCategory === cat ? 'bg-[#4a6fa5] text-white font-bold border-[#6b9bd1]/50 shadow-[0_0_20px_rgba(107,155,209,0.6)]' : 'border-transparent text-slate-400 hover:text-white hover:bg-[#2d4a7c]/20'
              }`}
              style={{ 
                padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.25rem)',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                minHeight: '44px'
              }}
              aria-pressed={activeCategory === cat}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid - Fully Responsive Layout */}
        <div className="grid gap-4 sm:gap-6 md:gap-8" 
             style={{ 
               /* RESPONSIVE GRID: Single column on mobile, auto-fit on larger screens */
               gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))'
             }}>
          {filteredItems.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px", amount: 0.2 }}
              transition={{ 
                delay: Math.min(i * 0.02, 0.15), 
                duration: 0.3,
                ease: 'easeOut' 
              }}
              className="glass-module flex flex-col group hover:bg-white/[0.02] active:bg-white/[0.03] transition-all duration-500 relative overflow-hidden glass-hover touch-manipulation cursor-pointer"
              style={{ 
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                borderRadius: 'clamp(1rem, 3vw, 1.5rem)',
                willChange: 'auto'
              }}
              onClick={(e) => {
                // Allow card to be tappable on mobile for visual feedback
                const target = e.target as HTMLElement;
                if (!target.closest('a') && !target.closest('button')) {
                  e.currentTarget.classList.add('card-tap-effect');
                  setTimeout(() => {
                    e.currentTarget.classList.remove('card-tap-effect');
                  }, 200);
                }
              }}
            >
              {/* Photo Area - CLS PREVENTION */}
              <div className="w-full bg-white/5 overflow-hidden relative border border-white/5 flex items-center justify-center transform-gpu" 
                   style={{ 
                     aspectRatio: '16 / 10',
                     borderRadius: 'clamp(0.875rem, 2.5vw, 1.25rem)',
                     marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                   }}>
                 <img 
                   src={item.image}
                   srcSet={item.imageSrcSet}
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   alt={item.name}
                   loading="lazy"
                   decoding="async"
                   fetchpriority="low"
                   // CLS FIX: Explicit dimensions
                   width="600"
                   height="400"
                   className="w-full h-full object-cover opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-500 md:group-hover:scale-105 md:grayscale md:group-hover:grayscale-0"
                   style={{ 
                     transition: 'opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease',
                     willChange: 'auto'
                   }}
                 />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" 
                      style={{ borderRadius: 'clamp(0.875rem, 2.5vw, 1.25rem)' }} />
                 
                 <ShareButton item={item} />
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col flex-1" 
                   style={{ padding: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                
                {/* Header Section */}
                <div className="border-b border-white/10" 
                     style={{ 
                       paddingBottom: 'clamp(1rem, 2.5vw, 1.25rem)',
                       marginBottom: 'clamp(1rem, 2.5vw, 1.25rem)'
                     }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                     <h3 className="font-medium tracking-tight text-white line-clamp-1" 
                         style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                       {item.name}
                     </h3>
                  </div>
                  <p className="font-mono text-slate-400" 
                     style={{ 
                       fontSize: 'clamp(0.625rem, 1.5vw, 0.6875rem)',
                       lineHeight: '1.6'
                     }}>
                    {item.desc}
                  </p>
                </div>

                {/* Features Section */}
                <div className="flex flex-col flex-1">
                  <div className="flex-1 flex flex-col" 
                       style={{ 
                         gap: 'clamp(0.75rem, 2vw, 0.875rem)',
                         marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
                       }}>
                    <p className="font-mono text-slate-500 uppercase tracking-widest" 
                       style={{ 
                         fontSize: 'clamp(0.5625rem, 1.2vw, 0.625rem)',
                         marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                       }}>
                      Included
                    </p>
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start" style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
                        <Check className="text-[#6b9bd1] shrink-0 drop-shadow-[0_0_8px_rgba(107,155,209,0.6)]" 
                               style={{ 
                                 width: 'clamp(0.875rem, 2vw, 1rem)',
                                 height: 'clamp(0.875rem, 2vw, 1rem)',
                                 marginTop: '0.125rem'
                               }} />
                        <span className="font-mono text-slate-300" 
                              style={{ 
                                fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                                lineHeight: '1.4'
                              }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-white/5" 
                       style={{ paddingTop: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                    <a 
                      href={item.botLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full relative z-10 glass-pill bg-[#4a6fa5] text-white font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#6b9bd1] hover:text-white transition-all uppercase tracking-widest text-center shadow-[0_0_20px_rgba(74,111,165,0.5)] hover:shadow-[0_0_30px_rgba(107,155,209,0.7)] hover:border-[#6b9bd1]/60 touch-manipulation active:scale-95"
                      style={{ 
                        padding: 'clamp(0.875rem, 2vw, 1rem)',
                        fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                        minHeight: '48px'
                      }}
                      aria-label={`Request ${item.name} via Bot`}
                    >
                      <Bot className="shrink-0" style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)' }} /> 
                      <span className="hidden xs:inline">Request via Bot</span>
                      <span className="inline xs:hidden">Request</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* About Us Section - Mobile Optimized */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-module flex flex-col md:flex-row items-center md:items-start justify-between overflow-hidden relative gap-6"
            style={{ 
              marginTop: 'clamp(3rem, 6vw, 4rem)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              borderRadius: 'clamp(1.5rem, 4vw, 2rem)'
            }}
        >
            <div className="absolute top-0 right-0 bg-[#4a6fa5] rounded-full blur-[120px] opacity-20 pointer-events-none" 
                 style={{ width: 'min(18rem, 45vw)', height: 'min(18rem, 45vw)' }} />
            
            <div className="relative z-10 text-center md:text-left" style={{ maxWidth: 'min(32rem, 90vw)' }}>
               <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#4a6fa5] to-[#6b9bd1] mb-4 mx-auto md:mx-0 shadow-[0_0_30px_rgba(107,155,209,0.4)]">
                 <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               
               <h3 className="font-semibold tracking-tighter mb-3" 
                   style={{ 
                     fontSize: 'clamp(1.25rem, 3.5vw, 1.875rem)'
                   }}>
                 About Us
               </h3>
               
               <p className="text-slate-400 mb-4" 
                  style={{ 
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    lineHeight: '1.6'
                  }}>
                 Enzo Digital is your trusted partner for premium digital subscriptions and services. We provide instant access to top-tier streaming platforms, productivity tools, and gaming services at competitive prices.
               </p>
               
               <p className="text-slate-400" 
                  style={{ 
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    lineHeight: '1.6'
                  }}>
                 Our mission is to make premium digital services accessible to everyone through secure, fast, and reliable delivery. With 24/7 customer support and a commitment to excellence, we ensure your digital lifestyle is always enhanced.
               </p>
            </div>

            <a href="https://t.me/enzostoreowner" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="relative z-10 pulse-glow glass-pill bg-[#050810]/50 text-white font-medium flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#4a6fa5] hover:border-[#6b9bd1]/50 hover:shadow-[0_0_30px_rgba(107,155,209,0.6)] transition-all border-[#4a6fa5]/25 w-full md:w-auto touch-manipulation active:scale-95"
               style={{ 
                 padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                 minHeight: '48px'
               }}
               aria-label="Contact Support via Telegram"
            >
               <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
               </svg>
               <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Contact Support</span>
            </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4a6fa5]/15 text-center relative z-20 overflow-hidden font-mono text-slate-500 uppercase tracking-widest bg-[#050810]" 
              style={{ 
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)'
              }}>
         &copy; {new Date().getFullYear()} Enzo Systems. Sector 04 / Nexus. All Rights Reserved.
      </footer>
    </div>
  );
}
