import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollY, useActiveSection } from '../hooks/useScrollAnimation';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'education', 'contact']);
  const scrolled = scrollY > 50;

  const goto = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 shadow-2xl shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); goto('#home'); }}
          className="font-display font-bold text-xl">
          <span className="gradient-text">Aayush</span>
          <span className="text-white">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a href={href} onClick={(e) => { e.preventDefault(); goto(href); }}
                  className={`relative text-sm font-medium transition-colors duration-200 group
                    ${isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ background: 'linear-gradient(90deg,#00D4FF,#7B2FBE)' }} />
                </a>
              </li>
            );
          })}
        </ul>

        <a href="mailto:ayushpatel2005118@email.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-display font-semibold text-white"
          style={{ background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' }}>
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 text-xl">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} onClick={(e) => { e.preventDefault(); goto(href); }}
                    className="block text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:ayushpatel2005118@email.com"
                  className="block text-center py-2.5 px-5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' }}>
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
