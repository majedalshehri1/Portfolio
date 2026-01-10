import { memo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import BlogPostRow from "@/components/BlogPostRow";
import PageHeader from "@/components/shared/PageHeader";
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import Pagination from "@/components/shared/Pagination";
import { blogPosts } from "@/data/blog-posts";
import { usePagination } from "@/hooks/use-pagination";
import { containerVariants, itemVariants, fadeInVariants } from "@/lib/animations";

const ITEMS_PER_PAGE = 5;

const Blog = memo(() => {
  const { 
    currentPage, 
    totalPages, 
    paginatedItems, 
    setCurrentPage 
  } = usePagination({
    items: blogPosts,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <PageHeader title="Blog" />

          {/* Posts Section */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle title="Posts" count={blogPosts.length} />
            <Divider className="mb-4" />

            {/* Posts List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={currentPage}
            >
              {paginatedItems.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <BlogPostRow {...post} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
});

Blog.displayName = "Blog";

export default Blog;
