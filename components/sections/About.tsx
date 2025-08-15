import { ABOUT } from "@/lib/data";
import React from "react";

export default function About() {
  // Split the ABOUT text into paragraphs by looking for double newlines ("\n\n")
  // Trim each paragraph and remove any empty ones
  const paragraphs = ABOUT.split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  // Helper function that scans the text for email addresses
  // If found, it turns them into clickable mailto links
  const renderWithEmailLinks = (text: string) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,})/g;

    // Split text into parts (emails and non-email text)
    const parts = text.split(emailRegex);

    // Map over each part and replace emails with <a> tags
    return parts.map((part, idx) => {
      if (emailRegex.test(part)) {
        return (
          <a
            key={idx}
            href={`mailto:${part}`}
            className="text-ink underline-offset-2 hover:underline"
          >
            {part}
          </a>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  return (
    <section className="container section-y" aria-labelledby="about-title">
      <div className="">
        <h2
          id="about-title"
          className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold flex items-center gap-3"
        >
          <span>About Me</span>
          <hr className="flex-1 border-border" />
        </h2>

        <div className="prose prose-sm sm:prose-base max-w-none text-mute leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className={i < paragraphs.length - 1 ? "mb-5" : ""}>
              {renderWithEmailLinks(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
