import { Project } from "@/data/projects";
import projectYusr from "@/assets/project-yusr.webp";
import projectTalaqa from "@/assets/project-talaqa.webp";
import talaqaMedal from "@/assets/talaqa-2nd-place-medal.jpeg";
import talaqaPoster from "@/assets/talaqa-our-poster.jpeg";
import talaqaAward from "@/assets/talaqa-2nd-place.jpeg";

// Map image names to actual imports
const imageMap: Record<string, string> = {
  talaqa: projectTalaqa,
  yusr: projectYusr,
  "talaqa-medal": talaqaMedal,
  "talaqa-poster": talaqaPoster,
  "talaqa-award": talaqaAward,
};

// Import all MDX files
const mdxFiles = import.meta.glob("/src/content/projects/*.mdx", {
  eager: true,
});

/**
 * Load all projects from MDX files
 * Converts MDX files into Project objects with metadata and content components
 */
export const loadProjects = (): Project[] => {
  const projects: Project[] = [];

  for (const path in mdxFiles) {
    const mdxModule = mdxFiles[path] as any;

    // Skip non-project files (like README)
    if (path.includes("README") || path.includes("EXAMPLE")) {
      continue;
    }

    // Handle both named and default exports
    const frontmatter = mdxModule.frontmatter;
    const MDXContent = mdxModule.default;

    // Skip if no valid frontmatter
    if (!frontmatter || !frontmatter.title) {
      console.warn(`Skipping ${path}: No valid frontmatter found`);
      continue;
    }

    // Extract slug from file path
    const slug = path.replace("/src/content/projects/", "").replace(".mdx", "");

    // Get image from map
    const image = imageMap[frontmatter.image] || projectTrailtype;

    projects.push({
      title: frontmatter.title,
      description: frontmatter.description,
      year: frontmatter.year,
      image,
      slug,
      rawContent: [], // Content will be rendered by MDX component
      githubUrl: frontmatter.githubUrl,
      liveUrl: frontmatter.liveUrl,
      techStack: frontmatter.techStack || [],
      MDXContent, // Store the MDX component for rendering
    });
  }

  // Sort projects by year (newest first)
  return projects.sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return yearB - yearA;
  });
};

/**
 * Get a project by its slug
 */
export const getProjectBySlug = (slug: string) => {
  const projects = loadProjects();
  return projects.find((project) => project.slug === slug);
};

/**
 * Get a project with navigation (prev/next)
 */
export const getProjectWithNavigation = (slug: string) => {
  const projects = loadProjects();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return undefined;

  const project = projects[index];
  const prevProject =
    index > 0
      ? { slug: projects[index - 1].slug, title: projects[index - 1].title }
      : undefined;
  const nextProject =
    index < projects.length - 1
      ? { slug: projects[index + 1].slug, title: projects[index + 1].title }
      : undefined;

  return { ...project, prevProject, nextProject };
};
