import { create } from "zustand";

export const useContentStore = create(() => ({
  header: {
    logoText: "AJ",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contactButton: "Contact Me",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
  },

  hero: {
    heroGreeting: "Hi, I am",
    heroName: "Ayush Jaiswal",
    heroTitle: "Front-end Developer • UI Developer",
    seoDescription:"Ayush Jaiswal is a Senior Frontend Developer with 6+ years of experience specializing in React.js, Next.js, TypeScript, and scalable, high-performance web applications."
  },

  highlight: {
    aboutTitle: "Professional Summary",
    aboutDescriptionShort:
      "Senior Software Engineer with 6 years of experience in React.js, JavaScript, and related web development technologies.",
    aboutDescriptionLong:
      "Senior Software Engineer with 6 years of experience crafting high-performance React.js and Next.js applications, specializing in automation, UI engineering, and scalable frontend systems. I’ve built enterprise solutions for Adobe, PwC, and government platforms, improving workflows by up to 40% and enhancing user engagement through optimized UIs, API-driven architectures, and reusable components. Passionate about delivering clean, maintainable, and impactful digital experiences.",
  },

  buttons: {
    readMore: "Read More",
    readLess: "Read Less",
  },

  watermarkWord: "AJ",

  socialLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-jais/",
      icon: "/social/linkedin.svg",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/ayush6222",
      icon: "/social/github.svg",
    },
    {
      id: "leetcode",
      label: "LeetCode",
      href: "https://leetcode.com/u/Ayush622/",
      icon: "/social/leetcode.svg",
    },
    {
      id: "download",
      label: "Resume",
      href: "https://drive.google.com/drive/folders/1ZaudOS-4Gtb2zmYHY3wEMMal0GS8o6I7?usp=drive_link",
      icon: "/social/download.svg",
    },
    {
      id: "mail",
      label: "Email",
      href: "mailto:ayush42837272@gmail.com",
      icon: "/social/email.svg",
    },
  ],

  about: {
    title: "ABOUT ME",
    subtitle:
      "Passionate about crafting modern, user-friendly web experiences.",
    sections: [
      {
        id: 1,
        heading: "UI / UX Engineering",
        description:
          "I craft intuitive, user-focused interfaces with clean layouts, accessibility standards, and modern design principles.",
        icons: "/about/UI.png",
      },
      {
        id: 2,
        heading: "Frontend Development",
        description:
          "I build high-performance, scalable web applications using React.js, JavaScript, and modern frontend tooling.",
        icons: "/about/coding.png",
      },
      {
        id: 3,
        heading: "System Enhancement & Optimization",
        description:
          "I optimize existing systems through performance tuning, reusable architecture, and engineering best practices.",
        icons: "/about/development.png",
      },
    ],
  },
  skills: {
    usingNow: [
      { id: 1, label: "HTML5", icon: "/skills/HTML5.svg" },
      { id: 2, label: "CSS3", icon: "/skills/CSS3.svg" },
      { id: 3, label: "Sass", icon: "/skills/Sass.svg" },
      { id: 4, label: "JavaScript", icon: "/skills/JavaScript.svg" },
      { id: 5, label: "React", icon: "/skills/React.svg" },
      { id: 6, label: "Redux", icon: "/skills/Redux.svg" },
      { id: 7, label: "Git", icon: "/skills/Git.svg" },
      { id: 8, label: "Tailwind CSS", icon: "/skills/Tailwind CSS.svg" },
    ],

    learning: [
      { id: 9, label: "Node.js", icon: "/skills/Node.js.svg" },
      { id: 10, label: "AWS", icon: "/skills/aws.svg" },
      { id: 11, label: "MongoDB", icon: "/skills/MongoDB.svg" },
      { id: 12, label: "MySQL", icon: "/skills/MySQL.svg" },
      { id: 13, label: "TypeScript", icon: "/skills/TypeScript.svg" },
    ],

    otherSkills: [
      { id: 14, label: "Next.js", icon: "/skills/next.svg" },
      { id: 15, label: "ESLint", icon: "/skills/ESLint.svg" },
      { id: 16, label: "Webpack", icon: "/skills/Webpack.svg" },
      { id: 17, label: "Vite", icon: "/skills/Vite.svg" },
      {
        id: 18,
        label: "VS Code",
        icon: "/skills/Visual Studio Code (VS Code).svg",
      },
      { id: 19, label: "Babel", icon: "/skills/Babel.svg" },
      { id: 20, label: "Jest", icon: "/skills/Jest.svg" },
      { id: 21, label: "AngularJS", icon: "/skills/AngularJS.svg" },
    ],
    rotationSkills:[
      { id: 1, label: "HTML5", icon: "/skills/HTML5.svg" },
      { id: 2, label: "JavaScript", icon: "/skills/JavaScript.svg" },
      { id: 3, label: "React", icon: "/skills/React.svg" },
      { id: 4, label: "Next.js", icon: "/skills/next.svg" },
      { id: 5, label: "Git", icon: "/skills/Git.svg" },
      {
        id: 6,
        label: "VS Code",
        icon: "/skills/Visual Studio Code (VS Code).svg",
      },
    ]
  },
  projects: [
    {
      id: 1,
      name: "Adobe Automation",
      description:
        "Developed an automated content-production pipeline integrating Workfront Fusion with Photoshop, Firefly, Frame.io, and Dropbox. The system generated design assets, applied metadata rules, and triggered workflows without manual intervention. Built modular automation steps that improved consistency and eliminated repetitive design tasks.",
      tech: [
        "React.js",
        "JavaScript",
        "Workfront Fusion",
        "Custom Models",
        "Firefly API",
        "Photoshop API",
      ],
      mainImage: "/Projects/Adobe/main.png",
      logo: "/Projects/Adobe/logo.png",
      images: [
        { id: 1, url: "/Projects/Adobe/1.png" },
        { id: 2, url: "/Projects/Adobe/2.png" },
        { id: 3, url: "/Projects/Adobe/3.png" },
        { id: 4, url: "/Projects/Adobe/4.png" },
        { id: 5, url: "/Projects/Adobe/5.png" },
        { id: 6, url: "/Projects/Adobe/6.png" },
        { id: 7, url: "/Projects/Adobe/7.png" },
      ],
      github: "",
      liveLink: "",
    },

    {
      id: 2,
      name: "RedBull Mobile - Oman",
      description:
        "Developed a mobile-first KYC verification system with barcode scanning, image uploads, live GPS capture, and real-time backend validation. Engineered secure flows for field agents and built intuitive UI screens enabling faster onboarding.",
      tech: [
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "HTML/CSS",
        "REST APIs",
        "Tailwind CSS",
        "Internationalization",
        "Webpack",
      ],
      mainImage: "/Projects/RedBull/main.png",
      logo: "/Projects/RedBull/logo.png",
      images: [
        { id: 1, url: "/Projects/RedBull/1.png" },
        { id: 2, url: "/Projects/RedBull/2.png" },
        { id: 3, url: "/Projects/RedBull/3.png" },
        { id: 5, url: "/Projects/RedBull/5.png" },
      ],
      liveLink: "https://www.redbullmobile.om/en",
    },
    {
      id: 3,
      name: "Bharat Mandapam",
      description:
        "Designed a hall booking and event workflow system with modules for approvals, officer assignments, event categorization, dynamic tables, and reporting. Improved system UX through reusable Angular components and structured UI layouts.",
      tech: ["AngularJS", "JavaScript", "HTML/CSS", "REST APIs", "Bootstrap"],
      mainImage: "/Projects/BharatMandapam/main.png",
      logo: "/Projects/BharatMandapam/logo.jpeg",
      images: [
        { id: 1, url: "/Projects/BharatMandapam/1.png" },
        { id: 2, url: "/Projects/BharatMandapam/2.png" },
        { id: 3, url: "/Projects/BharatMandapam/3.png" },
        { id: 4, url: "/Projects/BharatMandapam/4.png" },
        { id: 5, url: "/Projects/BharatMandapam/5.png" },
      ],
      liveLink: "https://booking.indiatradefair.com/",
    },
    {
      id: 4,
      name: "iBaseT B2B Portal",
      description:
        "Built enterprise B2B dashboard components including dynamic charts, analytics widgets, and multi-step forms. Revamped the legacy UI to modern standards and improved performance using optimized rendering and a reusable architecture.",
      tech: [
        "React.js",
        "JavaScript",
        "Chart.js",
        "HTML/CSS",
        "REST APIs",
        "Redux",
        "Grommet",
        "Middleware Saga",
        "Webpack",
        "Lerna",
      ],
      mainImage: "/Projects/iBaseT/main.png",
      logo: "/Projects/iBaseT/logo.jpg",
      images: [
        { id: 1, url: "/Projects/iBaseT/1.jpg" },
        { id: 2, url: "/Projects/iBaseT/2.jpg" },
        { id: 3, url: "/Projects/iBaseT/3.jpg" },
        { id: 4, url: "/Projects/iBaseT/4.jpg" },
        { id: 5, url: "/Projects/iBaseT/5.jpg" },
        { id: 6, url: "/Projects/iBaseT/6.jpg" },
        { id: 7, url: "/Projects/iBaseT/7.jpg" },
        { id: 8, url: "/Projects/iBaseT/8.jpg" },
        { id: 9, url: "/Projects/iBaseT/9.jpg" },
      ],
    },
    {
      id: 5,
      name: "Umang",
      description:
        "Contributed to India’s national government platform by implementing new service modules, improving UI flows, and enhancing responsive design. Worked on integrating service APIs and improving user navigation across critical modules.",
      tech: [
        "React.js",
        "JavaScript",
        "HTML/CSS",
        "REST APIs",
        "Bootstrap",
        "Redux",
      ],
      mainImage: "/Projects/Umang/main.png",
      logo: "/Projects/Umang/logo.jpg",
      images: [
        { id: 1, url: "/Projects/Umang/1.png" },
        { id: 2, url: "/Projects/Umang/2.png" },
        { id: 3, url: "/Projects/Umang/3.png" },
        { id: 4, url: "/Projects/Umang/4.png" },
        { id: 5, url: "/Projects/Umang/5.png" },
        { id: 6, url: "/Projects/Umang/6.png" },
      ],
      liveLink: "https://web.umang.gov.in/landing/",
    },
    {
      id: 6,
      name: "Portfolio Website",
      description:
        "Built a responsive portfolio website using Next.js, showcasing projects and skills. Implemented dark mode support and optimized performance for fast loading.",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        
      ],
      mainImage: "/Projects/Portfolio/logo.png",
      logo: "/Projects/Portfolio/logo.png",
      images: [
        { id: 1, url: "/Projects/Portfolio/1.png" },
        { id: 2, url: "/Projects/Portfolio/2.png" },
        { id: 3, url: "/Projects/Portfolio/3.png" },
        { id: 4, url: "/Projects/Portfolio/4.png" },
        { id: 5, url: "/Projects/Portfolio/5.png" },
        { 
          id: 6, url: "/Projects/Portfolio/6.png"
        }

      ],
      liveLink: "https://ayushjaiswal.vercel.app/",
      github:"https://github.com/ayush42837272-eng/Portfolio-Ayush"
    },
  ],
}));
