import { motion as Motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-center bg-transparent"
    >
      <div className="container z-10 px-6 mx-auto">
        <Motion.h1
          className="text-4xl font-extrabold leading-tight text-light-text dark:text-dark-text sm:text-5xl md:text-7xl drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Dzakkiyansyah
        </Motion.h1>
        <Motion.p
          className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-subtle dark:text-subtle-dark drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fullstack Developer & UI/UX Enthusiast.
        </Motion.p>
      </div>
    </section>
  );
};

export default Hero;