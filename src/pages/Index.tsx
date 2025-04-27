
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Initialize reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('reveal-visible');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal(); // Call once on load
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
