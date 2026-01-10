import {
  loadProjects,
  getProjectBySlug as getProjectBySlugFromLoader,
  getProjectWithNavigation as getProjectWithNavigationFromLoader,
} from "@/lib/project-loader";

// Types
export interface Project {
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
  rawContent: string[];
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  MDXContent?: (props: any) => JSX.Element;
}

// Load projects from MDX files
export const projects: Project[] = loadProjects();

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getProjectBySlugFromLoader(slug);
};

export const getProjectWithNavigation = (slug: string) => {
  return getProjectWithNavigationFromLoader(slug);
};
