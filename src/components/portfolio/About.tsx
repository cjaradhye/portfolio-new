import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

const About = () => {
  const doodleNotes = [
    { 
      text: "Full-stack developer with a passion for AI and creative tech solutions",
      color: "bg-highlight-yellow",
      rotation: "rotate-2",
      size: "w-72 h-36",
      position: "top-4 left-8"
    },
    { 
      text: "Founded nahneed. - scaled to 50+ users in 1 month! Finalist at Pioneira convention 🚀",
      color: "bg-highlight-red text-white",
      rotation: "-rotate-1",
      size: "w-64 h-32",
      position: "top-20 right-12"
    },
    { 
      text: "AWS Certified Solutions Architect 🏆 Expertise in cloud architecture & scalable systems",
      color: "bg-highlight-teal text-white",
      rotation: "rotate-3",
      size: "w-56 h-28",
      position: "bottom-32 left-16"
    },
    { 
      text: "Leetcode: 100+ problems solved 💪 Love algorithmic challenges!",
      color: "bg-highlight-purple text-white",
      rotation: "-rotate-2",
      size: "w-60 h-30",
      position: "bottom-12 right-8"
    },
    { 
      text: "Built AI pipeline reducing video review time by 70% at algoleap 🤖",
      color: "bg-orange-400 text-white",
      rotation: "rotate-1",
      size: "w-52 h-28",
      position: "top-40 left-1/2 transform -translate-x-1/2"
    },
    { 
      text: "Motion Graphics Head @ ISTE VIT - Led 10+ member team 🎨",
      color: "bg-blue-400 text-white",
      rotation: "-rotate-3",
      size: "w-48 h-26",
      position: "bottom-40 right-16"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Built", value: "15+", icon: Award },
    { label: "Users Impacted", value: "50+", icon: Award },
    { label: "Technologies", value: "20+", icon: Award }
  ];

  return (
    <section className="py-20 relative overflow-hidden lab-paper">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="handwritten text-highlight-purple">About</span>{' '}
            <span className="scribble-line">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground handwritten">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 sketch-border">
              <h3 className="text-2xl font-bold mb-4 handwritten text-highlight-purple">
                Hey there! 👋
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                I'm Aradhye, a Full-stack Developer and AI Engineer from Hyderabad, India. 
                I love building things that matter - from voice cloning systems to blockchain IDEs.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Currently pursuing BTech in Computer Science at VIT Vellore with a CGPA of 8.62. 
                I'm passionate about combining cutting-edge technology with creative problem-solving.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or working on my next startup idea. I believe in learning by doing!
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 sketch-border">
              <h3 className="text-xl font-bold mb-4 handwritten text-highlight-teal">
                Let's Connect!
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-highlight-purple" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-highlight-purple" />
                  <span>+91 9212104828</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-highlight-purple" />
                  <span>aradhye.swarup@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center sketch-border"
                >
                  <div className="text-2xl font-bold text-highlight-purple handwritten">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Layered doodle notes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px]"
          >
            {doodleNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: note.rotation.includes('-') ? -2 : 2 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`absolute ${note.position} ${note.size} ${note.color} ${note.rotation} 
                          p-4 rounded-lg shadow-lg cursor-pointer sticky-note`}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 10 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="handwritten text-base font-semibold leading-relaxed">
                  {note.text}
                </div>
                
                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 
                               bg-yellow-200 opacity-70 rounded-sm"></div>
              </motion.div>
            ))}
            
            {/* Decorative elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         w-2 h-2 bg-highlight-red rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute top-1/4 right-1/4 w-1 h-1 bg-highlight-teal rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;