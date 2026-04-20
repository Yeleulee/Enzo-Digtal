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

const CATALOG_ITEMS = [
  // Entertainment - Streaming
  { 
    id: 'ENT_01', 
    name: 'Netflix Premium', 
    category: 'Entertainment', 
    desc: '4K Ultra HD streaming access.', 
    features: ['1 Month', '3 Months', '6 Months'], 
    image: '/src/assets/netfllx.jpg',
    imageSrcSet: '/src/assets/netfllx.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'ENT_02', 
    name: 'Spotify Premium', 
    category: 'Entertainment', 
    desc: 'Ad-free high-fidelity audio.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: '/src/assets/Spotify.jpg',
    imageSrcSet: '/src/assets/Spotify.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'ENT_03', 
    name: 'YouTube Premium', 
    category: 'Entertainment', 
    desc: 'Ad-free videos & background play.', 
    features: ['1 Year', 'Music Included', 'Offline Downloads'], 
    image: '/src/assets/Prime.jpg',
    imageSrcSet: '/src/assets/Prime.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  
  // Social & Communication
  { 
    id: 'SOC_01', 
    name: 'Telegram Premium', 
    category: 'Social', 
    desc: 'Enhanced messaging features.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: '/src/assets/Telegram.png',
    imageSrcSet: '/src/assets/Telegram.png',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'SOC_02', 
    name: 'Snapchat Premium', 
    category: 'Social', 
    desc: 'Advanced filters & features.', 
    features: ['3 Months', '6 Months', '1 Year'], 
    image: '/src/assets/Snapchat.jpg',
    imageSrcSet: '/src/assets/Snapchat.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  
  // Gaming
  { 
    id: 'GAM_01', 
    name: 'PlayStation Gift Cards', 
    category: 'Gaming', 
    desc: 'Digital wallet top-up for PlayStation.', 
    features: ['$25 Cards', '$50 Cards', '$100 Cards'], 
    image: '/src/assets/playstation.jpg', // Perfect match!
    imageSrcSet: '/src/assets/playstation.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'GAM_02', 
    name: 'Call of Duty', 
    category: 'Gaming', 
    desc: 'Premium gaming experience.', 
    features: ['Battle Pass', 'Premium Content', 'Exclusive Access'], 
    image: '/src/assets/call of duty.jpg', // Perfect match!
    imageSrcSet: '/src/assets/call of duty.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'GAM_03', 
    name: 'PUBG Mobile', 
    category: 'Gaming', 
    desc: 'Mobile gaming premium features.', 
    features: ['UC Credits', 'Battle Pass', 'Exclusive Skins'], 
    image: '/src/assets/pubg.jpg', // Perfect match!
    imageSrcSet: '/src/assets/pubg.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  
  // Gift Cards
  { 
    id: 'GIF_01', 
    name: 'Apple Gift Cards', 
    category: 'Gift Cards', 
    desc: 'App Store & iTunes credit.', 
    features: ['$10 - $200', 'Instant Delivery', 'Global Valid'], 
    image: '/src/assets/appel.jpg', // Perfect match!
    imageSrcSet: '/src/assets/appel.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'GIF_02', 
    name: 'Google Play Gift Cards', 
    category: 'Gift Cards', 
    desc: 'Play Store & Google services credit.', 
    features: ['$10 - $200', 'Instant Delivery', 'Multiple Regions'], 
    image: '/src/assets/googel play gift cards.jpg', // Perfect match!
    imageSrcSet: '/src/assets/googel play gift cards.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  
  // Productivity & AI
  { 
    id: 'PRO_01', 
    name: 'ChatGPT Plus', 
    category: 'Productivity', 
    desc: 'Advanced AI assistant access.', 
    features: ['1 Month', '3 Months', 'Priority Access'], 
    image: '/src/assets/Chatgpt.jpg',
    imageSrcSet: '/src/assets/Chatgpt.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'PRO_02', 
    name: 'Google Gemini Pro', 
    category: 'Productivity', 
    desc: 'Advanced AI by Google.', 
    features: ['Monthly Plans', 'Advanced AI', 'Google Integration'], 
    image: '/src/assets/Gemini.jpg',
    imageSrcSet: '/src/assets/Gemini.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'PRO_03', 
    name: 'Grok AI (X Premium)', 
    category: 'Productivity', 
    desc: 'AI assistant by X (Twitter).', 
    features: ['Monthly Access', 'Real-time Data', 'X Integration'], 
    image: '/src/assets/Grock.jpg',
    imageSrcSet: '/src/assets/Grock.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'PRO_04', 
    name: 'Grammarly Premium', 
    category: 'Productivity', 
    desc: 'Advanced writing assistant.', 
    features: ['Monthly Plans', 'Grammar Check', 'Writing Enhancement'], 
    image: '/src/assets/gramarilly.jpg',
    imageSrcSet: '/src/assets/gramarilly.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'PRO_05', 
    name: 'TradingView Pro', 
    category: 'Productivity', 
    desc: 'Advanced trading charts & analysis.', 
    features: ['Pro Features', 'Advanced Charts', 'Real-time Data'], 
    image: '/src/assets/TradingView%20Pro.jpg',
    imageSrcSet: '/src/assets/TradingView%20Pro.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
  },
  { 
    id: 'PRO_06', 
    name: 'NordVPN Premium', 
    category: 'Productivity', 
    desc: 'Secure VPN connection worldwide.', 
    features: ['Global Servers', 'No Logs Policy', 'Fast Connection'], 
    image: '/src/assets/nord%20vpn.jpg',
    imageSrcSet: '/src/assets/nord%20vpn.jpg',
    botLink: 'https://t.me/enzo_agency_bot' 
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
      className="absolute top-3 right-3 p-2.5 bg-[#050810]/70 hover:bg-[#4a6fa5] text-white rounded-full backdrop-blur-md transition-all border border-[#4a6fa5]/15 hover:border-[#6b9bd1]/50 z-20 shadow-lg hover:shadow-[0_0_15px_rgba(107,155,209,0.6)] group/btn"
      title="Share"
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

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-subtle backdrop-blur-[25px]" 
           style={{ 
             padding: 'clamp(1rem, 3vw, 1.5rem)',
             paddingTop: 'max(1rem, env(safe-area-inset-top))'
           }}>
        <div className="flex justify-between items-center max-w-[90rem] mx-auto">
          <div className="logo-container group cursor-pointer">
            <img 
              src="/src/assets/logo.png" 
              alt="Enzo OS" 
              className="w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ height: 'clamp(3rem, 6vw, 4rem)' }}
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="glass-pill flex items-center gap-2 group hover:bg-white/10 transition-all" 
                    style={{ 
                      padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                      fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)'
                    }}>
              Access Platform
              <ArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                          style={{ width: 'clamp(0.875rem, 2vw, 1rem)', height: 'clamp(0.875rem, 2vw, 1rem)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* RESPONSIVE HERO - Interactive on desktop, Simple CTA on mobile */}
      <section className="relative w-full h-screen z-20 overflow-hidden">
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

        {/* Category Filters */}
        <div className="flex flex-wrap overflow-x-auto pb-4 scrollbar-hide" 
             style={{ 
               gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
               marginBottom: 'clamp(2rem, 4vw, 2.5rem)'
             }}>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`glass-pill font-mono uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat ? 'bg-[#4a6fa5] text-white font-bold border-[#6b9bd1]/50 shadow-[0_0_20px_rgba(107,155,209,0.6)]' : 'border-transparent text-slate-400 hover:text-white hover:bg-[#2d4a7c]/20'
              }`}
              style={{ 
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.25rem)',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid - INTRINSIC LAYOUT */}
        <div className="grid gap-6 md:gap-8" 
             style={{ 
               /* FLUID GRID: Auto-fit columns with minimum 280px, maximum 1fr */
               gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))'
             }}>
          {filteredItems.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px"}}
              transition={{ delay: i * 0.05, ease: 'easeOut' }}
              className="glass-module flex flex-col group hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden glass-hover"
              style={{ 
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                borderRadius: 'clamp(1rem, 3vw, 1.5rem)'
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
                   // CLS FIX: Explicit dimensions
                   width="600"
                   height="400"
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-transform transition-opacity duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 will-change-transform"
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
                      className="w-full relative z-10 glass-pill bg-[#4a6fa5] text-white font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#6b9bd1] hover:text-white transition-all uppercase tracking-widest text-center shadow-[0_0_20px_rgba(74,111,165,0.5)] hover:shadow-[0_0_30px_rgba(107,155,209,0.7)] hover:border-[#6b9bd1]/60"
                      style={{ 
                        padding: 'clamp(0.75rem, 2vw, 0.875rem)',
                        fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)'
                      }}
                    >
                      <Bot className="shrink-0" style={{ width: 'clamp(0.875rem, 2vw, 1rem)', height: 'clamp(0.875rem, 2vw, 1rem)' }} /> 
                      Request via Bot
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-module flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
            style={{ 
              marginTop: 'clamp(3rem, 6vw, 4rem)',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderRadius: 'clamp(1.5rem, 4vw, 2rem)'
            }}
        >
            <div className="absolute top-0 right-0 bg-[#4a6fa5] rounded-full blur-[120px] opacity-20 pointer-events-none" 
                 style={{ width: 'min(18rem, 45vw)', height: 'min(18rem, 45vw)' }} />
            
            <div className="relative z-10 mb-8 md:mb-0" style={{ maxWidth: 'min(32rem, 90vw)' }}>
               <Bot className="text-[#6b9bd1] drop-shadow-[0_0_15px_rgba(107,155,209,0.6)]" 
                    style={{ 
                      width: 'clamp(2rem, 4vw, 2.5rem)',
                      height: 'clamp(2rem, 4vw, 2.5rem)',
                      marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
                    }} />
               <h3 className="font-semibold tracking-tighter" 
                   style={{ 
                     fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
                     marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                   }}>
                 Automated Telegram Bot
               </h3>
               <p className="text-slate-400" 
                  style={{ 
                    fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)',
                    lineHeight: '1.6'
                  }}>
                 Select your tier and seamlessly continue the transaction through our encrypted bot interface. Instant onboarding, zero friction.
               </p>
            </div>

            <a href="https://t.me/enzo_agency_bot" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="relative z-10 pulse-glow glass-pill bg-[#050810]/50 text-white font-medium flex items-center gap-3 hover:bg-[#4a6fa5] hover:border-[#6b9bd1]/50 hover:shadow-[0_0_30px_rgba(107,155,209,0.6)] transition-all border-[#4a6fa5]/25"
               style={{ 
                 padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)'
               }}>
               <Terminal className="opacity-70" 
                         style={{ 
                           width: 'clamp(1rem, 2.5vw, 1.25rem)',
                           height: 'clamp(1rem, 2.5vw, 1.25rem)'
                         }} />
               <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Launch Protocol</span>
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
