// src/components/common/LoadingScreen.jsx (diperbaiki)
import { motion as Motion } from 'framer-motion';

const LoadingScreen = () => {
  // Varian animasi untuk spinner
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        loop: Infinity,
        duration: 1.2,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark">
      {/* --- PERBAIKAN DI SINI --- */}
      <Motion.div
        className="w-16 h-16 border-4 border-solid rounded-full border-accent-gold border-t-transparent"
        variants={spinnerVariants}
        animate="animate"
      >
        <span className="sr-only">Loading...</span>
      </Motion.div>
    </div>
  );
};

export default LoadingScreen;
