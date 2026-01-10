import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeInVariants, ANIMATION_CONFIG } from "@/lib/animations";

/**
 * AnimatedSection Component
 *
 * A reusable wrapper for animating sections with fade-in effects.
 * Eliminates the need to repeat motion.div setup across multiple pages.
 *
 * @example
 * ```tsx
 * <AnimatedSection>
 *   <h1>My Content</h1>
 * </AnimatedSection>
 * ```
 *
 * @example With custom delay
 * ```tsx
 * <AnimatedSection delay={0.3}>
 *   <p>Delayed content</p>
 * </AnimatedSection>
 * ```
 */

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  variants = fadeInVariants,
  delay = ANIMATION_CONFIG.delays.none,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
