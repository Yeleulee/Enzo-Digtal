import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e1a]">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2d4a7c] rounded-full blur-[180px] w-[600px] h-[600px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4a6fa5] rounded-full blur-[200px] w-[500px] h-[500px] animate-pulse" />
      </div>

      {/* Loading Container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/src/assets/logo.png" 
            alt="Enzo OS" 
            className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(107,155,209,0.6)]"
          />
        </motion.div>

        {/* Frosted Glass Loading Bar */}
        <div className="relative w-64 h-2 glass-subtle rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2d4a7c] via-[#4a6fa5] to-[#6b9bd1]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              boxShadow: '0 0 20px rgba(107,155,209,0.6)',
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-[#6b9bd1] font-mono text-sm uppercase tracking-widest">
            Loading
          </p>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#4a6fa5] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  boxShadow: '0 0 10px rgba(107,155,209,0.5)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Spinning Ring */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-transparent border-t-[#4a6fa5] border-r-[#6b9bd1] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            boxShadow: '0 0 30px rgba(107,155,209,0.3)',
          }}
        />
      </div>
    </div>
  );
}
