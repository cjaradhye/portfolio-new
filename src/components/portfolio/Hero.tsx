import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [hoverEnabled, setHoverEnabled] = useState(false);
  
  const stickyNotes = [
    { text: "Full-Stack Developer", color: "bg-highlight-yellow", rotation: "-rotate-3" },
    { text: "AI Engineer", color: "bg-highlight-red", rotation: "rotate-2" },
    { text: "Founder @ nahneed.", color: "bg-highlight-purple text-white", rotation: "-rotate-1" },
    { text: "AWS Certified", color: "bg-highlight-teal text-white", rotation: "rotate-3" }
  ];

  // Enable hover effects after entry animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverEnabled(true);
    }, 2000); // 2 seconds to allow all animations to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center lab-paper">
      {/* Theme toggle button */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Floating papers background - hidden on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-card shadow-lg rounded-lg hidden md:block"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-bold mb-6 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="handwritten text-highlight-purple">Hi, I'm</span>
              <br />
              <span className="font-sans">Aradhye</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building the future with code, creativity, and a pinch of AI magic ✨
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stickyNotes.map((note, index) => (
                <motion.div
                  key={index}
                  className={`${hoverEnabled ? 'sticky-note' : 'sticky-note-no-hover'} ${note.color} ${note.rotation} p-3 rounded-lg shadow-lg cursor-pointer`}
                  whileHover={hoverEnabled ? { 
                    scale: 1.05, 
                    rotate: 0, 
                    zIndex: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  } : {}}
                  whileTap={hoverEnabled ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="handwritten text-sm font-semibold">
                    {note.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/cjaradhye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/aradhyeswarup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:aradhye.swarup@gmail.com"
                className="p-3 bg-card rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/lovable-uploads/37b15e7b-75d1-48a8-892c-0d32ceb97b18.png"
                alt="Aradhye Swarup"
                className="w-full h-full object-cover rounded-full sketch-border"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Animated doodles around the image */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-highlight-yellow rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-highlight-red rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-highlight-teal rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;