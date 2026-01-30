import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const projectsData = [
  {
    title: "Smart Recruitment Management System",
    problem: "Manual hiring processes are slow, error-prone, and hard to scale.",
    solution: "A full-stack recruitment platform that automates candidate tracking and hiring workflows.",
    features: [
      "Dynamic frontend with reusable React components",
      "Secure backend APIs for recruitment workflows",
      "Database integration for candidate and job data",
      "Clean role-based data handling"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    highlight: false
  },
  {
    title: "Movie Ticket Booking Application",
    problem: "Need for a seamless, device-agnostic booking experience.",
    solution: "A full-stack booking system handling users, shows, and reservations.",
    features: [
      "Booking flow with validation and state management",
      "Backend APIs handling business logic and persistence",
      "Fully responsive UI for mobile and desktop"
    ],
    tech: ["React", "Node.js", "Express", "SQL", "Bootstrap"],
    highlight: false
  },
  {
    title: "CoFlux – Real-Time Collaborative Editor",
    problem: "Traditional editors lack real-time multi-user collaboration.",
    solution: "A collaborative text editor where multiple users edit simultaneously.",
    features: [
      "Real-time document synchronization",
      "Full-stack architecture for create/edit/store documents",
      "Low-latency update handling"
    ],
    tech: ["React", "Node.js", "Real-Time Communication", "Databases"],
    highlight: true 
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="container-custom section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {projectsData.map((project, index) => (
          <motion.div 
            className={`
              bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
              flex flex-col relative overflow-hidden transition-all duration-300
              hover:shadow-2xl hover:border-indigo-100 group
            `}
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {project.highlight && (
              <div className="absolute top-3 -right-8 bg-accent text-white px-8 py-1 rotate-45 text-xs font-bold shadow-md transform-gpu z-10">
                Featured
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <FaCode className="text-2xl text-accent" />
              <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
            </div>
            
            <div className="flex-grow mb-6">
              <div className="text-sm text-text-secondary mb-6 space-y-2">
                <p><strong className="text-text-main">Problem:</strong> {project.problem}</p>
                <p><strong className="text-text-main">Solution:</strong> {project.solution}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-bold mb-3">What I Built:</h4>
                <ul className="pl-4 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-secondary list-disc marker:text-accent">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-text-secondary transition-colors group-hover:bg-indigo-50 group-hover:text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
