/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Bot,
  Check
} from 'lucide-react';
import { WaitlistHero } from './components/ui/waitlist-hero';

// Import all images
import logoImage from './assets/logo.png';
import netflixImg from './assets/netfllx.jpg';
import spotifyImg from './assets/Spotify.jpg';
import youtubeImg from './assets/Youtube.jpg';
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
    image: youtubeImg,
    imageSrcSet: youtubeImg,
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

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(CATALOG_ITEMS.map((item) => item.category))];
  const filteredItems = activeCategory === 'All' ? CATALOG_ITEMS : CATALOG_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-grid font-sans relative flex flex-col overflow-x-hidden">
      {/* Background glows removed - using body background for consistency */}

      {/* Sticky Header - Transparent with Grid */}
      <header className="sticky top-0 left-0 right-0 z-[100] bg-grid" 
              style={{ 
                background: 'transparent'
              }}>
        <nav className="flex justify-between items-center max-w-[90rem] mx-auto" 
             style={{ 
               padding: 'clamp(0.75rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
               paddingTop: 'max(0.75rem, env(safe-area-inset-top))'
             }}>
          {/* Logo Section */}
          <div className="logo-container group cursor-pointer">
            <img 
              src={logoImage} 
              alt="Ezon" 
              className="w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ height: 'clamp(4.5rem, 10vw, 6rem)' }}
            />
          </div>
          
          {/* Access Platform Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="https://t.me/Ezonstorebot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full flex items-center justify-center gap-1 sm:gap-2 group transition-all touch-manipulation backdrop-blur-[20px] border" 
              style={{ 
                padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(0.875rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(0.6875rem, 1.6vw, 0.875rem)',
                minHeight: '44px',
                minWidth: '44px',
                background: 'linear-gradient(135deg, rgba(58,58,60,0.9) 0%, rgba(29,29,31,0.8) 50%, rgba(58,58,60,0.85) 100%)',
                color: '#FFFFFF',
                borderColor: 'rgba(161,161,166,0.4)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 2px 8px rgba(29,29,31,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(29,29,31,0.95) 0%, rgba(58,58,60,0.9) 50%, rgba(29,29,31,0.92) 100%)';
                e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,255,255,0.3), 0 4px 16px rgba(29,29,31,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(58,58,60,0.9) 0%, rgba(29,29,31,0.8) 50%, rgba(58,58,60,0.85) 100%)';
                e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,255,255,0.2), 0 2px 8px rgba(29,29,31,0.15)';
              }}
              aria-label="Access Platform via Bot"
            >
              <span className="hidden xs:inline">Access Platform</span>
              <span className="inline xs:hidden">Access</span>
              <ArrowRight className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" 
                          style={{ 
                            width: 'clamp(0.875rem, 2vw, 1rem)', 
                            height: 'clamp(0.875rem, 2vw, 1rem)',
                            color: '#FFFFFF'
                          }} />
            </a>
          </div>
        </nav>
      </header>

      {/* RESPONSIVE HERO - Optimized for all devices with Grid Background */}
      <section className="relative w-full h-screen z-20 overflow-hidden bg-grid" style={{ minHeight: '100svh' }}>
        <WaitlistHero />
      </section>

      {/* THE DASHBOARD with Grid Background */}
      <section 
        id="service-catalog"
        className="relative z-30 w-full bg-grid" 
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
                  marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                  color: '#000000' // Pure black for maximum contrast
                }}>
              Service Catalog
            </h2>
            <p className="font-mono" 
               style={{ 
                 maxWidth: 'min(28rem, 90vw)',
                 fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                 lineHeight: '1.6',
                 color: '#000000' // Pure black for better readability
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
                activeCategory === cat ? 'font-bold shadow-[0_0_20px_rgba(58,58,60,0.3)]' : 'border-transparent'
              }`}
              style={{
                backgroundColor: activeCategory === cat ? '#3A3A3C' : 'rgba(245,245,247,0.9)',
                borderColor: activeCategory === cat ? '#1D1D1F' : 'rgba(161,161,166,0.4)',
                color: activeCategory === cat ? '#FFFFFF' : '#000000', // Black text for inactive, white for active
                padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.25rem)',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                minHeight: '44px',
                fontWeight: activeCategory === cat ? 'bold' : '600' // Ensure readability
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
                   className="w-full h-full object-cover opacity-90 transition-opacity duration-500 md:group-hover:scale-105"
                   style={{ 
                     transition: 'opacity 0.5s ease, transform 0.5s ease',
                     willChange: 'auto'
                   }}
                 />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" 
                      style={{ borderRadius: 'clamp(0.875rem, 2.5vw, 1.25rem)' }} />
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
                     <h3 className="font-medium tracking-tight line-clamp-1" 
                         style={{ 
                           fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                           color: '#000000' // Pure black for card titles
                         }}>
                       {item.name}
                     </h3>
                  </div>
                  <p className="font-mono" 
                     style={{ 
                       fontSize: 'clamp(0.625rem, 1.5vw, 0.6875rem)',
                       lineHeight: '1.6',
                       color: '#000000' // Pure black for descriptions
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
                    <p className="font-mono uppercase tracking-widest" 
                       style={{ 
                         fontSize: 'clamp(0.5625rem, 1.2vw, 0.625rem)',
                         marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                         color: '#3A3A3C' // Space Gray for labels - still readable but hierarchical
                       }}>
                      Included
                    </p>
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start" style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
                        <Check className="text-[#3A3A3C] shrink-0 drop-shadow-[0_0_8px_rgba(58,58,60,0.6)]" 
                               style={{ 
                                 width: 'clamp(0.875rem, 2vw, 1rem)',
                                 height: 'clamp(0.875rem, 2vw, 1rem)',
                                 marginTop: '0.125rem'
                               }} />
                        <span className="font-mono" 
                              style={{ 
                                fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                                lineHeight: '1.4',
                                color: '#000000' // Pure black for feature text
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
                      className="w-full relative z-10 glass-pill font-mono font-bold flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-center touch-manipulation active:scale-95"
                      style={{ 
                        padding: 'clamp(0.875rem, 2vw, 1rem)',
                        fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                        minHeight: '48px',
                        backgroundColor: '#F5F5F7', // Platinum light background for contrast with black text
                        color: '#000000', // Pure black text as requested
                        boxShadow: '0 0 20px rgba(245,245,247,0.4), inset 0 1px 2px rgba(255,255,255,0.8)',
                        borderColor: '#A1A1A6',
                        border: '2px solid #A1A1A6'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E2E2E2';
                        e.currentTarget.style.color = '#000000';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(226,226,226,0.6), inset 0 1px 2px rgba(255,255,255,0.9)';
                        e.currentTarget.style.borderColor = '#3A3A3C';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F5F5F7';
                        e.currentTarget.style.color = '#000000';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(245,245,247,0.4), inset 0 1px 2px rgba(255,255,255,0.8)';
                        e.currentTarget.style.borderColor = '#A1A1A6';
                      }}
                      aria-label={`Request ${item.name} via Bot`}
                    >
                      <Bot className="shrink-0" style={{ width: 'clamp(1rem, 2vw, 1.125rem)', height: 'clamp(1rem, 2vw, 1.125rem)', color: '#000000' }} /> 
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
            <div className="absolute top-0 right-0 bg-[#A1A1A6] rounded-full blur-[120px] opacity-20 pointer-events-none" 
                 style={{ width: 'min(18rem, 45vw)', height: 'min(18rem, 45vw)' }} />
            
            <div className="relative z-10 text-center md:text-left" style={{ maxWidth: 'min(32rem, 90vw)' }}>
               <div className="inline-flex items-center justify-center mb-4 mx-auto md:mx-0">
                 <img 
                   src={logoImage} 
                   alt="Ezon Logo" 
                   className="w-auto object-contain drop-shadow-[0_0_20px_rgba(58,58,60,0.4)]"
                   style={{ height: 'clamp(5rem, 10vw, 7rem)' }}
                 />
               </div>
               
               <h3 className="font-semibold tracking-tighter mb-3" 
                   style={{ 
                     fontSize: 'clamp(1.25rem, 3.5vw, 1.875rem)',
                     color: '#000000'
                   }}>
                 About Us
               </h3>
               
               <p className="mb-4" 
                  style={{ 
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    lineHeight: '1.6',
                    color: '#000000' // Pure black for better readability
                  }}>
                 Ezon is your trusted partner for premium digital subscriptions and services. We provide instant access to top-tier streaming platforms, productivity tools, and gaming services at competitive prices.
               </p>
               
               <p style={{ 
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    lineHeight: '1.6',
                    color: '#000000'
                  }}>
                 Our mission is to make premium digital services accessible to everyone through secure, fast, and reliable delivery. With 24/7 customer support and a commitment to excellence, we ensure your digital lifestyle is always enhanced.
               </p>
            </div>

            <a href="https://t.me/enzostoreowner" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="relative z-10 pulse-glow glass-pill font-medium flex items-center justify-center gap-2 sm:gap-3 transition-all w-full md:w-auto touch-manipulation active:scale-95"
               style={{ 
                 padding: 'clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                 minHeight: '48px',
                 backgroundColor: '#A1A1A6',
                 color: '#000000',
                 borderColor: 'rgba(226,226,226,0.6)',
                 boxShadow: '0 0 20px rgba(161,161,166,0.3)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.backgroundColor = '#3A3A3C';
                 e.currentTarget.style.color = '#FFFFFF';
                 e.currentTarget.style.borderColor = 'rgba(245,245,247,0.8)';
                 e.currentTarget.style.boxShadow = '0 0 30px rgba(58,58,60,0.5)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = '#A1A1A6';
                 e.currentTarget.style.color = '#000000';
                 e.currentTarget.style.borderColor = 'rgba(226,226,226,0.6)';
                 e.currentTarget.style.boxShadow = '0 0 20px rgba(161,161,166,0.3)';
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
      <footer className="text-center relative z-20 overflow-hidden font-mono uppercase tracking-widest bg-grid" 
              style={{ 
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                borderTop: '1px solid rgba(161,161,166,0.3)',
                backgroundColor: 'transparent',
                color: '#3A3A3C'
              }}>
         &copy; {new Date().getFullYear()} Ezon. Sector 04 / Nexus. All Rights Reserved.
      </footer>
    </div>
  );
}
