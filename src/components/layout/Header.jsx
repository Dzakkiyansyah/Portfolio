import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/#skills" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Contact", path: "/#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container flex items-center justify-between h-20 px-6 mx-auto">
          <Link to="/" className="text-2xl font-bold text-light-text dark:text-dark-text">
            Dzakki<span className="text-primary">.</span>
          </Link>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('/#') ? (
                      <a href={link.path.replace('/#', '#')} className="font-medium transition-colors duration-300 text-subtle dark:text-subtle-dark hover:text-primary">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className="font-medium transition-colors duration-300 text-subtle dark:text-subtle-dark hover:text-primary">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 p-2 md:hidden text-light-text dark:text-dark-text">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </Motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            className="fixed inset-0 z-40 pt-20 bg-light-background dark:bg-dark-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Motion.ul
              className="flex flex-col items-center justify-center h-full space-y-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <Motion.li key={link.name} variants={linkVariants}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path.replace('/#', '#')} onClick={closeMenu} className="text-2xl font-semibold text-light-text dark:text-dark-text">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} onClick={closeMenu} className="text-2xl font-semibold text-light-text dark:text-dark-text">
                      {link.name}
                    </Link>
                  )}
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;