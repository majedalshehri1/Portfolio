export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  year?: string;
  url?: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location?: string;
  image?: string;
};

export type SiteData = {
  about: string;
  projects: Project[];
  experience: ExperienceItem[];
};
export type ContactItem = {
  label: "GitHub" | "Gmail" | "LinkedIn";
  value: string;
  href: string;
};
