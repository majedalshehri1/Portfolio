import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = memo(({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, hasPrev, onPageChange]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, hasNext, onPageChange]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
      {/* Prev Button */}
      <motion.button
        onClick={handlePrev}
        disabled={!hasPrev}
        className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
          hasPrev 
            ? "text-muted-foreground hover:text-foreground cursor-pointer" 
            : "text-muted-foreground/30 cursor-not-allowed"
        }`}
        whileHover={hasPrev ? { x: -4 } : undefined}
        whileTap={hasPrev ? { scale: 0.95 } : undefined}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>PREV</span>
      </motion.button>

      {/* Page Indicator */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i + 1 === currentPage
                ? "bg-foreground w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={handleNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
          hasNext 
            ? "text-amber-400 hover:text-amber-300 cursor-pointer" 
            : "text-muted-foreground/30 cursor-not-allowed"
        }`}
        whileHover={hasNext ? { x: 4 } : undefined}
        whileTap={hasNext ? { scale: 0.95 } : undefined}
      >
        <span>NEXT</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
});

Pagination.displayName = "Pagination";

export default Pagination;
