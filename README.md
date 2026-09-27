# Aayush Patel — Developer Portfolio

A premium, modern developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone or download this project
cd aayush-patel-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → Opens at http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Loader.jsx         # Initial loading animation
│   ├── Navbar.jsx         # Sticky navigation with active section
│   ├── ParticleCanvas.jsx # Neural-network particle background
│   ├── Hero.jsx           # Landing section with typing effect
│   ├── About.jsx          # About me section
│   ├── Skills.jsx         # Tech skills with animated progress bars
│   ├── Projects.jsx       # Project showcase cards
│   ├── Education.jsx      # Education & experience timeline
│   ├── Contact.jsx        # Contact form and social links
│   ├── Footer.jsx         # Site footer
│   └── BackToTop.jsx      # Scroll-to-top button
├── hooks/
│   ├── useTypingEffect.js # Animated typewriter hook
│   └── useScrollAnimation.js # Scroll & active-section hooks
├── utils/
│   └── constants.js       # All portfolio data (edit here!)
├── App.jsx
├── main.jsx
└── index.css
```

## ✏️ Customization

All content is centralized in `src/utils/constants.js`:
- Update `SOCIAL_LINKS` with your real GitHub/LinkedIn/email
- Edit `PROJECTS` to add your real projects with live URLs
- Modify `SKILLS` to reflect your actual tech stack
- Update `EDUCATION` with your real institution details

## 🛠️ Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion 11** — Animations & transitions
- **React Icons 5** — Icon library

## 📦 Deployment

Works with Vercel, Netlify, or any static host:

```bash
npm run build
# Deploy the `dist/` folder
```
