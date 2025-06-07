// src/components/common/AnimatedBackground.jsx
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
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

  const spotlightStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  };

  return (
    <div className="fixed inset-0 -z-10">
      {/* Lapisan Latar Belakang Titik-titik */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Lapisan Sorotan (Spotlight) */}
      <div
        style={spotlightStyle}
        className="absolute inset-0 opacity-40 dark:opacity-60 [mask-image:radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),black_0%,transparent_50%)] bg-gradient-to-tr from-primary/80 to-blue-300/80"
      />
    </div>
  );
};

export default AnimatedBackground;
