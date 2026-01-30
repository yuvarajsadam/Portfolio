import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-text-main" onClick={() => setIsOpen(false)}>
          Yuvaraj<span className="text-accent">.</span>
        </NavLink>

        <div className="md:hidden text-2xl text-text-main cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`
          flex flex-col md:flex-row items-center gap-8 absolute md:static 
          top-20 left-0 w-full md:w-auto bg-white md:bg-transparent 
          transition-all duration-300 ease-in-out shadow-md md:shadow-none p-8 md:p-0
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5 md:opacity-100 md:visible md:translate-y-0'}
        `}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 hover:text-accent
                   ${isActive ? "text-accent font-semibold" : "text-text-secondary"}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
