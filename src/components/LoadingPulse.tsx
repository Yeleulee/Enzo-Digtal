import { motion } from 'motion/react';

interface LoadingPulseProps {
  className?: string;
}

export default function LoadingPulse({ className = '' }: LoadingPulseProps) {
  return (
    <div className={`relative w-20 h-20 ${className}`}>
      {/* Outer Pulse */}
      <motion.div
        className="absolute inset-0 rounded-full glass-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(107,155,209,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Middle Pulse */}
      <motion.div
        className="absolute inset-4 rounded-full glass-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(74,111,165,0.5) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.9, 0.3, 0.9],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      {/* Center Core */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(107,155,209,0.9) 0%, rgba(74,111,165,0.6) 100%)',
          boxShadow: '0 0 20px rgba(107,155,209,0.8)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      />
    </div>
  );
}
