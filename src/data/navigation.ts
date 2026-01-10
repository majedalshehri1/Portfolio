// Types
export interface NavLink {
  name: string;
  path: string;
}

// Navigation Links
export const navLinks: NavLink[] = [
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// Site Information
export const siteInfo = {
  name: "Majed Alshehri",
  logo: "ma",
  copyright: "© Majed Alshehri | 2026",
  bio: "Software Engineer passionate about building clean, functional products that solve real problems.",
};
