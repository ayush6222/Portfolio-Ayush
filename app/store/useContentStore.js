import { create } from "zustand";

export const useContentStore = create(() => ({
  header: {
    logoText: "AJ",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contactButton: "Contact Me",
  },

  hero: {
    heroGreeting: "Hi, I am",
    heroName: "Ayush Jaiswal",
    heroTitle: "Front-end Developer • UI Engineer",
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
      href: "https://github.com/ayush42837272-eng",
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
      label: "Download Resume",
      href: "https://drive.google.com/file/d/1_LqHu4aS7mRxF8QBNv6mw2_2nbvwFCb-/view?usp=sharing",
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
  },
}));
