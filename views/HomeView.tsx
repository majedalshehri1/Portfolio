import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import About from "@/components/sections/About";

export default function HomeView() {
  return (
    <>
      <section className="container">
        <Hero />
        <Projects limit={2} isAboveTheFold /> {/* preview 2 latest projects */}
        <About />
        <Experience />
      </section>
    </>
  );
}
