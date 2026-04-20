import React from 'react';
import IntroAnimation from '../components/ui/scroll-morph-hero';

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-[#050810] bg-grid font-sans relative flex flex-col overflow-x-hidden">
      {/* Background Glows - Match website style */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-[-10%] right-[-5%] bg-[#1a2942] rounded-full blur-[180px]" 
             style={{ width: 'min(900px, 160vw)', height: 'min(900px, 160vw)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] bg-[#2d4a7c] rounded-full blur-[180px]" 
             style={{ width: 'min(1000px, 180vw)', height: 'min(1000px, 180vw)' }} />
        <div className="absolute top-[30%] left-[40%] bg-[#0d1420] rounded-full blur-[180px]" 
             style={{ width: 'min(700px, 140vw)', height: 'min(700px, 140vw)' }} />
        <div className="absolute top-[50%] right-[20%] bg-[#4a6fa5] rounded-full blur-[200px] opacity-40" 
             style={{ width: 'min(600px, 120vw)', height: 'min(600px, 120vw)' }} />
      </div>
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-subtle backdrop-blur-[25px] p-4">
        <div className="flex justify-between items-center max-w-[90rem] mx-auto">
          <h1 className="text-white font-bold text-xl">Scroll Morph Hero Demo</h1>
          <a 
            href="/" 
            className="glass-pill flex items-center gap-2 group hover:bg-white/10 transition-all px-4 py-2 text-sm text-white"
          >
            ← Back to Main
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen z-20">
        <div className="w-full h-screen">
          <IntroAnimation />
        </div>
      </section>

      {/* Instructions */}
      <section className="relative z-30 w-full bg-[#050810] p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">How to Use</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="glass-module p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">1. Scroll Animation</h3>
              <p className="text-slate-400">
                Use your mouse wheel or touch gestures to scroll through the morphing animation phases.
              </p>
            </div>
            <div className="glass-module p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">2. Interactive Cards</h3>
              <p className="text-slate-400">
                Hover over the image cards to see the 3D flip effect revealing additional details.
              </p>
            </div>
            <div className="glass-module p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">3. Mouse Parallax</h3>
              <p className="text-slate-400">
                Move your mouse around to see the subtle parallax effect on the image arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}