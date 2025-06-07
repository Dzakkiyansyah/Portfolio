import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Skills from '../components/sections/Skills';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
