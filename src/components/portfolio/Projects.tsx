import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Blurt",
      shortIntro: "Drama-based news discussion platform with AI-generated character conversations about current events",
      description: "A platform under nahneed. principles designed as a drama disguised as a WhatsApp chat around current news and real characters. Users log in, select a character (stickman color), and view chats that simulate characters debating news.",
      fullDescription: `Blurt is a revolutionary platform that transforms news consumption into an engaging narrative experience. Built under nahneed. principles, it presents current events through AI-generated conversations between four compelling characters: Kunal, Ruhi, Harshit, and Bhumika.

The platform features a unique backstory - all characters were part of a Court-Mandated Debate Club after getting involved in a public fight. They completed the program but continued meeting out of habit, creating the foundation for their ongoing discussions.

Key features include:
• Dynamic, real-time relevance with current events
• Emotional, ideological, and personal stakes tied to each news item
• Story arcs that develop slowly over multiple chats
• Character development with gradual ideological transformation
• WhatsApp-style interface for familiar user experience

Each conversation is AI-generated but grounded in the characters' backstories, ensuring authentic dialogue that reflects their personalities, backgrounds, and evolving perspectives on contemporary issues.`,
      technologies: ["React", "Node.js", "AI APIs", "OpenAI", "WebSocket"],
      liveUrl: "https://nahneedpfft.com/blurt",
      logoImage: "/lovable-uploads/1dde61e5-79c9-47a7-8526-ed626178f3ba.png",
      previewImage: "/lovable-uploads/7fed698e-078d-495a-891c-3b283ffb3b2f.png",
      highlights: ["AI-generated conversations", "Real-time news integration", "Character development arcs", "WhatsApp-style interface"],
      logoColor: "text-white", // White text for dark logo background
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      title: "Echoid",
      shortIntro: "Voice emotion transformation platform with 8 emotion styles and real-time processing capabilities",
      description: "Voice synthesis platform with 8 emotion styles, processes audio under 3 seconds, 92% accuracy",
      fullDescription: `Echoid is a cutting-edge voice transformation platform that revolutionizes how we interact with audio content. Built with advanced AI models, it can transform any voice to express different emotions while maintaining the speaker's unique characteristics.

The platform leverages XTTS-v2 technology for high-quality voice synthesis and provides real-time processing capabilities. Users can upload voice samples, enter text, and choose from 8 distinct emotions to create personalized audio content.

Key features include:
• 8 different emotion styles (Sad, Love, Angry, Excited, Calm, Happy, Surprised, Tired)
• Sub-3 second processing time
• 92% accuracy in emotion detection and transformation
• On-premises TTS stack for privacy and security
• Real-time voice cloning capabilities
• User-friendly web interface

The technology has applications in content creation, accessibility tools, entertainment, and personalized communication systems.`,
      technologies: ["Next.js", "FastAPI", "XTTS-v2", "Torch", "NumPy"],
      liveUrl: "http://echoid-voice-app.s3-website.ap-south-1.amazonaws.com/",
      githubUrl: "https://github.com/cjaradhye/echoid-frontend",
      logoImage: "/lovable-uploads/7752c02f-2efd-4774-966f-1a914a71dc13.png",
      previewImage: "/lovable-uploads/e755fcb9-9f67-45d9-ab43-44912378d211.png",
      highlights: ["Real-time voice cloning", "8 emotion styles", "On-prem TTS stack", "Sub-3s processing"],
      logoColor: "text-purple-800", // Dark text for light logo background
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "EvoPacts",
      shortIntro: "Blockchain-powered athlete contract management system for transparent sports agreements and transactions",
      description: "Blockchain contract management system for athlete-club agreements with automated execution",
      fullDescription: `EvoPacts is a revolutionary blockchain-based platform designed to modernize the sports industry by providing transparent, automated contract management for athlete-club agreements. The system leverages smart contracts to ensure fair, transparent, and automated execution of sports contracts.

The platform addresses major pain points in sports contract management, including lack of transparency, delayed payments, complex negotiations, and dispute resolution. By utilizing blockchain technology, EvoPacts creates an immutable record of all agreements and automates many traditionally manual processes.

Key features include:
• Smart contract automation for payment schedules
• Real-time performance tracking and metrics
• Transparent contract terms visible to all parties
• Automated milestone-based payments
• Dispute resolution mechanisms
• Performance analytics and reporting
• Multi-party contract support

The platform has been tested with over $10K in demo transactions and provides a comprehensive solution for modern sports contract management. It supports various sports and can handle complex multi-party agreements between athletes, clubs, agents, and sponsors.`,
      technologies: ["MERN", "Solidity", "Truffle", "Web3.js", "PyTorch"],
      githubUrl: "https://github.com/d1by/hackbattle23",
      logoImage: "/lovable-uploads/9cbd8ed8-fa57-48d4-b8f5-743ab95625f2.png",
      previewImage: "/lovable-uploads/681fdd43-7295-49df-a8da-9f3f1fc80cbb.png",
      highlights: ["Smart contract automation", "Real-time tracking", "Transparent agreements", "$10K+ demo transactions"],
      logoColor: "text-white", // White text for dark logo background
      bgColor: "bg-gradient-to-br from-teal-600 to-green-600"
    },
    {
      title: "Fortify",
      shortIntro: "Smart contract development IDE with ML-powered vulnerability detection and rapid compilation",
      description: "Solidity IDE with ML vulnerability detection, reduced dev time by 60%",
      fullDescription: `Fortify is a comprehensive Integrated Development Environment (IDE) specifically designed for Solidity smart contract development. The platform combines traditional IDE features with advanced machine learning capabilities to detect vulnerabilities and optimize the development process.

Built to address the growing need for secure smart contract development, Fortify provides developers with powerful tools to write, test, and deploy smart contracts with confidence. The ML-powered vulnerability detection system analyzes code in real-time, identifying potential security issues before deployment.

Key features include:
• ML-powered vulnerability detection and analysis
• Sub-500ms compilation times for rapid development
• Multi-language support (Solidity, Vyper, and more)
• Integrated testing framework with Hardhat
• Real-time code analysis and suggestions
• Gas optimization recommendations
• Smart contract templates and examples
• Deployment management tools

The platform has demonstrated a 60% reduction in development time compared to traditional Solidity development workflows. It includes comprehensive testing tools, deployment management, and integration with popular blockchain networks for seamless smart contract lifecycle management.`,
      technologies: ["MERN", "Solidity", "Hardhat", "Python", "WebAssembly"],
      liveUrl: "http://fortify-app.s3-website.ap-south-1.amazonaws.com/",
      githubUrl: "https://github.com/cjaradhye/fortify",
      logoImage: "/lovable-uploads/8cd159d8-19b6-4303-b94b-437fd0db8205.png",
      previewImage: "/lovable-uploads/0e24f6fe-f609-4696-8f8b-8c656a3adf56.png",
      highlights: ["ML vulnerability detection", "Sub-500ms compilation", "60% faster development", "Multi-language support"],
      logoColor: "text-white", // White text for orange logo background
      bgColor: "bg-gradient-to-br from-orange-600 to-red-600"
    }
  ];

  return (
    <>
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
              <span className="handwritten text-highlight-purple">My</span>{' '}
              <span className="scribble-line">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground handwritten">
              Click the preview images to explore my work in detail
            </p>
          </motion.div>

          {/* Project cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Project card */}
                <div 
                  className={`${project.bgColor} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-64 w-full relative group/logo cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Logo - visible by default */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover/logo:opacity-0 transition-opacity duration-300">
                    <img 
                      src={project.logoImage} 
                      alt={`${project.title} logo`}
                      className="object-contain"
                    />
                  </div>

                  {/* Text overlay - visible on hover */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl handwritten text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {project.shortIntro}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center space-x-3">
                  <img 
                    src={selectedProject.logoImage} 
                    alt={`${selectedProject.title} logo`}
                    className="w-8 h-8 object-contain"
                  />
                  <span>{selectedProject.title}</span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Preview image */}
                <div className="w-full">
                  <img 
                    src={selectedProject.previewImage} 
                    alt={`${selectedProject.title} preview`}
                    className="w-full object-cover rounded-lg"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((highlight: string, i: number) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, i: number) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live Project</span>
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
