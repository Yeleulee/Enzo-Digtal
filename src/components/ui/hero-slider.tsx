import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WaitlistHero } from './waitlist-hero';
import { CTAHero } from './cta-hero';

export const HeroSlider = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const heroes = [
    {
      id: 'waitlist',
      name: 'Interactive',
      component: <WaitlistHero />
    },
    {
      id: 'cta',
      name: 'Mobile-Friendly',
      component: <CTAHero />
    }
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroes.length);
  };

  const prevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  // Handle swipe gestures
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      prevHero();
    } else if (info.offset.x < -swipeThreshold) {
      nextHero();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {heroes[currentHero].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Hidden on mobile for cleaner swipe experience */}
      {!isMobile && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-50">
            <button
              onClick={prevHero}
              className="glass-pill bg-[#4a6fa5]/30 hover:bg-[#4a6fa5] text-white p-3 transition-all duration-300 group"
              aria-label="Previous hero"
            >
              <ChevronLeft className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(107,155,209,0.8)]" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-50">
            <button
              onClick={nextHero}
              className="glass-pill bg-[#4a6fa5]/30 hover:bg-[#4a6fa5] text-white p-3 transition-all duration-300 group"
              aria-label="Next hero"
            >
              <ChevronRight className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(107,155,209,0.8)]" />
            </button>
          </div>
        </>
      )}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {heroes.map((hero, index) => (
          <button
            key={hero.id}
            onClick={() => setCurrentHero(index)}
            className={`transition-all duration-300 ${
              index === currentHero
                ? 'w-12 h-3 bg-[#6b9bd1] shadow-[0_0_15px_rgba(107,155,209,0.8)]'
                : 'w-3 h-3 bg-[#4a6fa5]/40 hover:bg-[#4a6fa5]/60'
            } rounded-full`}
            aria-label={`Switch to ${hero.name} hero`}
          />
        ))}
      </div>

      {/* Hero Labels */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="glass-pill bg-[#050810]/60 text-[#6b9bd1] px-4 py-2 border border-[#6b9bd1]/30 backdrop-blur-md"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            {heroes[currentHero].name}
          </span>
        </motion.div>
      </div>

      {/* Swipe Hint for Mobile */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2"
          >
            <span>←</span>
            <span>Swipe</span>
            <span>→</span>
          </motion.div>
        </div>
      )}

      {/* Auto-advance timer (optional) */}
      <div className="absolute top-4 right-4 z-50 hidden md:block">
        <div className="glass-pill bg-[#050810]/40 text-[#6b9bd1] px-3 py-1 text-xs font-mono">
          {currentHero + 1} / {heroes.length}
        </div>
      </div>
    </div>
  );
};