import { Mail, Github, Linkedin, LucideIcon } from "lucide-react";

// Types
export interface ContactLink {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

// Contact Links - Update these with your real information
export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:engmajedas1@gmail.com",
    icon: Mail,
    description: "engmajedas1@gmail.com",
  },
  {
    name: "Github",
    href: "https://github.com/majedalshehri1",
    icon: Github,
    description: "@majedalshehri1",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/majedalshehri1/",
    icon: Linkedin,
    description: "Majed Alshehri",
  },
];
