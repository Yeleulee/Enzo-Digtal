import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent border-t-[#4a6fa5] border-r-[#6b9bd1] rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          boxShadow: '0 0 15px rgba(107,155,209,0.4)',
        }}
      />
      
      {/* Inner Ring */}
      <motion.div
        className="absolute inset-2 border-2 border-transparent border-b-[#2d4a7c] border-l-[#4a6fa5] rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          boxShadow: '0 0 10px rgba(74,111,165,0.3)',
        }}
      />

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 bg-[#6b9bd1] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            boxShadow: '0 0 10px rgba(107,155,209,0.8)',
          }}
        />
      </div>
    </div>
  );
}
