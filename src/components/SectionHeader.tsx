import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInVariants } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

const SectionHeader = memo(({ title, viewAllLink }: SectionHeaderProps) => {
  return (
    <motion.div
      className="flex items-center justify-between mb-6"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {viewAllLink ? (
        <Link to={viewAllLink} className="group inline-flex items-center gap-2">
          <h2 className="section-title text-2xl md:text-3xl font-medium text-foreground">
            {title}
          </h2>
          <motion.span
            className="inline-flex items-center justify-center"
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ArrowUpRight 
              className="w-6 h-6 text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              strokeWidth={2}
            />
          </motion.span>
        </Link>
      ) : (
        <h2 className="section-title text-2xl md:text-3xl font-medium text-foreground">
          {title}
        </h2>
      )}
    </motion.div>
  );
});

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
