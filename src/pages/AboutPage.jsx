import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="container px-6 py-24 pt-40 mx-auto">
        <h1 className="text-4xl font-bold text-light-text dark:text-dark-text">
          More About Dzakkiyansyah
        </h1>
        <p className="mt-4 text-subtle dark:text-subtle-dark">
          This is where the detailed story of my journey in technology will be told. From my first "Hello World" to complex projects, I will share my experiences, challenges, and philosophies in design and development. Stay tuned!
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;