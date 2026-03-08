import { BlogPost, BlogCategory } from "@/data/blog-posts";
import { BLOG_IMAGES } from "@/config/images";

// Import all MDX files
const mdxFiles = import.meta.glob("/src/content/blog/*.mdx", { eager: true });

/**
 * Cache for loaded blog posts to avoid re-parsing on every call
 * @private
 */
let postsCache: BlogPost[] | null = null;

/**
 * Load all blog posts from MDX files
 * Converts MDX files into BlogPost objects with metadata and content components
 *
 * @returns Array of blog posts sorted by date (newest first)
 *
 * @example
 * ```ts
 * const posts = loadBlogPosts();
 * console.log(posts.length); // Number of available posts
 * ```
 *
 * Note: Results are cached after first load for performance
 */
export const loadBlogPosts = (): BlogPost[] => {
  // Return cached posts if available
  if (postsCache) {
    return postsCache;
  }

  const posts: BlogPost[] = [];

  for (const path in mdxFiles) {
    const mdxModule = mdxFiles[path] as any;

    // Skip non-blog files (like README)
    if (path.includes("README") || path.includes("EXAMPLE")) {
      continue;
    }

    // Handle both named and default exports
    const frontmatter = mdxModule.frontmatter;
    const MDXContent = mdxModule.default;

    // Skip if no valid frontmatter
    if (!frontmatter || !frontmatter.title) {
      console.warn(`Skipping ${path}: No valid frontmatter found`);
      continue;
    }

    // Extract slug from file path
    const slug = path.replace("/src/content/blog/", "").replace(".mdx", "");

    posts.push({
      title: frontmatter.title,
      date: frontmatter.date,
      slug,
      category: frontmatter.category as BlogCategory,
      intro: frontmatter.intro,
      image: frontmatter.image ? BLOG_IMAGES[frontmatter.image as keyof typeof BLOG_IMAGES] : undefined,
      content: [], // Content will be rendered by MDX component
      MDXContent, // Store the MDX component for rendering
      dir: frontmatter.dir as "ltr" | "rtl" | undefined, // Text direction for i18n
    });
  }

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Cache the results for subsequent calls
  postsCache = sortedPosts;

  return sortedPosts;
};

/**
 * Get a blog post by its slug
 */
export const getBlogPostBySlug = (slug: string) => {
  const posts = loadBlogPosts();
  return posts.find((post) => post.slug === slug);
};
