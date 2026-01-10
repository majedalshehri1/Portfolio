import { motion } from "framer-motion";
import { ReactNode } from "react";
import { containerVariants, itemVariants } from "@/lib/animations";

/**
 * AnimatedContainer Component
 *
 * A reusable container that applies staggered animations to its children.
 * Children must be wrapped in motion components to receive the stagger effect.
 *
 * @example
 * ```tsx
 * <AnimatedContainer>
 *   <motion.div variants={itemVariants}>Item 1</motion.div>
 *   <motion.div variants={itemVariants}>Item 2</motion.div>
 *   <motion.div variants={itemVariants}>Item 3</motion.div>
 * </AnimatedContainer>
 * ```
 */

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedContainer = ({
  children,
  className = "",
}: AnimatedContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedItem Component
 *
 * A pre-configured motion.div with itemVariants applied.
 * Use as children of AnimatedContainer for automatic stagger effects.
 *
 * @example
 * ```tsx
 * <AnimatedContainer>
 *   <AnimatedItem>Item 1</AnimatedItem>
 *   <AnimatedItem>Item 2</AnimatedItem>
 * </AnimatedContainer>
 * ```
 */

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedItem = ({
  children,
  className = "",
}: AnimatedItemProps) => {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
};
