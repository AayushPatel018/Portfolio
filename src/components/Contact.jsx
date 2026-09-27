import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useScrollAnimation';

const SOCIALS = [
  {
  icon: '✉️',
  label: 'EMAIL',
  value: 'ayushpatel2005118@gmail.com',
  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayushpatel2005118@gmail.com',
  bg: 'rgba(0,212,255,0.08)',
  },
  {
    icon: 'in',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/aayushpatel0018',
    href: 'https://www.linkedin.com/in/aayushpatel0018/',
    bg: 'rgba(10,102,194,0.1)',
  },
  {
    icon: '⌨',
    label: 'GITHUB',
    value: 'github.com/AayushPatel018',
    href: 'https://github.com/AayushPatel018',
    bg: 'rgba(226,232,240,0.05)',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ once: true });

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const whatsappNumber = '919408506612';

    const whatsappMessage = `Hello Aayush,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');

    setLoading(false);
  };

  const inp = `w-full glass rounded-xl px-4 py-3 text-sm text-white border border-white/8 
    hover:border-white/15 focus:border-cyan-400/50 focus:outline-none placeholder:text-slate-600 
    transition-all duration-200 bg-transparent`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%,rgba(123,47,190,0.08) 0%,transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">
            05 — CONTACT
          </p>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-xl text-white mb-3">
              Open to opportunities
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Actively looking for internship roles and freelance projects.
              If your team needs someone who ships fast and cares about quality
              — let's talk.
            </p>

            <p className="font-mono text-xs text-slate-500 mb-8">
              📍 Gujarat, India · Open to Remote
            </p>

            <div className="space-y-3">

              {SOCIALS.map(({ icon, label, value, href, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/12 transition-all duration-200 group"
                >

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold text-slate-300"
                    style={{ background: bg }}
                  >
                    {icon}
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-0.5">
                      {label}
                    </p>

                    <p className="text-sm text-slate-200 font-medium">
                      {value}
                    </p>
                  </div>

                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            <div className="glass-strong rounded-2xl p-7 border border-white/8">

              <form onSubmit={handleSubmit} className="space-y-4">

                <h3 className="font-display font-semibold text-lg text-white mb-5">
                  Send a message
                </h3>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2 ml-1">
                    NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inp}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2 ml-1">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inp}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 mb-2 ml-1">
                    MESSAGE
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className={`${inp} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-sm font-display font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70"
                  style={{
                    background:
                      'linear-gradient(135deg,#00D4FF,#7B2FBE)',
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>💬 Send Message on WhatsApp</>
                  )}
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;