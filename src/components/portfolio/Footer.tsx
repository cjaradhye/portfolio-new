import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Torn edge effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background"></div>
      <div className="absolute top-0 left-0 right-0 h-8 torn-edge"></div>
      
      <div className="relative z-10 py-12 px-4">
        <div className="container mx-auto">
          {/* Main footer content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            {/* Avatar and name */}
            <div className="flex justify-center mb-6">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="/lovable-uploads/37b15e7b-75d1-48a8-892c-0d32ceb97b18.png"
                  alt="Aradhye Swarup"
                  className="w-16 h-16 rounded-full sketch-border"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-highlight-green rounded-full 
                               animate-pulse"></div>
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold mb-2 handwritten text-highlight-purple">
              Aradhye Swarup
            </h3>
            <p className="text-muted-foreground mb-6">
              Full-Stack Developer & AI Engineer
            </p>

            {/* Fun footer message */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-sm text-muted-foreground">Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-highlight-red" />
              </motion.div>
              <span className="text-sm text-muted-foreground">and</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="w-4 h-4 text-highlight-yellow" />
              </motion.div>
              <span className="text-sm text-muted-foreground">in India</span>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { name: "React", color: "bg-highlight-teal" },
                { name: "TypeScript", color: "bg-highlight-purple" },
                { name: "Tailwind", color: "bg-highlight-yellow" },
                { name: "Framer Motion", color: "bg-highlight-red" }
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`${tech.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            {/* Inspiring quotes */}
            <div className="max-w-md mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-highlight-yellow p-4 rounded-lg shadow-lg sticky-note"
              >
                <p className="handwritten text-sm text-gray-800 font-semibold">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <p className="text-xs text-gray-600 mt-2">- Cory House</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {[
                { icon: Code, value: "15+", label: "Projects" },
                { icon: Coffee, value: "∞", label: "Cups of Coffee" },
                { icon: Zap, value: "3+", label: "Years Experience" },
                { icon: Heart, value: "100%", label: "Passion" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-highlight-purple" />
                  <div className="text-lg font-bold handwritten text-highlight-teal">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center border-t border-gray-200 pt-8"
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aradhye Swarup. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2 handwritten">
              Made with lots of ☕ and 🎵 in Hyderabad
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-highlight-red rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* Notebook binding holes */}
          <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-center space-y-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-highlight-teal rounded-full opacity-30"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;