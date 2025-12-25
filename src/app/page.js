import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import ServicesGrid from "@/components/Services/Services";

export const metadata = {
  title: "Engineering Inspection & Compliance Services | Audax NY",
};


export default function HomePage() {
  return (
    <>
      <Hero />

      {/*  services section */}
      <section
        className="bg-background py-24"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 14px)",
        }}
      >
        <section className="mx-auto mb-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                Reducing Risk. Ensuring Compliance. Delivering Confidence.
              </h2>
              <p className="text-lg text-neutral-600">
                We help owners, developers, and contractors meet regulatory
                requirements while protecting structures, schedules, and investments.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6">
          <ServicesGrid />
        </div>
      </section>
      <section
        className="bg-background py-24"
        style={{
          backgroundColor: "var(--audax-light-neutral, #F7F4EF)",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 16px)",
        }}
      >
        <section className="mx-auto mb-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                Recent Project Highlights
              </h2>
              <p className="text-lg text-neutral-600">
                Audax NY completes every engagement with consistent follow-through,
                delivering successful, on-time project outcomes across complex
                inspection, testing, and compliance scopes.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      <Footer />
    </>
  );
}