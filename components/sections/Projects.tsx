import Image from "next/image";
import { PROJECTS } from "@/lib/data";

// Props interface for type safety and component flexibility
type ProjectsProps = {
  limit?: number; // Optional prop to limit the number of displayed projects
  isAboveTheFold?: boolean;
};

export default function Projects({ limit, isAboveTheFold }: ProjectsProps) {
  // Sort projects by year in descending order (newest first)
  // Uses spread operator to avoid mutating the original array
  const sorted = [...PROJECTS].sort((a, b) => {
    const ay = parseInt(a.year ?? "0", 10); // Parse year with fallback to "0"
    const by = parseInt(b.year ?? "0", 10); // Parse year with fallback to "0"
    return by - ay; // Sort in descending order (newest first)
  });

  const list = typeof limit === "number" ? sorted.slice(0, limit) : sorted;

  // Determine if this is the first (LCP) image
  const isLCP = isAboveTheFold;

  return (
    <section className="container section-y" aria-labelledby="projects-title">
      <h2 id="projects-title" className="sr-only">
        Projects
      </h2>

      {/* Map through filtered and sorted projects */}
      {list.map((project, index) => {
        // Only the first image should be treated as LCP (Largest Contentful Paint)
        const isFirstImage = index === 0 && isLCP;

        return (
          <div key={project.slug}>
            <article className="rounded-[28px] border border-border bg-card shadow-card overflow-hidden">
              <div className="p-2 sm:p-6 md:p-8">
                <div className="w-full overflow-hidden rounded-[16px] border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={900}
                    className="w-full h-auto block"
                    priority={isFirstImage}
                    loading={isFirstImage ? "eager" : "lazy"}
                    fetchPriority={isFirstImage ? "high" : "auto"}
                    decoding="async"
                    sizes="(max-width: 900px) 100vw, 900px"
                  />
                </div>
              </div>
            </article>

            <div className="p-4 sm:p-6 md:p-8 mb-8">
              <h3 className="font-semibold text-lg mt-4">{project.title}</h3>
              <p className="text-sm text-mute">{project.description}</p>

              {project.url && (
                <div className="mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink hover:underline"
                  >
                    View project
                  </a>
                </div>
              )}

              <hr className="my-5" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
