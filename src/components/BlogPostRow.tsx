import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { BlogPost, BlogCategory } from "@/data/blog-posts";

// Category color classes using CSS tokens
const categoryColorClasses: Record<BlogCategory, string> = {
  CODE: "text-[hsl(var(--category-code))]",
  DEVOPS: "text-[hsl(var(--category-devops))]",
  DESIGN: "text-[hsl(var(--category-design))]",
  BUSINESS: "text-[hsl(var(--category-business))]",
  RANDOM: "text-[hsl(var(--category-random))]",
};

type BlogPostRowProps = Pick<BlogPost, 'title' | 'date' | 'slug' | 'category'>;

const BlogPostRow = memo(({ title, date, slug, category }: BlogPostRowProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <motion.div
        className="flex items-center py-5 border-b border-border/30 group cursor-pointer transition-colors duration-200"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-4 w-44 shrink-0">
          <span className="text-sm text-muted-foreground font-light">
            {date}
          </span>
          <span className={`text-xs font-medium ${categoryColorClasses[category]}`}>
            {category}
          </span>
        </div>
        <h3 className="text-foreground font-medium group-hover:text-muted-foreground transition-colors duration-200">
          {title}
        </h3>
      </motion.div>
    </Link>
  );
});

BlogPostRow.displayName = "BlogPostRow";

export default BlogPostRow;
