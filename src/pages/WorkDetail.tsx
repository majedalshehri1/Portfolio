import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import OptimizedImage from "@/components/shared/OptimizedImage";
import MDXComponents from "@/components/MDXComponents";
import { getProjectWithNavigation } from "@/data/projects";
import { pageVariants } from "@/lib/animations";

const WorkDetail = memo(() => {
  const { slug } = useParams();
  const project = getProjectWithNavigation(slug || "");

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-2xl text-foreground">Project not found</h1>
          <Link to="/work" className="text-primary mt-4 inline-block">
            ← Back to Work
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumb
            backLink="/work"
            backLabel="All Projects"
            currentLabel={project.title}
          />

          {/* Title */}
          <motion.h1
            className="hero-name text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* Project Metadata */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-[.7px] border-[#5e5e5e56] text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </motion.div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Featured Image */}
          <motion.div
            className="rounded-xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <OptimizedImage
              src={project.image}
              alt={project.title}
              aspectRatio="aspect-video"
              containerClassName="rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {project.MDXContent ? (
              <project.MDXContent components={MDXComponents} />
            ) : (
              // Fallback for legacy content format
              project.rawContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6"
                >
                  {paragraph}
                </p>
              ))
            )}
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {project.prevProject ? (
              <Link
                to={`/work/${project.prevProject.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ‹ {project.prevProject.title}
              </Link>
            ) : (
              <span />
            )}
            {project.nextProject && (
              <Link
                to={`/work/${project.nextProject.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {project.nextProject.title} ›
              </Link>
            )}
          </motion.div>
        </div>
      </article>
    </Layout>
  );
});

WorkDetail.displayName = "WorkDetail";

export default WorkDetail;
