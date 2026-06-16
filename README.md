# Personal Portfolio — Alexander Mitchell

A modern, dark-themed personal portfolio website built with React 18, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)
![Vite](https://img.shields.io/badge/Vite-8-646CFF)

## Features

- ⚡ **Blazing fast** — Vite dev server and optimized production builds
- 🎨 **Premium dark design** — Chrome/silver gradient headlines, purple-magenta-orange accent gradients
- 📱 **Fully responsive** — Mobile-first layout with adaptive breakpoints
- 🎬 **Smooth animations** — Framer Motion entrance and scroll animations
- 📝 **Data-driven** — All content loaded from a single JSON file
- ♿ **Accessible** — Respects `prefers-reduced-motion`, proper ARIA labels
- 🔗 **Smart social links** — Automatically hides empty/missing URLs

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Fixed navigation bar with scroll tracking
│   ├── SocialLinks.tsx         # Reusable social link pills
│   ├── HeroSection.tsx         # Full-viewport hero with avatar & tagline
│   ├── AboutSection.tsx        # Bio and experience stats
│   ├── ExperienceSection.tsx   # Numbered career timeline
│   ├── ServicesSection.tsx     # Services/capabilities grid
│   ├── ProjectsSection.tsx     # Project gallery with sorting
│   ├── ProjectCard.tsx         # Sticky dark project card
│   ├── TestimonialsSection.tsx # Infinite marquee testimonial carousel
│   └── Footer.tsx              # 3-column footer with copy-to-clipboard
├── data/
│   └── portfolio.json          # ← All portfolio content lives here
├── hooks/
│   └── usePortfolio.ts         # Typed React hook for accessing data
├── types/
│   └── portfolio.ts            # TypeScript interfaces for all data
├── App.tsx                     # Root component composing all sections
├── main.tsx                    # React entry point
└── index.css                   # Global styles, Tailwind theme, animations
```

## Editing Content

All portfolio content is stored in **`src/data/portfolio.json`**. No component code needs to be modified to update your information.

### Profile

Update your name, tagline, role, bio, and social links:

```json
{
  "profile": {
    "name": "Your Full Name",
    "shortName": "First Name",
    "tagline": "Your tagline here",
    "role": "Your Job Title",
    "specialization": "Your Specializations",
    "location": "City, State",
    "yearsOfExperience": 8,
    "bio": "Your bio paragraph...",
    "avatarSvg": "",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "email": "you@example.com",
      "phone": "+1 (555) 000-0000",
      "website": "https://yoursite.com",
      "instagram": ""
    }
  }
}
```

> **Tip:** Leave any social field empty (`""`) and it will automatically be hidden from the UI.

### Experience

Add or modify career entries:

```json
{
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "period": "2022 — Present",
      "location": "City, State",
      "summary": "Brief description of your work...",
      "highlights": [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ]
    }
  ]
}
```

### Projects

Add projects to your portfolio. Set `highlight: true` to feature them first:

```json
{
  "projects": [
    {
      "id": "unique-id",
      "title": "Project Name",
      "subtitle": "Short Description",
      "description": "Detailed description...",
      "stack": ["React", "TypeScript", "Node.js"],
      "role": "Your Role",
      "year": "2024",
      "link": "https://project-url.com",
      "image": "",
      "highlight": true
    }
  ]
}
```

> **Tip:** Leave `link` empty to hide the "LIVE PROJECT" button. Leave `image` empty for a dark placeholder with the project title.

### Testimonials

```json
{
  "testimonials": [
    {
      "id": "t1",
      "quote": "Their testimonial quote...",
      "name": "Person Name",
      "role": "Their Title, Company",
      "avatarColor": "#8B5CF6"
    }
  ]
}
```

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite](https://vite.dev) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| [Framer Motion](https://motion.dev) | Animations |
| [Lucide React](https://lucide.dev) | Icons |

## License

MIT
