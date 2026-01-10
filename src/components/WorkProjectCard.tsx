import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OptimizedImage from "@/components/shared/OptimizedImage";

interface WorkProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const WorkProjectCard = memo(({ title, description, image, slug }: WorkProjectCardProps) => {
  return (
    <Link to={`/work/${slug}`}>
      <motion.article
        className="group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg mb-3">
          <OptimizedImage
            src={image}
            alt={title}
            aspectRatio="aspect-[16/10]"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <h3 className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
          {title}
        </h3>
      </motion.article>
    </Link>
  );
});

WorkProjectCard.displayName = "WorkProjectCard";

export default WorkProjectCard;
