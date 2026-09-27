import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScrollAnimation';

const PROJECTS = [
  {
    id: 1,
    title: 'TAJ SKYLINE',
    tagline: 'Hotel Booking Management System',
    desc: 'A full-stack hotel booking system developed as a BCA 6th Semester project with room management, user authentication, bookings, cancellations, enquiries, and an admin dashboard.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    color: 'from-cyan-400/20 to-blue-500/20',
    accent: '#00D4FF',
    emoji: '🏨',
    featured: true,
    github: 'https://github.com/AayushPatel018/TAJ-SKYLINE-Hotel-Booking-System',
    demo: '#',
  },
  {
    id: 2,
    title: 'A&P Furniture',
    tagline: 'Furniture E-Commerce Website',
    desc: 'A full-stack furniture e-commerce website developed as a BCA 5th Semester project with user authentication, product management, shopping cart, orders, and an admin dashboard.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    color: 'from-purple-500/20 to-pink-500/20',
    accent: '#A855F7',
    emoji: '🪑',
    featured: false,
    github: 'https://github.com/AayushPatel018/BCA-5th-Semester-Furniture-E-Commerce',
    demo: '#',
  },
  {
  id: 3,
  title: 'Amazon Clone',
  tagline: 'E-Commerce Frontend Website',
  desc: 'A responsive Amazon-inspired e-commerce website built as a frontend project using HTML and CSS, with a focus on layout, navigation, product sections, and user-friendly design.',
  tech: ['HTML', 'CSS'],
  color: 'from-orange-500/20 to-yellow-400/20',
  accent: '#FF9900',
  emoji: '🛒',
  featured: false,
  github: 'https://github.com/AayushPatel018/Amazon-Clone',
  demo: '#',
},
];

const Projects = () => {
  const [ref, inView] = useInView({ once: true });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%,rgba(123,47,190,0.06) 0%,transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">03 — PROJECTS</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Concepts turned into fully-functional applications.</p>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 flex flex-col group"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${p.accent}25` }}
            >
              {/* Visual */}
              <div className={`h-40 bg-gradient-to-br ${p.color} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${p.accent}40 1px,transparent 1px),linear-gradient(90deg,${p.accent}40 1px,transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }} />
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-2">{p.emoji}</div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{ color: p.accent, background: `${p.accent}15`, border: `1px solid ${p.accent}30` }}>
                    {p.tagline}
                  </span>
                </div>
                {p.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 glass px-2 py-1 rounded-full border border-cyan-400/30">
                    <span className="text-xs text-cyan-400 font-mono">✨ Featured</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="font-mono text-xs mb-1" style={{ color: p.accent }}>Project 0{p.id}</p>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-200">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg"
                      style={{ background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}22` }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-2.5 text-sm font-display font-medium text-slate-300 hover:text-white border border-white/5 hover:border-white/15 transition-all duration-200">
                    ⌨ GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-display font-semibold text-white relative z-10"
                    style={{ background: 'linear-gradient(135deg,#00D4FF,#7B2FBE)' }}>
                    ↗ Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a href="https://github.com/AayushPatel018" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline px-7 py-3.5 rounded-xl text-sm">
            ⌨ View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
