import { memo } from "react";

interface SectionTitleProps {
  title: string;
  count?: number;
}

const SectionTitle = memo(({ title, count }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <h2 className="text-lg font-medium text-foreground">{title}</h2>
      {count !== undefined && (
        <>
          <span className="text-muted-foreground">|</span>
          <span className="text-muted-foreground">{count}</span>
        </>
      )}
    </div>
  );
});

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
