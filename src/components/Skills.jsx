import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScrollAnimation';

const SKILLS = {
  Frontend: {
    color: '#00D4FF',
    items: [
      { name: 'HTML5', level: 95, icon: '🌐' },
      { name: 'CSS3', level: 90, icon: '🎨' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'React.js', level: 82, icon: '⚛️' },
    ]
  },
  Backend: {
    color: '#7B2FBE',
    items: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Express.js', level: 78, icon: '🚂' },
    ]
  },
  Database: {
    color: '#10b981',
    items: [
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'Supabase', level: 70, icon: '💧' },
    ]
  },
  Tools: {
    color: '#f59e0b',
    items: [
      { name: 'Git', level: 88, icon: '🔧' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'VS Code', level: 92, icon: '💻' },
    ]
  }
};

const Skills = () => {
  const [ref, inView] = useInView({ once: true });
  const [active, setActive] = useState('All');

  const categories = ['All', ...Object.keys(SKILLS)];

  return (
    <section id="skills" className="py-24 relative"
      style={{ background: 'linear-gradient(180deg,#050B18 0%,#0A1628 50%,#050B18 100%)' }}>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">02 — SKILLS</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Technologies I use to ship production-ready apps.</p>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs font-display font-semibold transition-all duration-200 ${
                active === cat
                  ? 'text-white'
                  : 'glass border border-white/10 text-slate-400 hover:text-white'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {Object.entries(SKILLS).map(([cat, { color, items }], ci) => {
            if (active !== 'All' && active !== cat) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
                    {cat[0]}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{cat}</p>
                    <p className="text-xs text-slate-500">{items.length} skills</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {items.map(({ name, level, icon }, i) => (
                    <div key={name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-300 flex items-center gap-2">
                          <span>{icon}</span>{name}
                        </span>
                        <span className="font-mono text-xs text-slate-500">{level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${color}, #7B2FBE)` }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: ci * 0.1 + i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
