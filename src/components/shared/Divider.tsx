import { memo } from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = memo(({ className }: DividerProps) => {
  return <div className={cn("divider", className)} />;
});

Divider.displayName = "Divider";

export default Divider;
