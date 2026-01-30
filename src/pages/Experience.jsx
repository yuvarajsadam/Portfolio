import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div 
      className="container-custom section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Experience</h2>

      <div className="max-w-4xl mt-8">
        <motion.div 
          className="bg-white p-10 rounded-2xl shadow-sm border-l-4 border-accent mb-8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-text-main mb-2">Full Stack Developer Intern</h3>
            <span className="text-lg font-semibold text-accent">Genesys Info X</span>
          </div>
            
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-text-secondary mb-4">What I Actually Did (Impact-focused)</h4>
            <ul className="space-y-3 pl-2">
              {[
                "Built and maintained end-to-end web applications using React, Node.js, and Express.",
                "Designed and implemented RESTful APIs to support frontend features and backend workflows.",
                "Developed responsive, mobile-friendly UI components using React and Bootstrap.",
                "Integrated databases to handle CRUD operations and data persistence.",
                "Collaborated with team members to debug issues and improve application performance.",
                "Followed Git-based workflows for version control and collaboration."
              ].map((item, i) => (
                <li key={i} className="relative pl-6 text-text-secondary leading-relaxed">
                  <span className="absolute left-0 text-accent font-bold">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/(end-to-end web applications|RESTful APIs|responsive, mobile-friendly UI components|CRUD operations and data persistence)/g, '<strong>$1</strong>') }}></span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
