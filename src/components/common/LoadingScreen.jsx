import { motion as Motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-background dark:bg-dark-background">
      <Motion.div
        className="w-16 h-16 border-4 border-solid rounded-full border-primary border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 1, ease: "linear" }}
      >
        <span className="sr-only">Loading...</span>
      </Motion.div>
    </div>
  );
};

export default LoadingScreen;