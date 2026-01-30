import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div 
      className="container-custom min-h-[calc(100vh-80px)] flex items-center overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full section">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-text-main tracking-tight"
          >
            Full-Stack Developer crafting <span className="text-accent">scalable</span>, real-world web applications
          </motion.h1>
          
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl lg:max-w-none"
          >
            I design, build, and deploy end-to-end products using React, Node.js, and modern APIs—focused on performance, usability, and clean architecture.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <a href="https://drive.google.com/uc?export=download&id=17N6iW-w4wKM9Sjz_xk5ec5lQVNOPLY_a" download className="btn btn-secondary flex items-center gap-2">
              <FaFileDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div 
            className="flex gap-6 text-3xl text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/yuvarajsadam" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
            <a href="https://linkedin.com/in/yuva-raj-sadam" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center items-center relative order-first lg:order-last mb-8 lg:mb-0"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
           <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-indigo-100 to-gray-100 border-8 border-white shadow-2xl flex justify-center items-center overflow-hidden">
              <div className="text-6xl font-bold text-accent opacity-95 "><img src="src/assets/img1.jpg" alt="photo" /></div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
