import { memo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/animations";

interface PageHeaderProps {
  title: string;
}

const PageHeader = memo(({ title }: PageHeaderProps) => {
  return (
    <motion.h1
      className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-16 tracking-tight"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {title}
    </motion.h1>
  );
});

PageHeader.displayName = "PageHeader";

export default PageHeader;
