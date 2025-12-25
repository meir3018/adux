import Projects from "@/components/Projects/Projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section
      className="py-24 mt-16"
      style={{
        backgroundColor: "var(--audax-light-neutral, #F7F4EF)",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 16px)",
      }}
    >
      <div className="max-w-8xl mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-audax-charcoal mb-4">
            Recent Project Highlights
          </h2>
          <p className="text-lg text-neutral-700">
            Audax NY completes every engagement with consistent follow-through,
            delivering successful, on-time project outcomes across complex
            inspection, testing, and compliance scopes.
          </p>
        </div>
        <section className="py-12 bg-neutral-50">
          <Projects />
        </section>
      </div>
    </section>
  );
}
