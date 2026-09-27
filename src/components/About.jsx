import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScrollAnimation';

const HIGHLIGHTS = [
  { icon: '💻', label: 'Clean Code', desc: 'Readable, maintainable, and scalable' },
  { icon: '🤖', label: 'AI-First Thinking', desc: 'Integrating modern AI tools into workflows' },
  { icon: '📈', label: 'Startup Mindset', desc: 'Fast iteration, user-first decisions' },
  { icon: '⚡', label: 'Performance', desc: 'Optimized for speed and great UX' },
];

const About = () => {
  const [ref, inView] = useInView({ once: true });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 60%, rgba(123,47,190,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">01 — ABOUT</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #00D4FF, #7B2FBE, #00D4FF)', padding: '2px' }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#050B18' }} />
              </motion.div>
              <div className="absolute inset-3 rounded-full glass-strong flex flex-col items-center justify-center border border-white/10">
                <div className="text-6xl mb-1">👨‍💻</div>
                <p className="font-mono text-xs text-cyan-400">Aayush Patel</p>
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-cyan-400/20"
              >
                <p className="text-xs font-mono text-slate-400">Based in</p>
                <p className="text-sm font-display font-semibold text-white">India 🇮🇳</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-2xl text-white mb-4">
              Turning ideas into <span className="gradient-text">digital experiences</span>
            </h3>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>I'm an MCA student at Rajju Shroff Rofel University with a deep passion for
                full-stack web development, AI tools, and building products that matter.</p>
              <p>I specialize in the <span className="text-cyan-400 font-medium">MERN stack</span> — MongoDB, Express, React, and Node.js —
                and love the intersection of beautiful frontend design and robust backend engineering.</p>
              <p>Actively looking for internships and freelance opportunities to apply my skills on real products.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[['3+', 'Years Coding'], ['10+', 'Projects Built'], ['MERN', 'Tech Stack']].map(([v, l]) => (
                <div key={l} className="glass rounded-xl p-3 text-center border border-white/5">
                  <p className="font-display font-bold text-2xl gradient-text">{v}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {HIGHLIGHTS.map(({ icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="glass rounded-xl p-5 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{icon}</div>
              <p className="font-display font-semibold text-white text-sm mb-1">{label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
