import {
  loadBlogPosts,
  getBlogPostBySlug as getBlogPostBySlugFromLoader,
} from "@/lib/blog-loader";

export type BlogCategory =
  | "CODE"
  | "DEVOPS"
  | "DESIGN"
  | "BUSINESS"
  | "RANDOM"
  | "TESTING";

export interface ContentBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  category: BlogCategory;
  intro: string;
  image?: string;
  content: ContentBlock[];
  MDXContent?: (props: any) => JSX.Element;
  dir?: "ltr" | "rtl"; // Text direction for i18n support
}

// Load blog posts from MDX files
export const blogPosts: BlogPost[] = loadBlogPosts();

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return getBlogPostBySlugFromLoader(slug);
};
