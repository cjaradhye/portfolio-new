import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95, color: "bg-highlight-yellow" },
        { name: "JavaScript", level: 90, color: "bg-highlight-red" },
        { name: "TypeScript", level: 85, color: "bg-highlight-purple" },
        { name: "Java", level: 80, color: "bg-highlight-teal" },
        { name: "C++", level: 75, color: "bg-highlight-yellow" },
        { name: "SQL", level: 85, color: "bg-highlight-red" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "bg-highlight-purple" },
        { name: "Next.js", level: 90, color: "bg-highlight-teal" },
        { name: "TailwindCSS", level: 90, color: "bg-highlight-yellow" },
        { name: "HTML/CSS", level: 95, color: "bg-highlight-red" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90, color: "bg-highlight-teal" },
        { name: "Django", level: 85, color: "bg-highlight-purple" },
        { name: "FastAPI", level: 80, color: "bg-highlight-yellow" },
        { name: "MongoDB", level: 85, color: "bg-highlight-red" },
        { name: "Express.js", level: 90, color: "bg-highlight-teal" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 90, color: "bg-highlight-yellow" },
        { name: "Docker", level: 75, color: "bg-highlight-purple" },
        { name: "Kubernetes", level: 70, color: "bg-highlight-teal" },
        { name: "Git", level: 95, color: "bg-highlight-red" },
        { name: "Azure", level: 75, color: "bg-highlight-yellow" }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "NumPy", level: 85, color: "bg-highlight-red" },
        { name: "Pandas", level: 85, color: "bg-highlight-purple" },
        { name: "Scikit-learn", level: 80, color: "bg-highlight-teal" },
        { name: "TensorFlow", level: 75, color: "bg-highlight-yellow" },
        { name: "R", level: 70, color: "bg-highlight-red" },
        { name: "MATLAB", level: 75, color: "bg-highlight-purple" }
      ]
    }
  ];

  const handleDragStart = (skillName: string) => {
    setDraggedItem(skillName);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="handwritten text-highlight-purple">My</span>{' '}
            <span className="scribble-line">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground handwritten">
            {isMobile ? "Each sticky note represents a skill I've mastered" : "Drag the sticky notes around! Each one represents a skill I've mastered"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold handwritten text-highlight-teal text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    drag={!isMobile}
                    dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                    dragElastic={0.2}
                    onDragStart={() => handleDragStart(skill.name)}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`${skill.color} p-3 rounded-lg shadow-lg cursor-grab active:cursor-grabbing
                               sticky-note transform transition-all duration-300 hover:shadow-xl`}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0,
                      zIndex: 10 
                    }}
                    whileDrag={{ 
                      scale: 1.1, 
                      rotate: 5,
                      zIndex: 20 
                    }}
                    style={{
                      rotate: Math.random() * 6 - 3, // Random rotation between -3 and 3 degrees
                    }}
                  >
                    <div className="handwritten text-sm font-semibold mb-2 text-center">
                      {skill.name}
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-white/80 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    <div className="text-xs text-center text-white/80 font-semibold">
                      {skill.level}%
                    </div>
                    
                    {/* Tape effect */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 
                                   bg-yellow-200 opacity-70 rounded-sm"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-highlight-red rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Interactive hint */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block sketch-border">
              <p className="handwritten text-lg text-highlight-purple">
                💡 Try dragging the sticky notes around to see them move!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;