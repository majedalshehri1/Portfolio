import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkSectionHeaderProps {
  title: string;
  link: string;
}

const WorkSectionHeader = memo(({ title, link }: WorkSectionHeaderProps) => {
  return (
    <Link to={link} className="group inline-flex items-center gap-2 mb-8">
      <h2 className="text-2xl md:text-3xl font-medium text-foreground">
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
  );
});

WorkSectionHeader.displayName = "WorkSectionHeader";

export default WorkSectionHeader;
