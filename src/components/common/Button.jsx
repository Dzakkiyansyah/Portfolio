// src/components/common/Button.jsx (diperbaiki)
import { motion as Motion } from 'framer-motion'; // <-- Menggunakan alias

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark";
  
  const styles = {
    primary: `bg-accent-gold text-primary-dark hover:bg-yellow-400 focus:ring-accent-gold`,
    secondary: `bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark focus:ring-accent-gold`,
  };

  const buttonClasses = `${baseClasses} ${styles[variant]}`;

  return (
    // --- PERBAIKAN DI SINI ---
    <Motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Motion.button>
  );
};

export default Button;