import { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import BlogPostRow from "@/components/BlogPostRow";
import SectionHeader from "@/components/SectionHeader";
import WorkSectionHeader from "@/components/WorkSectionHeader";
import MacBookMockup from "@/components/MacBookMockup";
import { projects, type Project } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";
import { siteInfo } from "@/data/navigation";
import { containerVariants, itemVariants, scaleVariants, fadeInVariants } from "@/lib/animations";

// Hero Section Component
const HeroSection = memo(() => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 tracking-tight"
            variants={itemVariants}
          >
            {siteInfo.name}
          </motion.h1>

          {/* Bio */}
          <motion.div
            className="max-w-2xl"
            variants={itemVariants}
          >
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
              {siteInfo.bio}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

// Number of items to show on home page
const LATEST_WORK_COUNT = 2;
const LATEST_POSTS_COUNT = 2;

// Latest Work Section Component - Shows only 2 latest projects
const LatestWorkSection = memo(({ projects }: { projects: Project[] }) => {
  const latestProjects = projects.slice(0, LATEST_WORK_COUNT);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToProject = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const currentProject = latestProjects[currentIndex];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <WorkSectionHeader title="Latest Work" link="/work" />
        <div className="divider mb-8" />
        
        <div className="relative">
          {/* Mac Mockup with Project */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.slug}
                variants={scaleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link to={`/work/${currentProject.slug}`} className="block">
                  <MacBookMockup 
                    image={currentProject.image} 
                    title={currentProject.title} 
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {latestProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-foreground w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Info */}
          <div className="text-center mt-6">
            <h3 className="text-lg font-medium text-foreground">
              {currentProject.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentProject.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

LatestWorkSection.displayName = "LatestWorkSection";

// Latest Posts Section Component - Shows only 2 latest posts
const LatestPostsSection = memo(() => {
  const latestPosts = blogPosts.slice(0, LATEST_POSTS_COUNT);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <SectionHeader title="Latest Posts" viewAllLink="/blog" />
        <div className="divider mb-4" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {latestPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <BlogPostRow {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

LatestPostsSection.displayName = "LatestPostsSection";

// Main Index Page
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LatestWorkSection projects={projects} />
      <LatestPostsSection />
    </Layout>
  );
};

export default Index;
