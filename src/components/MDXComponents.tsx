import { ComponentPropsWithoutRef } from "react";
import OptimizedImage from "@/components/shared/OptimizedImage";

/**
 * Custom MDX components for blog post rendering
 * Provides consistent, beautiful styling for all blog content
 *
 * Includes OptimizedImage component for Cloudinary-optimized images
 */

const MDXComponents = {
  // Custom components
  OptimizedImage,

  // Headings
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl md:text-5xl font-bold text-foreground mt-12 mb-6 leading-tight first:mt-0"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-6 leading-tight"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 leading-tight"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-3 leading-tight"
      {...props}
    />
  ),

  // Paragraphs and text
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6"
      {...props}
    />
  ),

  // Lists
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="list-disc list-inside text-muted-foreground leading-relaxed text-base md:text-lg mb-6 space-y-2"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="list-decimal list-inside text-muted-foreground leading-relaxed text-base md:text-lg mb-6 space-y-2"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li
      className="ml-4"
      {...props}
    />
  ),

  // Links
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),

  // Code blocks
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-muted rounded-lg p-4 overflow-x-auto mb-6 text-sm md:text-base"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    // Inline code vs code blocks
    const isInline = !props.className?.includes('language-');

    if (isInline) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
          {...props}
        />
      );
    }

    return (
      <code
        className="font-mono text-foreground"
        {...props}
      />
    );
  },

  // Blockquotes
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-muted-foreground/30 pl-6 italic text-muted-foreground my-6"
      {...props}
    />
  ),

  // Horizontal rules
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr
      className="border-t border-muted-foreground/20 my-12"
      {...props}
    />
  ),

  // Tables
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full border-collapse"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead
      className="bg-muted"
      {...props}
    />
  ),
  tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
    <tbody
      {...props}
    />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr
      className="border-b border-muted-foreground/10"
      {...props}
    />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="text-left p-3 font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="p-3 text-muted-foreground"
      {...props}
    />
  ),

  // Strong and emphasis
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-foreground"
      {...props}
    />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em
      className="italic"
      {...props}
    />
  ),
};

export default MDXComponents;
