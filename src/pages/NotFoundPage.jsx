import { motion as Motion } from 'framer-motion';
import React from 'react';
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-light-background dark:bg-dark-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <FiAlertTriangle className="w-32 h-32 mx-auto text-primary" />
      </Motion.div>
      <Motion.h1
        className="mt-10 text-6xl font-extrabold tracking-tight text-primary"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
      >
        404
      </Motion.h1>
      <Motion.p
        className="mt-4 text-2xl font-semibold text-light-text dark:text-dark-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Not Found
      </Motion.p>
      <Motion.p
        className="max-w-md mx-auto mt-5 text-lg text-subtle dark:text-subtle-dark"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        We're sorry, but the page you're trying to access doesn't exist or may have moved.
      </Motion.p>
      <Motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 mt-10 font-semibold text-white transition-transform duration-300 rounded-md bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <FiArrowLeft className="mr-2" />
          Back To Home
        </Link>
      </Motion.div>
    </Motion.div>
  );
};

export default NotFoundPage;
