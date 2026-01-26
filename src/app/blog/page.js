export const metadata = {
  title: "Audax Blog | Insights & Updates",
  description:
    "News, project updates, and technical insights from Audax NY's inspection and monitoring teams.",
};

export default function BlogPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            From the blog
          </h1>
          <p className="text-lg text-slate-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Jan 26, 2026</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Monitoring
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            Monitoring That Keeps NYC Projects on Track
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-7">
            A field-first look at how continuous monitoring reduces risk, keeps
            stakeholders aligned, and makes compliance predictable.
          </p>
          <div className="mt-4 text-base text-slate-600 leading-7 space-y-4">
            <p>
              Monitoring isn’t just about collecting data—it’s about making
              decisions faster and with more confidence. On complex NYC
              projects, conditions can change quickly: existing structures
              settle, vibration thresholds shift, and schedules compress. A
              structured monitoring plan turns those variables into clear
              signals the project team can act on.
            </p>
            <p>
              We start by defining what “normal” looks like for the site, then
              choose instrumentation that fits the scope—tilt meters, crack
              gauges, vibration monitors, or survey control points. Baselines
              are captured early so every movement is measured against verified
              conditions, not assumptions.
            </p>
            <p>
              Reporting is where monitoring earns its keep. Instead of static
              PDFs weeks later, we focus on timely alerts, trend summaries, and
              thresholds that align with the project’s risk profile. That gives
              owners, contractors, and adjacent stakeholders a shared view of
              what’s happening in real time—and what needs attention.
            </p>
            <p>
              The result is fewer surprises and stronger compliance. Monitoring
              becomes a safety net for the schedule, the structure, and the
              team.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Call us at{" "}
            <a
              href="tel:+17182128329"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              (718) 212-8329
            </a>{" "}
            to discuss monitoring.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
            <div>
              <p className="text-base font-semibold text-slate-900">
                Audax Monitoring Team
              </p>
              <p className="text-sm text-slate-500">NYC</p>
            </div>
          </div>

        </div>

        <div className="max-w-3xl mx-auto mt-12 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Jan 20, 2026</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Structural Testing
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            Structural Testing for NYC Buildings: Strength, Safety, and
            Compliance
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-7">
            A practical guide to structural testing, engineered for NYC building
            projects, construction quality assurance, and regulatory compliance.
          </p>
          <div className="mt-4 text-base text-slate-600 leading-7 space-y-4">
            <p>
              Structural testing is the backbone of construction quality
              assurance. In New York City, building codes and special inspection
              requirements demand clear, defensible documentation of material
              strength and performance. From concrete testing and masonry
              testing to steel inspection and weld testing, our field and lab
              programs are designed to verify that structures meet design
              criteria, safety standards, and NYC DOB requirements.
            </p>
            <p>
              Our structural engineering teams coordinate sampling, chain of
              custody, and test protocols so results can be used in compliance
              reporting and closeout documentation. Typical services include
              compressive strength testing for concrete cylinders, rebar
              placement verification, bolt tension testing, and ultrasonic or
              magnetic particle testing for critical welds. These testing
              methods help owners and contractors reduce risk, control costs,
              and keep schedules on track.
            </p>
            <p>
              Beyond code compliance, structural testing supports long-term
              building performance. Data-driven quality control identifies
              deviations early, enabling corrective action before they become
              costly delays. For NYC construction projects, that means fewer
              change orders, clearer coordination with architects and engineers,
              and a stronger, safer structure at turnover.
            </p>
            <p>
              Whether you need third-party inspection, special inspection
              services, or full structural testing programs for concrete, steel,
              and masonry, Audax NY delivers testing, inspection, and monitoring
              services aligned with local regulations and project goals.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Call us at{" "}
            <a
              href="tel:+17182128329"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              (718) 212-8329
            </a>{" "}
            to discuss structural testing.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
            <div>
              <p className="text-base font-semibold text-slate-900">
                Audax Structural Testing Team
              </p>
              <p className="text-sm text-slate-500">NYC</p>
            </div>
          </div>

        </div>

        <div className="max-w-3xl mx-auto mt-12 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Jan 18, 2026</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Geotechnical
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            Geotechnical Investigation & Monitoring in NYC: Subsurface Data You
            Can Build On
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-7">
            Site exploration, soil testing, and geotechnical monitoring that
            support safe foundations, excavation, and NYC compliance.
          </p>
          <div className="mt-4 text-base text-slate-600 leading-7 space-y-4">
            <p>
              A successful project starts below grade. Geotechnical
              investigation provides the subsurface data needed for foundation
              design, excavation planning, and construction risk management. In
              New York City, that means reliable soil borings, test pits,
              groundwater observations, and lab testing that align with NYC DOB
              requirements and special inspection standards.
            </p>
            <p>
              Our geotechnical engineering team performs soil classification,
              moisture content testing, density and compaction testing, and
              strength evaluations for clays, silts, and granular soils. These
              results guide shoring design, underpinning, and foundation
              selection—from shallow footings to drilled piles and mat
              foundations. Accurate geotechnical reports help owners and design
              teams reduce uncertainty and avoid costly change orders.
            </p>
            <p>
              Monitoring is just as critical. We deploy settlement monitoring,
              vibration monitoring, inclinometers, and groundwater level
              monitoring to track site behavior during excavation and
              construction. These real-time measurements provide early warning
              signals, protect adjacent structures, and support compliance with
              construction safety plans and NYC building codes.
            </p>
            <p>
              Whether you need a Phase I/II geotechnical investigation, pre-
              construction condition surveys, or ongoing geotechnical monitoring
              for a complex urban site, Audax NY delivers the field data,
              testing, and reporting that keep projects safe, compliant, and on
              schedule.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Call us at{" "}
            <a
              href="tel:+17182128329"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              (718) 212-8329
            </a>{" "}
            to discuss geotechnical investigation.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
            <div>
              <p className="text-base font-semibold text-slate-900">
                Audax Geotechnical Team
              </p>
              <p className="text-sm text-slate-500">NYC</p>
            </div>
          </div>

        </div>

        <div className="max-w-3xl mx-auto mt-12 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Jan 12, 2026</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Geotechnical
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            Geotechnical Risk Management for Urban Excavations and Foundations
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-7">
            NYC geotechnical services focused on excavation safety, foundation
            design support, and construction monitoring.
          </p>
          <div className="mt-4 text-base text-slate-600 leading-7 space-y-4">
            <p>
              Urban sites demand a geotechnical strategy built for tight
              clearances and complex subsurface conditions. A targeted
              geotechnical investigation helps define soil strata, groundwater
              elevation, and bearing capacity—critical inputs for foundation
              engineering, shoring design, and construction sequencing. In NYC,
              these findings also support DOB filings, special inspection
              coordination, and compliance reporting.
            </p>
            <p>
              We combine field exploration with lab testing to deliver data you
              can build on: standard penetration tests (SPT), soil borings,
              compaction testing, Atterberg limits, and gradation analyses.
              These results inform pile design, spread footing suitability, and
              excavation support systems for basements, utilities, and adjacent
              property protection.
            </p>
            <p>
              During construction, geotechnical monitoring tracks settlement,
              lateral movement, and vibration to protect neighboring structures
              and infrastructure. Instrumentation such as inclinometers,
              piezometers, and survey control points creates an early-warning
              system that reduces risk and keeps schedules predictable.
            </p>
            <p>
              If you need geotechnical consulting in NYC—whether for pre-
              construction due diligence, foundation recommendations, or
              excavation monitoring—Audax NY provides investigation, testing,
              and reporting tailored to urban construction and compliance.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Call us at{" "}
            <a
              href="tel:+17182128329"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              (718) 212-8329
            </a>{" "}
            to discuss geotechnical consulting.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
            <div>
              <p className="text-base font-semibold text-slate-900">
                Audax Geotechnical Services
              </p>
              <p className="text-sm text-slate-500">NYC</p>
            </div>
          </div>

        </div>

        <div className="max-w-3xl mx-auto mt-12 border-t border-slate-200 pt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Jan 8, 2026</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Surveying
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900">
            Surveying & Damage Assessment in NYC: Accurate Records, Clear
            Answers
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-7">
            Professional construction surveying, pre-construction condition
            surveys, and damage assessment services that protect NYC projects
            and neighboring properties.
          </p>
          <div className="mt-4 text-base text-slate-600 leading-7 space-y-4">
            <p>
              Surveying and damage assessment create the baseline record every
              urban construction project needs. In NYC, pre-construction
              condition surveys document existing conditions for adjacent
              buildings, sidewalks, and infrastructure—reducing disputes and
              supporting compliance with project risk management plans. Accurate
              building surveys and photo documentation give owners and
              contractors a defensible record before excavation or demolition
              begins.
            </p>
            <p>
              Our surveyors use field-verified control points and detailed
              inspection checklists to capture cracks, settlement indicators,
              facade conditions, and site accessibility. This information
              supports structural monitoring programs, insurance requirements,
              and NYC DOB coordination. When questions arise, a clear
              pre-construction survey can differentiate pre-existing conditions
              from construction-related impacts.
            </p>
            <p>
              If damage occurs, our damage assessment process includes现场
              observations, measurements, and comparison to baseline records to
              identify cause, extent, and recommended next steps. This
              assessment supports repair planning, stakeholder communication,
              and timely resolution.
            </p>
            <p>
              For NYC developers, contractors, and property owners, Audax NY
              provides construction surveying, condition surveys, and damage
              assessment services designed for urban sites, compliance, and risk
              reduction.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Call us at{" "}
            <a
              href="tel:+17182128329"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              (718) 212-8329
            </a>{" "}
            to discuss surveying and damage assessment.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
            <div>
              <p className="text-base font-semibold text-slate-900">
                Audax Surveying Team
              </p>
              <p className="text-sm text-slate-500">NYC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
