import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import OptimizedImage from "@/components/shared/OptimizedImage";
import MDXComponents from "@/components/MDXComponents";
import { getBlogPostBySlug } from "@/data/blog-posts";
import { pageVariants } from "@/lib/animations";

const BlogDetail = memo(() => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-2xl text-foreground">Post not found</h1>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumb
            backLink="/blog"
            backLabel="All Posts"
            currentLabel={post.title}
            date={post.date}
          />

          {/* Title */}
          <motion.h1
            className="hero-name text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
          >
            {post.title}
          </motion.h1>

          {/* Intro */}
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.intro}
          </motion.p>

          {/* Featured Image */}
          {post.image && (
            <motion.div
              className="rounded-xl overflow-hidden mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <OptimizedImage
                src={post.image}
                alt={post.title}
                aspectRatio="aspect-auto"
                containerClassName="rounded-xl"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            dir={post.dir || "ltr"}
            className={`prose prose-lg max-w-none ${post.dir === "rtl" ? "text-right" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {post.MDXContent ? (
              <post.MDXContent components={MDXComponents} />
            ) : (
              // Fallback for legacy content format
              post.content.map((block, index) => (
                block.type === 'heading' ? (
                  <h2 key={index} className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6 leading-tight">
                    {block.text}
                  </h2>
                ) : (
                  <p key={index} className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                    {block.text}
                  </p>
                )
              ))
            )}
          </motion.div>
        </div>
      </article>
    </Layout>
  );
});

BlogDetail.displayName = "BlogDetail";

export default BlogDetail;
