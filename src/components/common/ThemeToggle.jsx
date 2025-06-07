import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 transition-colors bg-gray-200 rounded-full dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-light-background dark:focus:ring-offset-dark-background"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <Motion.div
          key={theme === 'dark' ? 'moon' : 'sun'}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {theme === 'dark' ? (
            <FiSun className="text-2xl text-yellow-300" />
          ) : (
            <FiMoon className="text-2xl text-slate-700" />
          )}
        </Motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;