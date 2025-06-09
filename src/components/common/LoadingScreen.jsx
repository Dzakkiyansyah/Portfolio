import { animate, motion as Motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const LoadingScreen = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 1.2,
      ease: 'easeInOut',
    });

    return controls.stop;
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-background">
      <Motion.div
        className="flex items-center text-6xl font-extrabold tracking-tighter text-dark-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Motion.h1>{rounded}</Motion.h1>
        <h1>%</h1>
      </Motion.div>
    </div>
  );
};

export default LoadingScreen;