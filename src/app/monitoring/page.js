import EnsureComplianceCTA from "@/components/InspectionsServices/EnsureComplianceCTA";

export const metadata = {
  title: "Monitoring | Inspection & Compliance Services",
};

export default function MonitoringPage() {
  return (
    <section
      className="bg-background py-24 mt-16"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 14px)",
      }}
    >
      {/* cards section */}
      <section className="px-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm w-full">
          <article className="w-full">
            <h2 className="text-xl md:text-2xl font-semibold text-audax-charcoal mb-4">
              AUDX-NY - NYCDOB - Construction Monitoring Services
            </h2>
            <p className="text-sm text-neutral-700 mb-4">
              Our Construction Monitoring Areas:
            </p>
            <ul className="text-sm text-neutral-700 space-y-1 mb-6 list-disc list-inside">
              <li>Pre-Construction Survey</li>
              <li>Construction Monitoring Plan and Protocol</li>
              <li>Crack Monitoring</li>
              <li>Vibration Monitoring</li>
              <li>Optical/Displacement Monitoring</li>
            </ul>
            <p className="text-sm text-neutral-700 mb-4">
              Depending on the type of project filing, building location, and surrounding
              area in New York City, the existing condition surveying and monitoring must
              be completed prior to construction and must comply with TPPN 10/88 Technical
              Policy.
            </p>
            <p className="text-sm text-neutral-700 mb-4">
              The Technical Policy and Procedure Notice # 10/88 (TPPN 10/88) of the New
              York City Department of Buildings (NYCDOB) requires surveying and monitoring
              of all landmark buildings located on a 90' radius of a job site in New York
              City. Vibration Monitoring Equipment and Existing Conditions Photographic
              Surveys are the steps and procedures needed to take when it comes to complying
              with this strict construction code.
            </p>
            <p className="text-sm text-neutral-700 mb-4">
              Initial construction phases, primarily demolition and foundation work, are
              known to create and emit vibration shocks that affect nearby structures.
              Landmark buildings, due to their years of existence, might be significantly
              affected. As a result, building vibration, optical, and crack must be monitored.
            </p>
            <p className="text-sm text-neutral-700 mb-4">
              Vibration Monitoring may be used for construction activities and/or scenarios
              including Wireless Vibration Monitoring or Manned Vibration Monitoring:
            </p>
            <ul className="text-sm text-neutral-700 space-y-1 mb-6 list-disc list-inside">
              <li>Construction</li>
              <li>Excavation</li>
              <li>Demolition</li>
              <li>Dynamic Compaction</li>
              <li>Pile Driving</li>
            </ul>
            <p className="text-sm text-neutral-700 mb-6">
              Monitoring is provided to ensure that no negative effects are caused by the
              construction process. Vibration and Displacement Monitoring are critical when
              performing underpinning activities, site excavation, or other soil work as part
              of foundation construction and design. Data analysis and evaluation are performed
              immediately following data collection in order to calculate displacements. The
              project team is notified immediately of any exceedance outside the predetermined
              limits. Ultimately, AUDX-NY provides the client and the project team with the
              information necessary to conduct the project work in a safe, efficient, and
              cost-effective manner with minimized impacts to neighboring properties.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-neutral-700">
                Ready to set up a monitoring plan for your project?
              </span>
              <button className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark">
                Contact Us
              </button>
            </div>
          </article>
        </div>
      </section>
      <EnsureComplianceCTA />
    </section>
  );
}
