import { Variants } from "framer-motion";

/**
 * Animation Configuration Constants
 * Centralized animation durations and easing functions for consistency
 */
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.4,
    page: 0.5,
  },
  delays: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    easeOut: "easeOut" as const,
    easeIn: "easeIn" as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.1,
  },
} as const;

// Container variants for staggered children animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Item variants for fade-up animations
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

// Fade in animation for sections
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Scale animation for cards
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3 },
  },
};

// Page transition variants
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Mobile menu variants
export const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: { duration: 0.2 },
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2 },
  },
};

// Hover effects
export const hoverScale = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

export const hoverY = {
  whileHover: { y: -4 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};

export const hoverX = {
  whileHover: { x: 4 },
  transition: { duration: 0.2 },
};

// Tap effects
export const tapScale = {
  whileTap: { scale: 0.95 },
};
