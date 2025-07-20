import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentText, setCurrentText] = useState('');
  const [progress, setProgress] = useState(0);
  const [showMascot, setShowMascot] = useState(false);
  
  const texts = [
    "Welcome to Aradhye's Lab...",
    "Mixing code with creativity...",
    "Brewing some magic...",
    "Almost ready!"
  ];

  useEffect(() => {
    let textIndex = 0;
    let progressValue = 0;
    
    const textInterval = setInterval(() => {
      if (textIndex < texts.length) {
        setCurrentText(texts[textIndex]);
        textIndex++;
      }
    }, 800);

    const progressInterval = setInterval(() => {
      if (progressValue < 100) {
        progressValue += Math.random() * 15 + 5; // Random increment between 5-20
        if (progressValue > 100) progressValue = 100;
        setProgress(progressValue);
      } else {
        clearInterval(progressInterval);
        clearInterval(textInterval);
        setShowMascot(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background lab-paper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: showMascot ? 1.1 : 1 }}
          transition={{ 
            duration: 0.5, 
            type: "spring", 
            stiffness: 300,
            damping: 20
          }}
        >
          <motion.img
            src="/lovable-uploads/37b15e7b-75d1-48a8-892c-0d32ceb97b18.png"
            alt="Aradhye's Avatar"
            className="w-32 h-32 mx-auto rounded-full sketch-border"
            animate={showMascot ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ 
              duration: 0.5, 
              repeat: showMascot ? 3 : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.div
          className="handwritten text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="scribble-line text-highlight-purple">
            {currentText}
          </span>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div
          className="w-80 mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-2">
            <span className="handwritten text-sm text-highlight-purple">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-highlight-teal to-highlight-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;