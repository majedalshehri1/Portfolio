import Projects from "@/components/sections/Projects";

const WorkView = () => {
  return (
    <section className="container section-y" aria-labelledby="work-title">
      <h2
        id="contact-title"
        className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold flex items-center gap-3"
      >
        All Works
        <hr className="flex-1 border-border" />
      </h2>
      <Projects /> {/* This will display all projects without any limit */}
    </section>
  );
};

export default WorkView;
