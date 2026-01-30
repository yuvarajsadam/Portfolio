import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div 
      className="container-custom min-h-[calc(100vh-160px)] flex flex-col justify-center items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center w-full max-w-4xl">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-16 text-text-main leading-none tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let’s build something <span className="text-accent">impactful</span>.
        </motion.h2>

        <motion.div 
          className="grid gap-6 max-w-xl mx-auto mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:yuvarajsadam006@gmail.com" className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl hover:border-accent transition-all duration-300 group text-left">
            <div className="w-14 h-14 bg-indigo-50 text-accent rounded-xl flex justify-center items-center text-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <FaEnvelope />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-secondary">Email</span>
              <span className="text-lg font-bold text-text-main">yuvarajsadam006@gmail.com</span>
            </div>
          </a>

          <a href="https://github.com/yuvarajsadam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl hover:border-accent transition-all duration-300 group text-left">
            <div className="w-14 h-14 bg-indigo-50 text-accent rounded-xl flex justify-center items-center text-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <FaGithub />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-secondary">GitHub</span>
              <span className="text-lg font-bold text-text-main">github.com/yuvarajsadam</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/yuva-raj-sadam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl hover:border-accent transition-all duration-300 group text-left">
            <div className="w-14 h-14 bg-indigo-50 text-accent rounded-xl flex justify-center items-center text-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <FaLinkedin />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-secondary">LinkedIn</span>
              <span className="text-lg font-bold text-text-main">linkedin.com/in/yuva-raj-sadam</span>
            </div>
          </a>
        </motion.div>
        
        <motion.div
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.6, type: "spring" }}
           className="text-xl font-medium text-text-secondary"
        >
            <p>Open to opportunities. Say hi! <span role="img" aria-label="wave">👋</span></p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
