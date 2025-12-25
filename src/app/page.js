import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import ServicesGrid from '@/components/Services/Services'

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
      {/* recent projects section */}
      <section
        className="py-24"
        style={{
          backgroundColor: "var(--audax-light-neutral, #F7F4EF)",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 16px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/90 backdrop-blur-sm border border-black/5 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-audax-charcoal mb-3">
                MTA Facility Upgrade
              </h3>
              <p className="text-neutral-700 mb-4">
                Comprehensive safety and compliance inspections for critical
                infrastructure.
              </p>
              <p className="text-neutral-600 mb-3">
                Coordinated field teams with transit operations to keep work
                windows tight while maintaining full access to inspection areas.
              </p>
              <p className="text-neutral-600 mb-3">
                Delivered phased reports that aligned with contractor milestones,
                allowing rapid approvals and uninterrupted installation progress.
              </p>
              <p className="text-neutral-600">
                Verified documentation packages for regulatory sign-off and
                captured closeout requirements for long-term facility safety.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-black/5 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-audax-charcoal mb-3">
                Lincoln Road - Structural Stability
              </h3>
              <p className="text-neutral-700 mb-4">
                Structural evaluation and monitoring for long-term building
                stability.
              </p>
              <p className="text-neutral-600 mb-3">
                Established baseline condition surveys and precision monitoring
                points to track movement through each construction phase.
              </p>
              <p className="text-neutral-600 mb-3">
                Delivered weekly stability assessments to support engineering
                decisions and minimize risk during adjacent site work.
              </p>
              <p className="text-neutral-600">
                Documented final performance with clear recommendations for
                ongoing maintenance and compliance reporting.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-black/5 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-audax-charcoal mb-3">
                East Flatbush Community Center
              </h3>
              <p className="text-neutral-700 mb-4">
                Inspection and testing for community infrastructure development.
              </p>
              <p className="text-neutral-600 mb-3">
                Coordinated multi-discipline inspections to align with public
                funding timelines and municipal review cycles.
              </p>
              <p className="text-neutral-600 mb-3">
                Verified material testing results and field observations against
                code requirements and design intent.
              </p>
              <p className="text-neutral-600">
                Issued consolidated compliance summaries to keep stakeholders
                informed and the project moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
