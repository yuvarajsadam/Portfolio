import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

const skillsData = [
  { category: "Languages", icon: <FaCode />, items: ["Python", "JavaScript"] },
  { category: "Frontend", icon: <FaLaptopCode />, items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { category: "Backend", icon: <FaServer />, items: ["Node.js", "Express.js", "RESTful APIs"] },
  { category: "Databases", icon: <FaDatabase />, items: ["MongoDB", "SQL"] },
  { category: "Tools", icon: <FaTools />, items: ["Git & GitHub", "Postman", "VS Code"] }
];

const Skills = () => {
  return (
    <motion.div 
      className="container-custom section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6 border-b-2 border-gray-50 pb-4">
              <span className="text-2xl text-accent bg-indigo-50 p-3 rounded-full flex justify-center items-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {skillGroup.icon}
              </span>
              <h3 className="text-xl font-bold text-text-main">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, idx) => (
                <span key={idx} className="bg-slate-50 border border-slate-200 text-text-main px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-white hover:border-accent hover:text-accent hover:shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
