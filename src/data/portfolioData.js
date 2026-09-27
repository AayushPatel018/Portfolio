// ============================================================
// Portfolio Data — Aayush Patel
// Update this file to customize content
// ============================================================

export const personalInfo = {
  name: "Aayush Patel",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "MCA Student",
    "React Enthusiast",
    "UI/UX Learner",
    "Open Source Contributor",
  ],
  bio: "I'm a passionate MCA student who loves crafting elegant web experiences. I bridge the gap between design and engineering — building fast, accessible, and beautiful products that make an impact.",
  location: "India",
  email: "aayush.patel@email.com",
  github: "https://github.com/aayushpatel",
  linkedin: "https://linkedin.com/in/aayushpatel",
  resumeLink: "#",
};

export const skills = {
  Frontend: [
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss3" },
    { name: "JavaScript", level: 88, icon: "SiJavascript" },
    { name: "React.js", level: 85, icon: "SiReact" },
  ],
  Backend: [
    { name: "Node.js", level: 80, icon: "SiNodedotjs" },
    { name: "Express.js", level: 78, icon: "SiExpress" },
  ],
  Database: [
    { name: "MongoDB", level: 75, icon: "SiMongodb" },
    { name: "Supabase", level: 70, icon: "SiSupabase" },
  ],
  Tools: [
    { name: "Git", level: 85, icon: "SiGit" },
    { name: "GitHub", level: 88, icon: "SiGithub" },
    { name: "VS Code", level: 92, icon: "SiVisualstudiocode" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "QuickTools AI",
    tagline: "AI-powered file conversion platform",
    description:
      "A smart file conversion platform that leverages AI to handle PDF, image, audio, and document transformations in seconds. Features a clean drag-and-drop interface with real-time processing and batch conversion support.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI API"],
    github: "https://github.com/aayushpatel/quicktools-ai",
    live: "#",
    featured: true,
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    tagline: "This very website you're on",
    description:
      "A modern, animated portfolio built with React, Vite, and Tailwind CSS. Features particle backgrounds, smooth animations via Framer Motion, glassmorphism design, and full mobile responsiveness.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/aayushpatel/portfolio",
    live: "#",
    featured: false,
    color: "#22d3ee",
    gradient: "from-cyan-500 to-blue-600",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Task Management App",
    tagline: "Productivity redefined",
    description:
      "A full-stack task manager with Kanban boards, priority labeling, team collaboration, real-time updates, and deadline reminders. Built for teams and individuals who mean business.",
    tech: ["React", "Node.js", "MongoDB", "Supabase", "Socket.io"],
    github: "https://github.com/aayushpatel/task-manager",
    live: "#",
    featured: false,
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-700",
    icon: "✅",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Rajju Shroff Rofel University",
    period: "2024 – 2026",
    status: "Pursuing",
    description:
      "Specializing in advanced software engineering, AI/ML fundamentals, and full-stack development. Active participant in college tech fests and hackathons.",
    icon: "🎓",
    color: "#6366f1",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rajju Shroff Rofel University",
    period: "2021 – 2024",
    status: "Completed",
    description:
      "Graduated with a strong foundation in programming, data structures, database management, and web technologies. Final year project on AI-based agricultural intelligence.",
    icon: "📚",
    color: "#8b5cf6",
  },
];

export const experience = [
  {
    title: "Web Developer Intern",
    company: "Cloud9 Softech",
    period: "Jan 2026 – Feb 2026",
    type: "Internship",
    description:
      "Developed and maintained responsive web interfaces. Worked on real client projects using modern web technologies, collaborated with the backend team for API integrations.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "#22d3ee",
  },
];

export const stats = [
  { label: "Projects Built", value: "10+", icon: "🚀" },
  { label: "Technologies", value: "12+", icon: "⚡" },
  { label: "Months Experience", value: "18+", icon: "💡" },
  { label: "GitHub Commits", value: "200+", icon: "🔥" },
];
