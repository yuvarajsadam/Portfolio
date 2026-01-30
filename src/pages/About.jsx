import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="container-custom section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">About Me</h2>
      
      <div className="max-w-3xl text-xl leading-relaxed text-text-secondary space-y-8">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m a Full-Stack Developer with hands-on experience building production-ready web applications during my internship and academic projects.
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I enjoy converting complex requirements into simple, scalable solutions—whether it’s designing REST APIs, building responsive UIs, or integrating databases.
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-medium text-text-main"
        >
          I care deeply about <span className="text-accent font-semibold">clean code, performance, and real user problems</span>, and I’m actively looking to grow in fast-paced product teams.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
