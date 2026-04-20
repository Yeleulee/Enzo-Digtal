import { motion } from 'motion/react';

interface LoadingBarProps {
  progress?: number; // 0-100
  className?: string;
}

export default function LoadingBar({ progress, className = '' }: LoadingBarProps) {
  return (
    <div className={`relative w-full h-2 glass-subtle rounded-full overflow-hidden ${className}`}>
      {progress !== undefined ? (
        // Determinate progress
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgba(45,74,124,0.8) 0%, rgba(74,111,165,0.9) 50%, rgba(107,155,209,1) 100%)',
            boxShadow: '0 0 15px rgba(107,155,209,0.6)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      ) : (
        // Indeterminate progress
        <motion.div
          className="absolute inset-y-0 w-1/3 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(74,111,165,0.8) 50%, rgba(107,155,209,1) 100%)',
            boxShadow: '0 0 20px rgba(107,155,209,0.6)',
          }}
          animate={{
            x: ['-100%', '400%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
}
