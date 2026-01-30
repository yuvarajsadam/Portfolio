import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certifications = [
  "Programming Foundations with Python",
  "JavaScript Essentials",
  
];

const Certifications = () => {
  return (
    <motion.div 
      className="container-custom section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Certifications</h2>

      <div className="grid gap-6 max-w-2xl">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 group"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <FaAward className="text-3xl text-accent group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-text-main">{cert}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
