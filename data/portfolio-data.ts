export interface ProjectItem {
  index?: string;
  title: string;
  tag?: string;
  category?: string;
  tagline?: string;
  badgeColor?: string;
  highlight?: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
  urlHost?: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const portfolioData = {
  personal: {
    name: "Abdulmujeeb Awodi",
    role: "Frontend Engineer | Next.js, React & Three.js",
    bio: "Front-end Engineer specializing in React, Next.js, and TypeScript, with expertise in interactive UI architecture using Three.js, React Three Fiber, and GSAP. Backed by a quantitative foundation in finance, I build high-performance e-commerce storefronts, scalable data dashboards, and 3D web experiences optimized for smooth rendering and sub-second response times.",
    location: "Kwara State, Nigeria",
    resumePdf: "/Abdulmujeeb_Awodi.pdf",
    avatar: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127850/profile-circle_umbpav.png",
    contact: {
      email: "awodiabdulmujeeb@gmail.com",
      linkedin: "https://www.linkedin.com/in/abdulmujeeb-awodi-067a3227b/",
      github: "https://github.com/codekid-cyber1",
    },
    about: "I am a Frontend Engineer and a final-year Finance student at Kwara State University (KWASU). My journey into tech started with a desire to understand not just how money works, but how to build the digital infrastructure that moves it. Currently, my academic research focuses on the effects of cooperative financing on living standards—giving me a unique, data-driven perspective when building platforms for financial inclusion. I don't just write code; I build solutions to real economic problems. When I'm not debugging Next.js or studying financial models, you can usually find me sweating it out in eFootball, running matches in Call of Duty, or zoning out to Asa and Juice WRLD."
  },
  experience: [
    {
      role: "Freelance Frontend Developer",
      period: "Early 2026 – Present",
      location: "Remote",
      category: "Client Work & Open Source",
      highlights: [
        {
          project: "3D Artist Portfolio Platform (Client Project)",
          description: "Engineered an interactive showcase using React Three Fiber, Three.js, and GSAP for a 3D product and automotive artist, deploying a high-performance 3D canvas pipeline."
        },
        {
          project: "WebGL Performance Tuning",
          description: "Optimized WebGL model loading and shader delivery, maintaining 60 FPS viewport interactions across desktop and mobile browsers without UI frame drops."
        },
        {
          project: "Open-Source Contributor (\"LinkVeil\")",
          description: "Refactored component hierarchies and navigation layouts for an open-source privacy management tool, resolving routing flickers and enforcing uniform design tokens."
        }
      ]
    }
  ],
  education: [
    {
      degree: "BSc Finance",
      institution: "Kwara State University (KWASU), Malete",
      period: "Expected 2026",
      tag: "Quantitative Foundation",
      focus: "Financial Modeling, Cooperative Financing, Micro-economics, Quantitative Analysis.",
      research: "Analyzing the effects of cooperative financing on living standards in the Ilorin metropolis, translating complex economic datasets into actionable empirical findings."
    }
  ],
  skills: [
    {
      category: "Frameworks & Languages",
      badge: "Core Stack",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Interactive & 3D Web",
      badge: "Motion & 3D",
      items: ["Three.js", "React Three Fiber (R3F)", "GSAP (ScrollTrigger)", "WebGL", "Canvas API"]
    },
    {
      category: "Core Engineering",
      badge: "Architecture",
      items: ["Responsive Architecture", "State Management", "API Integration", "Component Systems", "Data Visualization"]
    },
    {
      category: "Tools & Workflow",
      badge: "DevOps & Cloud",
      items: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Supabase", "Firebase", "PostgreSQL"]
    }
  ],
  projects: [
    {
      index: "01",
      title: "AETHER — Interactive Scrollytelling",
      tag: "Interactive Canvas & Motion",
      tagline: "Apple-style scroll-driven frame interpolation and interactive motion design.",
      badgeColor: "#0EA5E9",
      highlight: "Apple-style scroll-driven frame interpolation & HTML5 Canvas",
      description: "An interactive automotive showcase built to explore high-performance scrollytelling. Synchronized a 60-frame rendered sequence directly to viewport scroll depth using GSAP ScrollTrigger and an HTML5 2D Canvas pipeline to deliver butter-smooth 60 FPS motion without DOM strain.",
      video: "https://res.cloudinary.com/iyzdnb8b/video/upload/v1791128324/Aether_he7f8f.mp4",
      poster: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791128324/Aether_he7f8f.jpg",
      image: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791128324/Aether_he7f8f.jpg",
      urlHost: "github.com/codekid-cyber1/Aether",
      problem: "Rendering high-frame-rate scroll-driven sequences in standard DOM trees creates major layout thrashing and stutter on various devices.",
      solution: "Engineered an HTML5 2D Canvas rendering pipeline driven by GSAP ScrollTrigger to render a 60-frame sequence seamlessly tied to scroll depth at a locked 60 FPS.",
      techStack: ["Next.js", "React", "GSAP", "ScrollTrigger", "HTML5 Canvas", "Tailwind CSS"],
      links: {
        github: "https://github.com/codekid-cyber1/Aether.git"
      }
    },
    {
      index: "02",
      title: "Awodi — 3D Artist & Visual Showcase",
      tag: "Client Work / Commercial Project",
      category: "Client Work / Commercial Project",
      tagline: "Client Work / Commercial Project",
      badgeColor: "#E87040",
      highlight: "Bespoke dark-mode portfolio for 3D product & automotive artist",
      description: "Designed and engineered a bespoke visual portfolio for a 3D product and automotive artist. Built a high-performance, dark-mode aesthetic with fluid transitions, optimized media loading for high-resolution 3D renders, and seamless cross-device responsiveness.",
      video: "https://res.cloudinary.com/iyzdnb8b/video/upload/v1791127758/Awodi_Portfolio_y3qvw7.mp4",
      poster: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791127758/Awodi_Portfolio_y3qvw7.jpg",
      image: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791127758/Awodi_Portfolio_y3qvw7.jpg",
      urlHost: "awodi.vercel.app",
      problem: "Heavy 3D product visualizations and media assets typically degrade initial load performance and produce jerky page transitions.",
      solution: "Developed an ultra-performant dark-mode showcase with lazy media orchestration, fluid GSAP/Framer transitions, and full responsive fidelity.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP", "Vercel"],
      links: {
        live: "https://awodi.vercel.app/"
      }
    },
    {
      index: "03",
      title: "VeriScale",
      tag: "FinTech & Sales Analytics",
      badgeColor: "#10B981",
      highlight: "Real-time revenue, profit tracking & Supabase RLS",
      description: "An end-to-end sales analytics and inventory platform designed to help modern businesses monitor transactions, revenue, and profit margins in real-time.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127851/veriscale-shot_xnejd1.png",
      urlHost: "veri-scale-lac.vercel.app",
      problem: "Modern business owners struggle with disconnected spreadsheets and slow manual bookkeeping, resulting in delayed financial visibility and obscured net margins.",
      solution: "Engineered a high-performance dashboard with Supabase authentication, real-time transaction processing, and automated profit calculations backed by PostgreSQL Row-Level Security.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL"],
      links: {
        github: "https://github.com/codekid-cyber1/VeriScale",
        live: "https://veri-scale-lac.vercel.app/"
      }
    },
    {
      index: "04",
      title: "Microclimate",
      tag: "Real-Time Data Viz",
      badgeColor: "#3B82F6",
      highlight: "Sub-100ms multi-stream environmental charts",
      description: "A real-time environmental data visualization application aggregating live atmospheric metrics and sensor streams into clean, responsive visual analytics.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127851/microclimate-shot_dgowrh.png",
      urlHost: "microclimate-rho.vercel.app",
      problem: "Environmental data is often fragmented and difficult to interpret in real-time, making it hard for users to monitor local conditions effectively.",
      solution: "Built a unified dashboard that aggregates multiple data streams into intuitive visualizations, providing instant insights into micro-environmental changes.",
      techStack: ["React 19", "API Integration", "Tailwind CSS", "Data Viz"],
      links: {
        github: "https://github.com/codekid-cyber1/Microclimate.git",
        live: "https://microclimate-rho.vercel.app/"
      }
    }
  ],
  Allprojects: [
    {
      index: "01",
      title: "AETHER — Scrollytelling Showcase",
      tag: "Interactive Canvas & Motion",
      category: "Flagship Motion",
      tagline: "Apple-style scroll-driven frame interpolation and interactive motion design.",
      badgeColor: "#0EA5E9",
      description: "An interactive automotive showcase built to explore high-performance scrollytelling. Synchronized a 60-frame rendered sequence directly to viewport scroll depth using GSAP ScrollTrigger and an HTML5 2D Canvas pipeline to deliver butter-smooth 60 FPS motion without DOM strain.",
      video: "https://res.cloudinary.com/iyzdnb8b/video/upload/v1791128324/Aether_he7f8f.mp4",
      poster: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791128324/Aether_he7f8f.jpg",
      image: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791128324/Aether_he7f8f.jpg",
      problem: "Rendering high-frame-rate scroll-driven sequences in traditional web layouts triggers heavy DOM re-renders and frame drops on lower-powered devices.",
      solution: "Synchronized a 60-frame rendered sequence directly to viewport scroll depth using GSAP ScrollTrigger and an HTML5 2D Canvas pipeline to deliver butter-smooth 60 FPS motion without DOM strain.",
      techStack: ["Next.js", "React", "GSAP", "ScrollTrigger", "HTML5 Canvas", "Tailwind CSS"],
      links: {
        github: "https://github.com/codekid-cyber1/Aether.git"
      }
    },
    {
      index: "02",
      title: "Awodi — 3D Artist & Visual Showcase",
      tag: "Client Work / Commercial Project",
      category: "Client Work / Commercial Project",
      tagline: "Client Work / Commercial Project",
      badgeColor: "#E87040",
      description: "Designed and engineered a bespoke visual portfolio for a 3D product and automotive artist. Built a high-performance, dark-mode aesthetic with fluid transitions, optimized media loading for high-resolution 3D renders, and seamless cross-device responsiveness.",
      video: "https://res.cloudinary.com/iyzdnb8b/video/upload/v1791127758/Awodi_Portfolio_y3qvw7.mp4",
      poster: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791127758/Awodi_Portfolio_y3qvw7.jpg",
      image: "https://res.cloudinary.com/iyzdnb8b/video/upload/so_0/v1791127758/Awodi_Portfolio_y3qvw7.jpg",
      problem: "High-resolution 3D renders and complex transitions can lead to slow initial page paints and choppy user interactions without aggressive media optimization.",
      solution: "Designed and engineered a bespoke visual portfolio for a 3D product and automotive artist. Built a high-performance, dark-mode aesthetic with fluid transitions, optimized media loading for high-resolution 3D renders, and seamless cross-device responsiveness.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP", "Vercel"],
      links: {
        live: "https://awodi.vercel.app/"
      }
    },
    {
      index: "03",
      title: "VeriScale",
      tag: "FinTech & Sales Analytics",
      description: "An end-to-end sales analytics and inventory platform designed to help modern businesses monitor transactions, revenue, and profit margins in real-time.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127851/veriscale-shot_xnejd1.png",
      problem: "Modern business owners struggle with disconnected spreadsheets and slow manual bookkeeping, resulting in delayed financial visibility and obscured net margins.",
      solution: "Engineered a high-performance dashboard with Supabase authentication, real-time transaction processing, and automated profit calculations backed by PostgreSQL Row-Level Security.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL"],
      links: {
        github: "https://github.com/codekid-cyber1/VeriScale",
        live: "https://veri-scale-lac.vercel.app/"
      }
    },
    {
      index: "04",
      title: "Microclimate",
      tag: "Real-Time Data Viz",
      description: "A real-time environmental data visualization application, focusing on fast API integrations and clean data presentation.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127851/microclimate-shot_dgowrh.png",
      problem: "Environmental data is often fragmented and difficult to interpret in real-time, making it hard for users to monitor local conditions effectively.",
      solution: "Built a unified dashboard that aggregates multiple data streams into intuitive visualizations, providing instant insights into micro-environmental changes.",
      techStack: ["React", "API Integration", "Tailwind CSS"],
      links: {
        github: "https://github.com/codekid-cyber1/Microclimate.git",
        live: "https://microclimate-rho.vercel.app/"
      }
    },
    {
      index: "05",
      title: "Netflix Architecture Clone",
      tag: "Media Architecture",
      description: "A complex media catalog interface demonstrating advanced state management, dynamic API data fetching, and scalable component architecture.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791128435/netflix-shot_vhtuxa.png",
      problem: "Building a high-performance media catalog requires handling large datasets and complex state transitions without sacrificing UI responsiveness.",
      solution: "Implemented an optimized state management strategy and lazy-loading patterns to ensure smooth navigation and instant content updates across thousands of titles.",
      techStack: ["React", "API Integration", "State Management"],
      links: {
        github: "https://github.com/codekid-cyber1/Netflix-clone.git",
        live: "https://netflix-clone-neon-rho.vercel.app/"
      }
    },
    {
      index: "06",
      title: "XENON",
      tag: "Design Systems & SPA",
      description: "A high-performance single-page application (SPA) focused on modern layout architecture, optimized asset delivery, and engaging user interfaces.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791128374/xenon-shot_vgalxi.png",
      problem: "Modern SPAs often suffer from layout shifts and slow initial loads when dealing with heavy visual assets and complex grid systems.",
      solution: "Leveraged advanced CSS Grid techniques and asset optimization pipelines to create a rock-solid layout that remains performant across all device types.",
      techStack: ["React", "Tailwind CSS", "Responsive Design"],
      links: {
        github: "https://github.com/codekid-cyber1/XENON.git",
        live: "https://xenon-mocha.vercel.app/"
      }
    },
    {
      index: "07",
      title: "Ramadan Reveal",
      tag: "Event-Driven Engine",
      description: "An event-driven time tracking application featuring real-time date manipulation, dynamic intervals, and a culturally tailored user interface.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127852/ramadan-shot_bmdchg.png",
      problem: "Standard time-tracking tools lack the cultural context and specific interval logic required for religious observances like Ramadan.",
      solution: "Developed a specialized engine for real-time date manipulation and dynamic countdowns, wrapped in a UI that respects and enhances the user's cultural experience.",
      techStack: ["React", "Tailwind CSS", "State Management"],
      links: {
        github: "https://github.com/codekid-cyber1/Ramadan-Greeting-.git",
        live: "https://ramadan-greeting-theta.vercel.app/"
      }
    },
    {
      index: "08",
      title: "PAYLESS E-commerce System",
      tag: "E-Commerce & Supply Chain",
      description: "A specialized storefront and distribution platform designed for high-volume food commodity management and real-time order tracking.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127849/payless_ks01ko.png",
      problem: "Managing bulk food distribution requires a system that can synchronize high-frequency order requests with a backend administrative dashboard without lag.",
      solution: "Developed a centralized order monitoring suite and a streamlined frontend to handle dynamic requests for bulk commodities like rice and oil, ensuring efficient inventory tracking.",
      techStack: ["React", "Next.js", "Tailwind CSS", "State Management"],
      links: {
        github: "https://github.com/codekid-cyber1/payless.git",
        live: "https://payless-dusky.vercel.app/"
      }
    },
    {
      index: "09",
      title: "E-commerce Storefront",
      tag: "Retail & Cart Logic",
      description: "A responsive e-commerce application featuring intuitive product categorization, dynamic cart management, and seamless checkout flows.",
      image: "https://res.cloudinary.com/iyzdnb8b/image/upload/v1791127848/e-commerce_gnbvau.png",
      problem: "Providing a frictionless shopping experience that maintains high performance and fast load times regardless of inventory size.",
      solution: "Engineered a scalable architecture with optimized component rendering and state-driven cart logic to ensure immediate UI feedback during product interactions.",
      techStack: ["React", "Next.js", "Tailwind CSS", "State Management"],
      links: {
        github: "https://github.com/codekid-cyber1/ecommerce-ao92.git",
        live: "https://e-commerce-ao92.vercel.app/"
      }
    },
  ]
};
