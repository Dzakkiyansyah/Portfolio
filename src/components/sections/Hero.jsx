import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Properti untuk gradien sorotan
  const spotlightStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden text-center bg-light-background dark:bg-dark-background">
      
      {/* Lapisan Latar Belakang Titik-titik */}
      <div 
        className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Lapisan Sorotan (Spotlight) yang Mengikuti Mouse */}
      <div
        style={spotlightStyle}
        className="absolute inset-0 z-10 opacity-40 dark:opacity-60 [mask-image:radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),black_0%,transparent_50%)] bg-gradient-to-tr from-primary/80 to-blue-300/80"
      />
      
      <div className="container z-20 px-6 mx-auto">
        <Motion.h1
          className="text-5xl font-extrabold leading-tight text-light-text dark:text-dark-text md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Hi, I'm Dzakkiyansyah
        </Motion.h1>

        <Motion.p
          className="max-w-3xl mx-auto mt-6 text-xl text-subtle dark:text-subtle-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Fullstack Developer & UI/UX Enthusiast.
        </Motion.p>
      </div>
    </section>
  );
};

export default Hero;