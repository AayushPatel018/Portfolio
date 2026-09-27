import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import useTypingEffect from '../hooks/useTypingEffect';

const TYPING_STRINGS = ['Full Stack Developer', 'React.js Enthusiast', 'Node.js Backend Dev', 'UI/UX Thinker', 'Open Source Contributor'];

const Hero = () => {
  const typed = useTypingEffect(TYPING_STRINGS, { typingSpeed: 75, deletingSpeed: 45, pauseDuration: 2200 });

  const goto = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 50%,rgba(0,212,255,0.07) 0%,rgba(123,47,190,0.04) 40%,#050B18 70%)' }}>

      <ParticleCanvas />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle,#00D4FF,transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle,#7B2FBE,transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono text-cyan-400 border border-cyan-400/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for Internship &amp; Freelance
              </span>
            </motion.div>

            <motion.p variants={item} className="font-mono text-cyan-400 text-sm mb-3 tracking-widest">
              &gt; Hello World, I'm
            </motion.p>

            <motion.h1 variants={item} className="font-display font-bold leading-none mb-3"
              style={{ fontSize: 'clamp(2.8rem,6vw,5rem)' }}>
              <span className="text-white">Aayush</span><br />
              <span className="gradient-text">Patel</span>
            </motion.h1>

            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-slate-300 text-lg">MCA Student &amp;</span>
              <span className="font-display font-semibold text-white text-lg">
                {typed}<span className="typing-cursor" />
              </span>
            </motion.div>

            <motion.p variants={item} className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">
              I craft high-performance web applications with clean code and thoughtful UX.
              Passionate about React ecosystems, AI integrations, and building products that solve real problems.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                onClick={() => goto('#projects')}
                className="px-7 py-3.5 rounded-xl text-sm font-display font-semibold text-white flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 View Projects
              </motion.button>
              <motion.button
                onClick={() => goto('#contact')}
                className="btn-outline px-7 py-3.5 rounded-xl text-sm font-display font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                ✉️ Contact Me
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-slate-600 text-xs font-mono">FIND ME ON</span>
              <div className="h-px w-8 bg-white/10" />
              {[
                { label: '⌨', href: 'https://github.com/AayushPatel018', title: 'GitHub' },
                { label: 'in', href: 'https://www.linkedin.com/in/aayushpatel0018/', title: 'LinkedIn' },
                { label: '@', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayushpatel2005118@gmail.com', title: 'Email' },
              ].map(({ label, href, title }) => (
                <motion.a key={title} href={href} target="_blank" rel="noopener noreferrer"
                  title={title}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 font-bold"
                  whileHover={{ scale: 1.1, y: -2 }}>
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-strong rounded-2xl p-6 w-72 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">portfolio.jsx</span>
                </div>
                <div className="font-mono text-xs leading-relaxed">
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-white">= {'{'}</span></p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-400">'Aayush Patel'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-green-400">'Full Stack Dev'</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">stack:</span> <span className="text-white">['</span><span className="text-yellow-400">React</span><span className="text-white">','</span><span className="text-yellow-400">Node</span><span className="text-white">'],</span></p>
                  <p className="pl-4"><span className="text-slate-400">available:</span> <span className="text-cyan-400">true</span>,</p>
                  <p><span className="text-white">{'}'}</span></p>
                  <p className="mt-2 text-slate-500">// Building cool things 🚀</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-8 glass rounded-xl px-4 py-2.5 border border-cyan-400/20"
              >
                <p className="text-xs text-slate-400 font-mono">Projects Built</p>
                <p className="text-xl font-display font-bold text-cyan-400">10+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-8 glass rounded-xl px-4 py-2.5 border border-purple-400/20"
              >
                <p className="text-xs text-slate-400 font-mono">Tech Stack</p>
                <p className="text-xl font-display font-bold text-purple-400">MERN</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => goto('#about')}
        >
          <span className="text-xs text-slate-600 font-mono tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <span className="text-slate-600 text-sm">↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
