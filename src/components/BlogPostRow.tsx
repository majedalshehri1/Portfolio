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
  TESTING: "text-[hsl(var(--category-testing))]",
};

type BlogPostRowProps = Pick<
  BlogPost,
  "title" | "date" | "slug" | "category" | "intro"
>;

const BlogPostRow = memo(
  ({ title, date, slug, category, intro }: BlogPostRowProps) => {
    return (
      <Link to={`/blog/${slug}`}>
        <motion.div
          className="py-6 border-b border-border/30 group cursor-pointer transition-colors duration-200"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {/* Date and Category */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm text-muted-foreground font-light">
              {date}
            </span>
            <span
              className={`text-xs font-semibold uppercase tracking-wider ${categoryColorClasses[category]}`}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors duration-200 leading-tight">
            {title}
          </h3>

          {/* Intro/Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {intro}
          </p>

          {/* Read More */}
          <span className="text-xs text-primary font-medium group-hover:underline">
            Read →
          </span>
        </motion.div>
      </Link>
    );
  },
);

BlogPostRow.displayName = "BlogPostRow";

export default BlogPostRow;
