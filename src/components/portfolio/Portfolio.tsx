import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative">
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Timeline Section */}
          <Timeline />
          
          {/* Contact Section */}
          <Contact />
          
          {/* Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
};

export default Portfolio;