import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export const CTAHero = () => {
  return (
    <div className="w-full min-h-screen bg-[#050810] bg-grid flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
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

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Elite Access Portal Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-pill bg-[#4a6fa5]/20 text-[#6b9bd1] px-6 py-2 mb-8 border border-[#6b9bd1]/30"
        >
          <div className="w-2 h-2 bg-[#6b9bd1] rounded-full animate-pulse" />
          <span className="font-mono text-sm uppercase tracking-widest">Elite Access Portal</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #6b9bd1 50%, #ffffff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Premium Subscriptions.
          <br />
          <span className="text-[#6b9bd1] drop-shadow-[0_0_30px_rgba(107,155,209,0.6)]">
            Zero Hassle.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Skip the queues, bypass the wait times. Get instant access to Netflix, Spotify, PlayStation Plus, 
          Xbox Game Pass, Adobe Creative Cloud and more — all at prices that make sense.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: "⚡", title: "Instant Activation", desc: "Live in seconds, not hours" },
            { icon: "🔒", title: "Premium Accounts", desc: "Full features, zero restrictions" },
            { icon: "🛡️", title: "Lifetime Support", desc: "We've got your back, always" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              className="glass-module p-6 rounded-2xl glass-hover group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(107,155,209,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full glass-pill bg-[#4a6fa5] hover:bg-[#6b9bd1] text-white font-bold px-8 py-4 text-lg transition-all duration-300 shadow-[0_0_30px_rgba(74,111,165,0.6)] border border-[#6b9bd1]/30 hover:border-[#6b9bd1]/60 group"
          >
            <span className="flex items-center justify-center gap-3">
              Browse Elite Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.a
            href="https://t.me/Ezonstorebot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full glass-pill bg-transparent hover:bg-[#2d4a7c]/20 text-[#6b9bd1] font-medium px-6 py-4 border border-[#6b9bd1]/30 hover:border-[#6b9bd1]/60 transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              Direct Bot Access
            </span>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-[#4a6fa5]/20"
        >
          {[
            { number: "24/7", label: "Instant Delivery" },
            { number: "100%", label: "Success Rate" },
            { number: "50K+", label: "Happy Users" },
            { number: "∞", label: "Lifetime Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#6b9bd1] mb-2 drop-shadow-[0_0_15px_rgba(107,155,209,0.6)]">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};