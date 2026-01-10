import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
}

const ProjectCard = ({ title, description, year, image, slug }: ProjectCardProps) => {
  return (
    <Link to={`/work/${slug}`}>
      <motion.article
        className="project-card group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Year Overlay - adapts to theme */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl md:text-8xl font-light tracking-tight select-none transition-all duration-300 text-white/30 group-hover:text-white/50 dark:text-white/30 dark:group-hover:text-white/50">
              {year}
            </span>
          </div>
          {/* Gradient overlay for better text visibility in light mode */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 dark:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.article>
    </Link>
  );
};

export default ProjectCard;
