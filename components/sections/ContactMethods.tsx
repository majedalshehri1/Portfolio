import { CONTACTS } from "@/lib/data"; // Import contact data
import { type ContactItem } from "@/lib/types"; // Import type definition
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Icon mapping object - maps contact types to their corresponding React icons
// Uses Record type for type safety and autocompletion
const iconByLabel: Record<ContactItem["label"], React.ReactElement> = {
  GitHub: <FaGithub className="text-2xl" />,
  Gmail: <MdEmail className="text-2xl" />,
  LinkedIn: <FaLinkedin className="text-2xl" />,
};

export default function ContactMethods() {
  return (
    <section className="container section-y" aria-labelledby="contact-title">
      <h2
        id="contact-title"
        className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold flex items-center gap-3"
      >
        Get in Touch
        <hr className="flex-1 border-border" />
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card shadow-sm hover:shadow-card transition"
          >
            <span className="text-gray-700">{iconByLabel[c.label]}</span>
            <div className="min-w-0">
              <p className="font-medium">{c.label}</p>
              <p className="text-sm text-mute truncate">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
