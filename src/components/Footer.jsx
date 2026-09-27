import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className="border-t border-white/5 py-10" style={{ background: '#020913' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="font-display font-bold text-lg">
            <span className="gradient-text">Aayush</span>
            <span className="text-white">.dev</span>
          </a>
          <p className="font-mono text-xs text-slate-600 mt-1">MCA Student · Full Stack Developer</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="text-xs text-slate-500 hover:text-cyan-400 transition-colors duration-200">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { label: '⌨', href: 'https://github.com/AayushPatel018' },
            { label: 'in', href: 'https://www.linkedin.com/in/aayushpatel0018/' },
            { label: '@', href: 'mailto:ayushpatel2005118@email.com' },
          ].map(({ label, href }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors duration-200 border border-white/5 text-sm font-bold">
              {label}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="section-divider my-6" />
      <p className="text-center font-mono text-xs text-slate-700">
        © 2026 Aayush Patel · Built with ❤️ using React, Vite &amp; Framer Motion
      </p>
    </div>
  </footer>
);

export default Footer;
