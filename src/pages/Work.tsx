import { memo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import WorkProjectCard from "@/components/WorkProjectCard";
import PageHeader from "@/components/shared/PageHeader";
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import Pagination from "@/components/shared/Pagination";
import { projects } from "@/data/projects";
import { usePagination } from "@/hooks/use-pagination";
import { containerVariants, itemVariants, fadeInVariants } from "@/lib/animations";

const ITEMS_PER_PAGE = 6;

const Work = memo(() => {
  const { 
    currentPage, 
    totalPages, 
    paginatedItems, 
    setCurrentPage 
  } = usePagination({
    items: projects,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <PageHeader title="Work" />

          {/* Projects Section */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle title="Projects" count={projects.length} />
            <Divider className="mb-8" />

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={currentPage}
            >
              {paginatedItems.map((project) => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <WorkProjectCard {...project} />
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

Work.displayName = "Work";

export default Work;
