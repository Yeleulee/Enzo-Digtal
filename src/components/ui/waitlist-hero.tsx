"use client"

export const WaitlistHero = () => {
  return (
    <div className="w-full h-full bg-grid flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Glassy Liquid Glass Background Layer */}
      <div className="absolute inset-0 overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(245,245,247,0.4) 0%, rgba(226,226,226,0.3) 50%, rgba(161,161,166,0.2) 100%)' }}>
        {/* Animated Glass Orbs */}
        <div className="absolute top-[20%] left-[15%] w-96 h-96 rounded-full blur-[120px] animate-pulse" 
             style={{ 
               background: 'radial-gradient(circle, rgba(245,245,247,0.6) 0%, rgba(226,226,226,0.4) 50%, transparent 100%)',
               animation: 'float 20s ease-in-out infinite'
             }} />
        <div className="absolute bottom-[15%] right-[20%] w-80 h-80 rounded-full blur-[100px]" 
             style={{ 
               background: 'radial-gradient(circle, rgba(226,226,226,0.5) 0%, rgba(161,161,166,0.3) 50%, transparent 100%)',
               animation: 'float 25s ease-in-out infinite reverse'
             }} />
        <div className="absolute top-[50%] right-[10%] w-64 h-64 rounded-full blur-[80px]" 
             style={{ 
               background: 'radial-gradient(circle, rgba(245,245,247,0.4) 0%, rgba(226,226,226,0.2) 50%, transparent 100%)',
               animation: 'float 18s ease-in-out infinite'
             }} />
        
        {/* Liquid Glass Overlay with Shimmer */}
        <div className="absolute inset-0 backdrop-blur-[2px]" 
             style={{ 
               background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(245,245,247,0.15) 100%)',
               backgroundSize: '200% 200%',
               animation: 'shimmer 15s ease-in-out infinite'
             }} />
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* MOBILE: Professional, Clean Design - Space Gray Theme */}
      <div className="block md:hidden w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #E5E5E7 0%, #86868B 100%)' }}>
        {/* Subtle Background Gradient - Professional Look */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Elegant gradient overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(226,226,226,0.3) 0%, transparent 50%, rgba(161,161,166,0.3) 100%)' }} />
          <div className="absolute top-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to bottom, rgba(245,245,247,0.6) 0%, transparent 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: 'linear-gradient(to top, #86868B 0%, rgba(134,134,139,0.9) 50%, transparent 100%)' }} />
          
          {/* Subtle accent glows - not distracting */}
          <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full blur-[100px]" style={{ background: 'rgba(161,161,166,0.15)' }} />
          <div className="absolute bottom-[30%] left-[10%] w-48 h-48 rounded-full blur-[80px]" style={{ background: 'rgba(226,226,226,0.12)' }} />
        </div>
        
        {/* Main Content - Centered Professional Layout */}
        <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
          {/* Logo/Brand Section */}
          <div className="space-y-4">
            {/* Headline with Glassmorphism Background */}
            <div className="glass-subtle rounded-2xl p-6 backdrop-blur-[25px]" style={{ borderColor: 'rgba(161,161,166,0.4)' }}>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                <span className="block mb-2" style={{ color: '#000000' }}>Welcome to</span>
                <span 
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #3A3A3C 0%, #1D1D1F 50%, #3A3A3C 100%)',
                    backgroundSize: '200% auto',
                  }}
                >
                  Ezon
                </span>
              </h1>
            </div>
          </div>
          
          {/* Description with Glassmorphism */}
          <div className="glass-subtle rounded-xl p-4 backdrop-blur-[20px]" style={{ borderColor: 'rgba(161,161,166,0.4)' }}>
            <p className="text-sm xs:text-base sm:text-lg font-normal leading-relaxed max-w-sm" style={{ color: '#000000' }}>
              Premium subscriptions and digital services delivered instantly through our secure platform.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col w-full gap-3 pt-4">
            <a 
              href="#service-catalog"
              className="w-full rounded-full font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation backdrop-blur-[25px] border"
              style={{ 
                padding: '1rem 1.5rem',
                minHeight: '52px',
                fontSize: '0.9375rem',
                background: 'linear-gradient(135deg, rgba(245,245,247,0.95) 0%, rgba(226,226,226,0.9) 50%, rgba(245,245,247,0.92) 100%)',
                color: '#000000', // Pure black for maximum contrast
                borderColor: 'rgba(161,161,166,0.5)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -1px 2px rgba(161,161,166,0.4), 0 4px 16px rgba(29,29,31,0.12)'
              }}
            >
              Browse Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            <a 
              href="https://t.me/Ezonstorebot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full font-medium flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation backdrop-blur-[20px] border"
              style={{ 
                padding: '1rem 1.5rem',
                minHeight: '52px',
                fontSize: '0.9375rem',
                background: 'linear-gradient(135deg, rgba(226,226,226,0.8) 0%, rgba(245,245,247,0.7) 50%, rgba(226,226,226,0.75) 100%)',
                color: '#1D1D1F',
                borderColor: 'rgba(161,161,166,0.4)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(161,161,166,0.3), 0 4px 16px rgba(29,29,31,0.08)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Contact via Telegram
            </a>
          </div>
          
          {/* Trust Indicators with Glassmorphism */}
          <div className="glass-subtle rounded-lg p-3 backdrop-blur-[15px]" style={{ borderColor: 'rgba(161,161,166,0.3)' }}>
            <div className="flex items-center justify-center gap-6 text-xs" style={{ color: '#A1A1A6' }}>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Instant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'rgba(161,161,166,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1A1A6' }} />
          </div>
        </div>
      </div>

      {/* DESKTOP & TABLET: Full interactive experience with Space Gray Theme and Glassy Liquid Background */}
      <div className="hidden md:block w-full h-full overflow-hidden bg-grid relative" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', minHeight: '100svh' }}>
        {/* Glassy Liquid Glass Background Layer */}
        <div className="absolute inset-0 overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(245,245,247,0.4) 0%, rgba(226,226,226,0.3) 50%, rgba(161,161,166,0.2) 100%)' }}>
          {/* Animated Glass Orbs - Larger for Desktop */}
          <div className="absolute top-[15%] left-[10%] rounded-full blur-[150px]" 
               style={{ 
                 width: 'min(600px, 40vw)',
                 height: 'min(600px, 40vw)',
                 background: 'radial-gradient(circle, rgba(245,245,247,0.7) 0%, rgba(226,226,226,0.5) 50%, transparent 100%)',
                 animation: 'float 20s ease-in-out infinite'
               }} />
          <div className="absolute bottom-[10%] right-[15%] rounded-full blur-[130px]" 
               style={{ 
                 width: 'min(500px, 35vw)',
                 height: 'min(500px, 35vw)',
                 background: 'radial-gradient(circle, rgba(226,226,226,0.6) 0%, rgba(161,161,166,0.4) 50%, transparent 100%)',
                 animation: 'float 25s ease-in-out infinite reverse'
               }} />
          <div className="absolute top-[45%] right-[5%] rounded-full blur-[100px]" 
               style={{ 
                 width: 'min(400px, 30vw)',
                 height: 'min(400px, 30vw)',
                 background: 'radial-gradient(circle, rgba(245,245,247,0.5) 0%, rgba(226,226,226,0.3) 50%, transparent 100%)',
                 animation: 'float 18s ease-in-out infinite'
               }} />
          <div className="absolute top-[60%] left-[20%] rounded-full blur-[110px]" 
               style={{ 
                 width: 'min(450px, 32vw)',
                 height: 'min(450px, 32vw)',
                 background: 'radial-gradient(circle, rgba(226,226,226,0.4) 0%, rgba(161,161,166,0.25) 50%, transparent 100%)',
                 animation: 'float 22s ease-in-out infinite reverse'
               }} />
          
          {/* Liquid Glass Overlay with Shimmer */}
          <div className="absolute inset-0 backdrop-blur-[3px]" 
               style={{ 
                 background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(245,245,247,0.2) 100%)',
                 backgroundSize: '200% 200%',
                 animation: 'shimmer 15s ease-in-out infinite'
               }} />
        </div>
        {/* Animation Styles */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 60s linear infinite;
          }

          @keyframes spin-slow-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 60s linear infinite;
          }

          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          @keyframes fade-in-delay {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-delay {
            animation: fade-in-delay 1s ease-out 0.3s forwards;
            opacity: 0;
          }

          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 1.2s ease-out 0.2s forwards;
            opacity: 0;
          }

          @keyframes glow-pulse {
            0%, 100% { 
              filter: drop-shadow(0 0 20px rgba(58, 58, 60, 0.4));
            }
            50% { 
              filter: drop-shadow(0 0 30px rgba(58, 58, 60, 0.6)) drop-shadow(0 0 40px rgba(161, 161, 166, 0.3));
            }
          }
          .animate-glow {
            animation: glow-pulse 3s ease-in-out infinite;
          }
        `}</style>

        {/* Background Decorative Layer - CONTAINED within hero section */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Website-style background glows - Space Gray theme */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-15">
            <div className="absolute top-[-10%] right-[-5%] rounded-full blur-[180px]" 
                 style={{ 
                   width: 'min(900px, 160vw)', 
                   height: 'min(900px, 160vw)',
                   background: '#A1A1A6'
                 }} />
            <div className="absolute bottom-[-10%] left-[-10%] rounded-full blur-[180px]" 
                 style={{ 
                   width: 'min(1000px, 180vw)', 
                   height: 'min(1000px, 180vw)',
                   background: '#3A3A3C'
                 }} />
            <div className="absolute top-[30%] left-[40%] rounded-full blur-[180px]" 
                 style={{ 
                   width: 'min(700px, 140vw)', 
                   height: 'min(700px, 140vw)',
                   background: '#E2E2E2'
                 }} />
            <div className="absolute top-[50%] right-[20%] rounded-full blur-[200px] opacity-60" 
                 style={{ 
                   width: 'min(600px, 120vw)', 
                   height: 'min(600px, 120vw)',
                   background: '#A1A1A6'
                 }} />
          </div>

          {/* Spinning images - Enhanced visibility and pop */}
          <div className="absolute inset-0 opacity-80" style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(15deg)",
            transformOrigin: "center bottom",
          }}>
            {/* Image 3 (Back) - spins clockwise */}
            <div className="absolute inset-0 animate-spin-slow">
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "1200px",
                  height: "1200px",
                  transform: "translate(-50%, -50%) rotate(279.05deg)",
                  zIndex: 0,
                }}
              >
                <img
                  src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048"
                  alt=""
                  className="w-full h-full object-cover opacity-85"
                  style={{ 
                    filter: 'drop-shadow(0 0 25px rgba(58,58,60,0.4)) saturate(1.2) contrast(1.1)',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
            </div>

            {/* Image 2 (Middle) - spins counter-clockwise */}
            <div className="absolute inset-0 animate-spin-slow-reverse">
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "800px",
                  height: "800px",
                  transform: "translate(-50%, -50%) rotate(304.42deg)",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024"
                  alt=""
                  className="w-full h-full object-cover opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 0 20px rgba(58,58,60,0.5)) saturate(1.3) contrast(1.15)',
                    transform: 'scale(1.08)'
                  }}
                />
              </div>
            </div>

            {/* Image 1 (Front) - spins clockwise */}
            <div className="absolute inset-0 animate-spin-slow">
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "600px",
                  height: "600px",
                  transform: "translate(-50%, -50%) rotate(48.33deg)",
                  zIndex: 2,
                }}
              >
                <img
                  src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png"
                  alt="App Icon"
                  className="w-full h-full object-cover opacity-95"
                  style={{ 
                    filter: 'drop-shadow(0 0 30px rgba(58,58,60,0.6)) saturate(1.4) contrast(1.2) brightness(1.1)',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to top, #86868B 10%, rgba(134,134,139, 0.8) 40%, transparent 100%)`,
          }}
        />

        {/* Content Container - Bottom Left Positioning */}
        <div className="relative z-20 w-full h-full flex items-end justify-start p-6 md:p-8 pb-12 md:pb-16 safe-area-bottom">
          {/* Welcome Text - Bottom Left Position with ADEPT Typography Hierarchy and Glassmorphism */}
          <div className="text-left max-w-md lg:max-w-lg">
            <div className="glass-subtle rounded-xl md:rounded-2xl p-5 md:p-6 backdrop-blur-[25px] animate-fade-in" style={{ borderColor: 'rgba(161,161,166,0.4)' }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-3 md:mb-4 animate-slide-up">
                <span className="block" style={{ color: '#1D1D1F' }}>Welcome to</span>
                <span 
                  className="animate-glow block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #3A3A3C 0%, #1D1D1F 50%, #3A3A3C 100%)',
                  }}
                >
                  Ezon
                </span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-md animate-fade-in-delay" style={{ color: '#3A3A3C' }}>
                Enzo's advancements in premium subscriptions accelerate your digital lifestyle with proven results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}