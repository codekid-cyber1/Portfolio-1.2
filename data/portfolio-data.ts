export const portfolioData = {
  personal: {
    name: "Abdulmujeeb Awodi",
    role: "Frontend Engineer | Next.js & React",
    bio: "I combine a background in Finance with modern frontend architecture to build high-performance applications. From real-time environmental data visualizers to dynamic event-driven interfaces, I focus on bridging the gap between heavy logic and seamless, engaging user experiences.",
    location: "Kwara State, Nigeria",
    contact: {
      email: "awodiabdlmujeeb@gmail.com",
      linkedin: "https://www.linkedin.com/in/abdulmujeeb-awodi-067a3227b/",
      github: "https://github.com/codekid-cyber1",
    },
    about: "I am a Frontend Engineer and a final-year Finance student at Kwara State University (KWASU). My journey into tech started with a desire to understand not just how money works, but how to build the digital infrastructure that moves it. Currently, my academic research focuses on the effects of cooperative financing on living standards—giving me a unique, data-driven perspective when building platforms for financial inclusion. I don't just write code; I build solutions to real economic problems. When I'm not debugging Next.js or studying financial models, you can usually find me sweating it out in eFootball, running matches in Call of Duty, or zoning out to Asa and Juice WRLD."
  },
  education: [
    {
      degree: "BSc Finance",
      institution: "Kwara State University (KWASU), Malete",
      details: "Bridging financial modeling and cooperative financing concepts with technical product development."
    }
  ],
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Core Engineering", items: ["State Management", "API Integration", "Data Visualization"] },
    { category: "Tools & Workflow", items: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Antigravity"] }
  ],
  projects: [
    {
      title: "Microclimate",
      description: "A real-time environmental data visualization application, focusing on fast API integrations and clean data presentation.",
      image: "/microclimate-shot.png",
      problem: "Environmental data is often fragmented and difficult to interpret in real-time, making it hard for users to monitor local conditions effectively.",
      solution: "Built a unified dashboard that aggregates multiple data streams into intuitive visualizations, providing instant insights into micro-environmental changes.",
      techStack: ["React", "API Integration", "Tailwind CSS"],
      links: { github: "https://github.com/codekid-cyber1/Microclimate.git", live: "https://microclimate-rho.vercel.app/" }
    },
    {
      title: "Netflix Architecture Clone",
      description: "A complex media catalog interface demonstrating advanced state management, dynamic API data fetching, and scalable component architecture.",
      image: "/netflix-shot.png",
      problem: "Building a high-performance media catalog requires handling large datasets and complex state transitions without sacrificing UI responsiveness.",
      solution: "Implemented an optimized state management strategy and lazy-loading patterns to ensure smooth navigation and instant content updates across thousands of titles.",
      techStack: ["React", "API Integration", "State Management"],
      links: { github: "https://github.com/codekid-cyber1/Netflix-clone.git", live: "https://netflix-clone-neon-rho.vercel.app/" }
    },
    {
      title: "XENON",
      description: "A high-performance single-page application (SPA) focused on modern layout architecture, optimized asset delivery, and engaging user interfaces.",
      image: "/xenon-shot.png",
      problem: "Modern SPAs often suffer from layout shifts and slow initial loads when dealing with heavy visual assets and complex grid systems.",
      solution: "Leveraged advanced CSS Grid techniques and asset optimization pipelines to create a rock-solid layout that remains performant across all device types.",
      techStack: ["React", "Tailwind CSS", "Responsive Design"],
      links: { github: "https://github.com/codekid-cyber1/XENON.git", live: "https://xenon-mocha.vercel.app/" }
    },
    {
      title: "Ramadan Reveal",
      description: "An event-driven time tracking application featuring real-time date manipulation, dynamic intervals, and a culturally tailored user interface.",
      image: "/ramadan-shot.png",
      problem: "Standard time-tracking tools lack the cultural context and specific interval logic required for religious observances like Ramadan.",
      solution: "Developed a specialized engine for real-time date manipulation and dynamic countdowns, wrapped in a UI that respects and enhances the user's cultural experience.",
      techStack: ["React", "Tailwind CSS", "State Management"],
      links: { github: "https://github.com/codekid-cyber1/Ramadan-Greeting-.git", live: "https://ramadan-greeting-theta.vercel.app/" }
    }
  ]
};
