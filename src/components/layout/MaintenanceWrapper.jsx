import { motion as Motion } from 'framer-motion';
import React from 'react';
import { FiArrowLeft, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MaintenancePage = () => {
  return (
    <Motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-light-background dark:bg-dark-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
      >
        <FiTool className="w-24 h-24 mx-auto text-primary" />
      </Motion.div>
      <Motion.h1
        className="mt-8 text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Under Construction
      </Motion.h1>
      <Motion.p
        className="max-w-md mx-auto mt-4 text-lg text-subtle dark:text-subtle-dark"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        This page is currently being worked on. I'm preparing something amazing.
        Please come back later!
      </Motion.p>
      <Motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 mt-10 font-semibold text-white transition-transform duration-300 rounded-lg bg-primary hover:scale-105"
        >
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </Motion.div>
    </Motion.div>
  );
};

export default MaintenancePage;
