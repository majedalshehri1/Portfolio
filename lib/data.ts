// Import type definitions for type safety and IntelliSense support
import { SiteData, ContactItem } from "./types";

/**
 * Main data object containing all portfolio content
 * Uses 'as const' for literal type inference and immutability
 */
export const data: SiteData = {
  about: `
When I start thinking about a new project, my first question is always: 

What’s the real problem people face in the real world that this project can solve as a digital solution?

As a software engineer, I focus on finding and documenting that real problem before writing a single line of code. I believe every successful project starts with a clear purpose - solving something that actually matters.

For me, it’s not just about building software; it’s about creating tools that make life a little easier, better, or more enjoyable for the people who use them.
  `.trim(),

  projects: [
    {
      slug: "yusr-accessible-map",
      title: "Yusr – Accessible Map",
      description:
        "An inclusive smart platform to help people with mobility impairments navigate public places with confidence.",
      image: "/projects/yusr-app/1.webp",
      year: "2025",
      url: "https://github.com/majedalshehri1/AccessibleMap",
    },
    {
      slug: "therapeutic-speech-oriented",
      title: "Therapeutic-Speech-Oriented",
      description:
        "' TALAQA ' combines gaming and speech therapy for young stutterers, offering an engaging experience with personalized plans and measurable progress.",
      image: "/projects/talaga-app/1.webp",
      year: "2024",
      url: "https://github.com/majedalshehri1/Therapeutic-Speech-Oriented",
    },
    {
      slug: "Athan-app",
      title: "Athan App",
      description:
        "' Athan ' is a modern web application designed to provide accurate prayer times based on your current location.",
      image: "/projects/athan-app/1.webp",
      year: "2024",
      url: "https://github.com/majedalshehri1/Prayer-Time-Api",
    },
  ],

  experience: [
    {
      company: "Wakeb",
      title: "Software Developer",
      period: "2025 – Now",
      location: "Riyadh",
      image: "/images/wakeb_logo.png",
    },
    {
      company: "Jeddah Chamber",
      title: "Software Engineer",
      period: "2024",
      location: "Jeddah",
      image: "/images/jeddah-chamber-logo.png",
    },
  ],
} as const; // Ensure immutability and literal type inference

/**
 * Named exports for convenient component consumption
 * Allows components to import only the data they need
 */
export const ABOUT = data.about;
export const PROJECTS = data.projects;
export const EXPERIENCE = data.experience;

/**
 * Contact information array - separate from main data object
 * Contains social media and professional contact methods
 * Each contact method includes label, display value, and actionable href
 */
export const CONTACTS: ContactItem[] = [
  {
    label: "GitHub",
    value: "github.com/majedalshehri1",
    href: "https://github.com/majedalshehri1",
  },
  {
    label: "Gmail",
    value: "engmajedas1@gmail.com",
    href: "mailto:engmajedas1@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/majedalshehri1",
    href: "https://www.linkedin.com/in/majedalshehri1/",
  },
];
