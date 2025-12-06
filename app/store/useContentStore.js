import { create } from "zustand";

export const useContentStore = create(() => ({
    header: {
        logoText: "AJ",
        navLinks: [
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Portfolio", href: "#projects" },
        ],
        contactButton: "Contact Me",
    },

    hero: {
        heroGreeting: "Hi, I am",
        heroName: "Ayush Jaiswal",
        heroTitle: "Front-end Developer • UI Engineer",
    },

    about: {
        aboutTitle: "Professional Summary",
        aboutDescriptionShort:
            "Senior Software Engineer with 6 years of experience in React.js, JavaScript, and related web development technologies.",
        aboutDescriptionLong: "Senior Software Engineer with 6 years of experience crafting high-performance React.js and Next.js applications, specializing in automation, UI engineering, and scalable frontend systems. I’ve built enterprise solutions for Adobe, PwC, and government platforms, improving workflows by up to 40% and enhancing user engagement through optimized UIs, API-driven architectures, and reusable components. Passionate about delivering clean, maintainable, and impactful digital experiences."

    },

    buttons: {
        readMore: "Read More"
    },

    watermarkWord: "AJ",
}));
