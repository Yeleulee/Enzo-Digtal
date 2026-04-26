"use client"

const glassStyle = {
  background: 'transparent',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  borderColor: 'rgba(255, 255, 255, 0.55)',
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6), 0 4px 24px rgba(0,0,0,0.08)'
}

const glassStyleSubtle = {
  background: 'transparent',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  borderColor: 'rgba(255, 255, 255, 0.45)',
  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5), 0 4px 24px rgba(0,0,0,0.06)'
}

export const WaitlistHero = () => {
  return (
    <div className="w-full h-full bg-grid flex items-center justify-center relative overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* ─── SHARED ANIMATION STYLES ─── */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow { animation: spin-slow 55s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 55s linear infinite; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.8s ease-out 0.1s both; }
        .fade-up-2 { animation: fade-up 0.8s ease-out 0.25s both; }
        .fade-up-3 { animation: fade-up 0.8s ease-out 0.4s both; }
        .fade-up-4 { animation: fade-up 0.8s ease-out 0.55s both; }
      `}</style>

      {/* ══════════════════════════════════════
          MOBILE  (< md)
      ══════════════════════════════════════ */}
      <div className="block md:hidden w-full h-full relative overflow-hidden">

        {/* Spinning icons background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-95" style={{
          perspective: '1000px',
          transform: 'perspective(1000px) rotateX(12deg)',
          transformOrigin: 'center center',
        }}>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-1/2 left-1/2" style={{ width: '800px', height: '800px', transform: 'translate(-50%, -50%) rotate(48.33deg)' }}>
              <img src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png" alt="" loading="eager"
                className="w-full h-full object-cover"
                style={{ filter: 'drop-shadow(0 0 30px rgba(58,58,60,0.6)) saturate(1.4) contrast(1.2) brightness(1.1)', transform: 'scale(1.1)', willChange: 'transform' }} />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute top-1/2 left-1/2" style={{ width: '500px', height: '500px', transform: 'translate(-50%, -50%) rotate(120deg)' }}>
              <img src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024" alt="" loading="eager"
                className="w-full h-full object-cover opacity-85"
                style={{ filter: 'drop-shadow(0 0 25px rgba(58,58,60,0.5)) saturate(1.3) contrast(1.15)', transform: 'scale(1.08)', willChange: 'transform' }} />
            </div>
          </div>
        </div>

        {/* Content — vertically centered */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-5 gap-4">

          {/* Headline */}
          <div className="fade-up-1 w-full rounded-2xl p-6 border text-center" style={glassStyle}>
            <h1 className="font-bold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 9vw, 2.75rem)', color: '#1D1D1F' }}>
              All Premium Services.<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #3A3A3C 0%, #1D1D1F 50%, #3A3A3C 100%)' }}>
                One Place.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-up-2 w-full rounded-xl px-5 py-4 border text-center" style={glassStyleSubtle}>
            <p className="font-normal leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 3.5vw, 1rem)', color: '#3A3A3C' }}>
              Premium subscriptions and digital services delivered instantly through our secure platform.
            </p>
          </div>

          {/* CTAs */}
          <div className="fade-up-3 flex flex-col w-full gap-3 pt-1">
            <a href="#service-catalog"
              className="w-full rounded-full font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation border"
              style={{ padding: '0.9rem 1.5rem', minHeight: '52px', fontSize: '0.9375rem', color: '#1D1D1F', ...glassStyle }}>
              Browse Services
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="https://t.me/Ezonstorebot" target="_blank" rel="noopener noreferrer"
              className="w-full rounded-full font-medium flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation border"
              style={{ padding: '0.9rem 1.5rem', minHeight: '52px', fontSize: '0.9375rem', color: '#3A3A3C', ...glassStyleSubtle }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Contact via Telegram
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up-4 w-full rounded-xl px-4 py-3 border" style={glassStyleSubtle}>
            <div className="flex items-center justify-center gap-6 text-xs font-medium" style={{ color: '#3A3A3C' }}>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Instant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1A1A6' }} />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP / TABLET  (≥ md)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex w-full h-full relative overflow-hidden items-center justify-center" style={{ minHeight: '100svh' }}>

        {/* Spinning icons background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80" style={{
          perspective: '1200px',
          transform: 'perspective(1200px) rotateX(15deg)',
          transformOrigin: 'center bottom',
        }}>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-1/2 left-1/2" style={{ width: '1200px', height: '1200px', transform: 'translate(-50%, -50%) rotate(279.05deg)', zIndex: 0 }}>
              <img src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048" alt=""
                className="w-full h-full object-cover opacity-85"
                style={{ filter: 'drop-shadow(0 0 25px rgba(58,58,60,0.4)) saturate(1.2) contrast(1.1)', transform: 'scale(1.05)' }} />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute top-1/2 left-1/2" style={{ width: '800px', height: '800px', transform: 'translate(-50%, -50%) rotate(304.42deg)', zIndex: 1 }}>
              <img src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024" alt=""
                className="w-full h-full object-cover opacity-90"
                style={{ filter: 'drop-shadow(0 0 20px rgba(58,58,60,0.5)) saturate(1.3) contrast(1.15)', transform: 'scale(1.08)' }} />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-1/2 left-1/2" style={{ width: '600px', height: '600px', transform: 'translate(-50%, -50%) rotate(48.33deg)', zIndex: 2 }}>
              <img src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png" alt=""
                className="w-full h-full object-cover opacity-95"
                style={{ filter: 'drop-shadow(0 0 30px rgba(58,58,60,0.6)) saturate(1.4) contrast(1.2) brightness(1.1)', transform: 'scale(1.1)' }} />
            </div>
          </div>
        </div>

        {/* Content — centered on screen */}
        <div className="relative z-20 flex flex-col items-center text-center gap-6 px-8 max-w-2xl w-full">

          {/* Headline */}
          <div className="fade-up-1 w-full rounded-2xl px-8 py-8 border" style={glassStyle}>
            <h1 className="font-bold tracking-tight leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1D1D1F' }}>
              All Premium Services.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #3A3A3C 0%, #1D1D1F 50%, #3A3A3C 100%)' }}>
                One Place.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-up-2 w-full rounded-xl px-6 py-4 border" style={glassStyleSubtle}>
            <p className="font-normal leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: '#3A3A3C' }}>
              Premium subscriptions and digital services delivered instantly through our secure platform.
            </p>
          </div>

          {/* CTAs — side by side on desktop */}
          <div className="fade-up-3 flex flex-row gap-4 w-full justify-center">
            <a href="#service-catalog"
              className="rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 border"
              style={{ padding: '0.9rem 2rem', minHeight: '52px', fontSize: '1rem', color: '#1D1D1F', ...glassStyle }}>
              Browse Services
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="https://t.me/Ezonstorebot" target="_blank" rel="noopener noreferrer"
              className="rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 border"
              style={{ padding: '0.9rem 2rem', minHeight: '52px', fontSize: '1rem', color: '#3A3A3C', ...glassStyleSubtle }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Contact via Telegram
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up-4 rounded-xl px-6 py-3 border" style={glassStyleSubtle}>
            <div className="flex items-center justify-center gap-8 text-sm font-medium" style={{ color: '#3A3A3C' }}>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#3A3A3C' }}>
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
