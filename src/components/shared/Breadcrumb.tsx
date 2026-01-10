import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/animations";

interface BreadcrumbProps {
  backLink: string;
  backLabel: string;
  currentLabel: string;
  date?: string;
}

const Breadcrumb = memo(({ backLink, backLabel, currentLabel, date }: BreadcrumbProps) => {
  return (
    <motion.div
      className="flex items-center justify-between mb-6"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2 text-sm">
        <Link 
          to={backLink} 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {backLabel}
        </Link>
        <span className="text-muted-foreground">|</span>
        <span className="text-foreground font-medium">{currentLabel}</span>
      </div>
      {date && (
        <span className="text-sm text-muted-foreground">{date}</span>
      )}
    </motion.div>
  );
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
