// ── Portfolio Data Constants ──

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = {
  Frontend: [
    { name: 'HTML5', level: 95, icon: 'SiHtml5' },
    { name: 'CSS3', level: 90, icon: 'SiCss3' },
    { name: 'JavaScript', level: 85, icon: 'SiJavascript' },
    { name: 'React.js', level: 82, icon: 'SiReact' },
  ],
  Backend: [
    { name: 'Node.js', level: 80, icon: 'SiNodedotjs' },
    { name: 'Express.js', level: 78, icon: 'SiExpress' },
  ],
  Database: [
    { name: 'MongoDB', level: 75, icon: 'SiMongodb' },
    { name: 'Supabase', level: 70, icon: 'SiSupabase' },
  ],
  Tools: [
    { name: 'Git', level: 88, icon: 'SiGit' },
    { name: 'GitHub', level: 85, icon: 'SiGithub' },
    { name: 'VS Code', level: 92, icon: 'SiVisualstudiocode' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'QuickTools AI',
    tagline: 'AI-Powered File Conversion Platform',
    description:
      'A smart, browser-based platform that leverages AI to convert, compress, and transform files instantly — PDFs, images, documents — with zero uploads to external servers.',
    tech: ['React.js', 'Node.js', 'Express', 'AI APIs', 'Tailwind CSS'],
    github: 'https://github.com/aayushpatel',
    demo: '#',
    color: 'from-cyan-400/20 to-purple-500/20',
    accentColor: '#00D4FF',
    featured: true,
  },
  {
    id: 2,
    title: 'Dev Portfolio',
    tagline: 'This Very Website',
    description:
      'A premium developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features glassmorphism design, particle animations, and smooth transitions.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/aayushpatel',
    demo: '#',
    color: 'from-purple-500/20 to-pink-500/20',
    accentColor: '#7B2FBE',
    featured: false,
  },
  {
    id: 3,
    title: 'Task Management App',
    tagline: 'Productivity Reimagined',
    description:
      'A full-stack task management solution with real-time updates, drag-and-drop boards, priority labels, and team collaboration features built on MERN stack.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
    github: 'https://github.com/aayushpatel',
    demo: '#',
    color: 'from-emerald-500/20 to-cyan-400/20',
    accentColor: '#10b981',
    featured: false,
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Rajju Shroff Rofel University',
    year: '2024 – Present',
    description: 'Specializing in advanced software engineering, AI/ML fundamentals, cloud computing, and enterprise application development.',
    icon: '🎓',
    current: true,
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Rajju Shroff Rofel University',
    year: '2021 – 2024',
    description: 'Graduated with strong foundations in programming, data structures, web technologies, and database management systems.',
    icon: '🏫',
    current: false,
  },
];

export const TYPING_STRINGS = [
  'Full Stack Developer',
  'React.js Enthusiast',
  'Node.js Backend Dev',
  'UI/UX Thinker',
  'Open Source Contributor',
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/aayushpatel',
  linkedin: 'https://linkedin.com/in/aayushpatel',
  email: 'aayush.patel@email.com',
};
