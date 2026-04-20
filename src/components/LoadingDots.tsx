import { motion } from 'motion/react';

interface LoadingDotsProps {
  className?: string;
}

export default function LoadingDots({ className = '' }: LoadingDotsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full glass-pill"
          style={{
            background: 'linear-gradient(135deg, rgba(74,111,165,0.8), rgba(107,155,209,0.6))',
            boxShadow: '0 0 10px rgba(107,155,209,0.5)',
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
