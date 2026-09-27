import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScrollAnimation';

const ITEMS = [
  {
    emoji: '🏢', badge: '💼 Experience', badgeClass: 'exp',
    title: 'Web Developer Intern', sub: 'Cloud9 Softech',
    meta: ['📅 Jan 2026 – Mar 2026', '📍 On-site'],
    desc: 'Worked on real client web projects using HTML, CSS, JavaScript, and React. Collaborated with team to build responsive UIs and integrate REST APIs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs'],
    dotColor: '#7B2FBE',
  },
  {
    emoji: '🎓', badge: '🎓 Current', badgeClass: 'current',
    title: 'Master of Computer Applications', sub: 'Indus University',
    meta: ['📅 2026 – Present', 'MCA'],
    desc: 'Specializing in advanced software engineering, AI/ML fundamentals, cloud computing, and enterprise application development.',
    dotColor: '#00D4FF',
  },
  {
    emoji: '🏫', badge: '✅ Completed', badgeClass: 'done',
    title: 'Bachelor of Computer Applications', sub: 'Rajju Shroff Rofel University',
    meta: ['📅 2023 – 2026', 'BCA'],
    desc: 'Graduated with strong foundations in programming, data structures, web technologies, and database management systems.',
    dotColor: '#7B2FBE',
  },
];

const badgeStyles = {
  exp: { background: 'rgba(123,47,190,0.12)', color: '#a78bfa', border: '1px solid rgba(123,47,190,0.25)' },
  current: { background: 'rgba(0,212,255,0.12)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' },
  done: { background: 'rgba(255,255,255,0.05)', color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' },
};

const Education = () => {
  const [ref, inView] = useInView({ once: true });

  return (
    <section id="education" className="py-24 relative"
      style={{ background: 'linear-gradient(180deg,#050B18 0%,#0A1628 50%,#050B18 100%)' }}>

      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">04 — JOURNEY</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg,transparent,rgba(0,212,255,0.3),rgba(123,47,190,0.3),transparent)' }} />

          <div className="space-y-6">
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-5"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-base z-10 relative"
                  style={{ borderColor: item.dotColor, background: '#050B18', boxShadow: `0 0 12px ${item.dotColor}40` }}>
                  {item.emoji}
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
                  <span className="inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-3"
                    style={badgeStyles[item.badgeClass]}>
                    {item.badge}
                  </span>
                  <h3 className="font-display font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-2">{item.sub}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 font-mono mb-3">
                    {item.meta.map((m) => <span key={m}>{m}</span>)}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{item.desc}</p>
                  {item.tech && (
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
