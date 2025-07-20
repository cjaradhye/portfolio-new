import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { sendContactEmail } from '../../lib/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formData);
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const stickyNotes = [
    {
      text: "Let's build something amazing together! 🚀",
      color: "bg-highlight-yellow",
      rotation: "rotate-2"
    },
    {
      text: "Open to freelance projects and collaborations",
      color: "bg-highlight-red text-white",
      rotation: "-rotate-1"
    },
    {
      text: "Always excited to discuss new opportunities!",
      color: "bg-highlight-teal text-white",
      rotation: "rotate-3"
    }
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
            <span className="handwritten text-highlight-purple">Let's</span>{' '}
            <span className="scribble-line">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground handwritten">
            Drop me a line! I'm always excited to chat about new projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Floating sticky notes */}
            <div className="relative h-64 mb-8">
              {stickyNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: note.rotation.includes('-') ? -3 : 3 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`absolute ${note.color} ${note.rotation} p-4 rounded-lg shadow-lg 
                            cursor-pointer sticky-note w-48 h-20`}
                  style={{
                    top: `${index * 60}px`,
                    left: `${index * 30}px`,
                    zIndex: 10 - index
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0, 
                    zIndex: 20 
                  }}
                >
                  <div className="handwritten text-sm font-semibold">
                    {note.text}
                  </div>
                  
                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 
                                 bg-yellow-200 opacity-70 rounded-sm"></div>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 sketch-border">
              <h3 className="text-2xl font-bold mb-6 handwritten text-highlight-purple">
                Get in touch
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <Mail className="w-6 h-6 text-highlight-purple" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">aradhye.swarup@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <Phone className="w-6 h-6 text-highlight-purple" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9212104828</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <MapPin className="w-6 h-6 text-highlight-purple" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-4 handwritten">
                  Follow my journey
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/cjaradhye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-highlight-purple text-white rounded-full hover:bg-highlight-purple/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/aradhyeswarup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-highlight-teal text-white rounded-full hover:bg-highlight-teal/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 sketch-border"
          >
            <h3 className="text-2xl font-bold mb-6 handwritten text-highlight-teal">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 handwritten">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-highlight-purple 
                           focus:ring-2 focus:ring-highlight-purple/20 transition-colors
                           bg-white/50 backdrop-blur-sm"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 handwritten">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-highlight-purple 
                           focus:ring-2 focus:ring-highlight-purple/20 transition-colors
                           bg-white/50 backdrop-blur-sm"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 handwritten">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-highlight-purple 
                           focus:ring-2 focus:ring-highlight-purple/20 transition-colors resize-none
                           bg-white/50 backdrop-blur-sm"
                  placeholder="Tell me about your project idea..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors 
                         flex items-center justify-center space-x-2 ${
                           submitStatus === 'success' 
                             ? 'bg-green-500 text-white' 
                             : submitStatus === 'error'
                             ? 'bg-red-500 text-white'
                             : 'bg-highlight-purple text-white hover:bg-highlight-purple/80'
                         } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Decorative paper clips */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-highlight-yellow opacity-70 
                           rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-highlight-red opacity-70 
                           rounded-full transform rotate-12"></div>
          </motion.div>
        </div>
      </div>

      {/* Floating papers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-white/10 rounded-lg shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;