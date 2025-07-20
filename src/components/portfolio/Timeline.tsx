import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "Sep 2022 - May 2026",
      title: "BTech Computer Science",
      company: "VIT Vellore",
      type: "education",
      icon: GraduationCap,
      description: "Pursuing Bachelor's in Computer Science and Engineering",
      achievements: [
        "CGPA: 8.62",
        "Core subjects: DSA, DBMS, Theory of Computation",
        "Active in technical societies and competitions"
      ],
      color: "bg-highlight-purple",
      startDate: new Date("2022-09-01")
    },
    {
      date: "Apr 2024 - May 2025",
      title: "Motion Graphics Head",
      company: "ISTE VIT",
      type: "leadership",
      icon: Trophy,
      description: "Led design team and coordinated technical events",
      achievements: [
        "Led 10+ member team",
        "Trained team in After Effects, improved skills by 70%",
        "Coordinated events with 1,500+ participants"
      ],
      color: "bg-highlight-yellow",
      startDate: new Date("2024-04-01")
    },
    {
      date: "January 2025 - May 2025",
      title: "Founder",
      company: "nahneed.",
      type: "startup",
      icon: Trophy,
      description: "Built creative tech platform combining full-stack development and AI storytelling",
      achievements: [
        "Scaled blurt. from 0 to 50+ users in 1 month",
        "Led product, design, and marketing",
        "Finalist at Pioneira startup convention among 70+ teams"
      ],
      color: "bg-highlight-red",
      startDate: new Date("2025-01-01")
    },
    {
      date: "May 2025 - July 2025",
      title: "Software Developer Intern",
      company: "algoleap",
      type: "work",
      icon: Briefcase,
      description: "Built AI pipeline using Deepgram and Together.AI, reduced video review time by 70%",
      achievements: [
        "Developed modular NLP workflows with 95% accuracy",
        "Redesigned UML architecture, reduced technical debt by 40%",
        "Created internal ML guide covering tools from R to TensorFlow"
      ],
      color: "bg-highlight-yellow",
      startDate: new Date("2025-05-01")
    },
    {
      date: "July 2025",
      title: "AWS Certified Solutions Architect",
      company: "Amazon",
      type: "certification",
      icon: Award,
      description: "Achieved AWS certification demonstrating cloud architecture expertise",
      achievements: [
        "Comprehensive cloud architecture knowledge",
        "Hands-on experience with AWS services",
        "Industry-recognized certification"
      ],
      color: "bg-highlight-teal",
      startDate: new Date("2025-07-01")
    }
  ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Graph paper background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(hsl(var(--highlight-teal)) 1px, transparent 1px),
                 linear-gradient(90deg, hsl(var(--highlight-teal)) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="handwritten text-highlight-purple">My</span>{' '}
            <span className="scribble-line">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground handwritten">
            Plotting my path on the graph paper of life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute md:left-1/2 left-8 top-0 bottom-0 w-1 bg-highlight-teal md:transform md:-translate-x-1/2"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute md:left-1/2 left-8 md:transform md:-translate-x-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Event card */}
                <div className={`md:w-5/12 w-full ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-lg sketch-border"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Date badge */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-highlight-purple" />
                      <span className="text-sm font-semibold text-highlight-purple handwritten">
                        {event.date}
                      </span>
                    </div>

                    {/* Title and company */}
                    <h3 className="text-xl font-bold mb-2 handwritten text-primary">
                      {event.title}
                    </h3>
                    <p className="text-highlight-teal font-semibold mb-3 flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.company}</span>
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {event.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-highlight-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Sticky note corner */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-highlight-yellow opacity-70 
                                   rounded-full transform rotate-12"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating graph paper sheets */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/10 rounded-lg shadow-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundImage: `
                  linear-gradient(hsl(var(--highlight-teal)) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--highlight-teal)) 1px, transparent 1px)
                `,
                backgroundSize: '10px 10px'
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Pencil marks and doodles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-highlight-red rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;