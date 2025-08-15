import { EXPERIENCE } from "@/lib/data";
import { type ExperienceItem } from "@/lib/types";
import Image from "next/image";

export function Experience() {
  return (
    <section className="container section-y" aria-labelledby="experience-title">
      <div>
        <h2
          id="experience-title"
          className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold flex items-center gap-3"
        >
          <span>Experience</span>
          <hr className="flex-1 border-border" />
        </h2>

        <ul className="space-y-3 sm:space-y-4" role="list">
          {EXPERIENCE.map((item: ExperienceItem, idx: number) => (
            <li
              key={`${item.company}-${item.period ?? idx}`}
              className="flex items-start gap-3 sm:gap-4"
            >
              <span className="mt-1.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-card border border-border shadow-card flex-shrink-0 overflow-hidden flex items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.company} logo`}
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 24px, 28px"
                    quality={80}
                    loading={idx === 0 ? "eager" : "lazy"}
                    priority={idx === 0}
                  />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-mute"></span>
                )}
              </span>

              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base text-ink truncate">
                  {item.company}
                </p>

                <p className="text-xs sm:text-sm text-mute">
                  {item.title}
                  {item.location ? ` • ${item.location}` : ""}
                  {item.period ? `, ${item.period}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
