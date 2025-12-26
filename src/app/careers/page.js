export const metadata = {
  title: "Careers",
};

const PHONE_NUMBER = "(718) 21-AUDAX";
const PHONE_NUMBER_STR = "7182128329";

const CAREER_CARDS = [
  {
    title: "Construction Inspector",
    image: "/careers/construction-inspector.jpg",
    bullets: [
      "Review and interpret project drawings and specifications to verify contractor compliance.",
      "Conduct on-site observation, inspection, and evaluation of construction activities.",
      "Verify work per approved submittals and observe contractor safety compliance.",
      "Prepare daily reports, verify materials, and track project documentation.",
      "Minimum 5 years experience; degree in Engineering or related field preferred.",
      "Proficiency with Microsoft Office Suite and project management tools.",
      "Familiarity with civil, structural, mechanical, or electrical work.",
      "Willingness to travel within NYC Metro area.",
    ],
  },
  {
    title: "Masonry Field Inspector",
    image: "/careers/masonry-field-inspector.webp",
    bullets: [
      "Perform on-site masonry inspections such as grout and mortar sampling, reinforcement verification, and anchor bolt observations.",
      "Draft detailed and accurate field reports for submission to project managers.",
      "Review and apply design drawings and specifications during field work.",
      "Assist with façade reviews, restoration projects, and other specialty assignments.",
      "Provide support to senior inspectors and supervisors as needed.",
      "Certifications required: ICC Structural Masonry & OSHA 30 Construction Safety.",
      "Ability to read drawings and familiarity with NYC/NYS building codes.",
    ],
  },
  {
    title: "Special Inspector",
    image: "/careers/special-inspector.webp",
    bullets: [
      "Perform code-compliant inspections per NYC Building Code Chapter 17.",
      "Maintain accurate reports and communicate effectively with clients.",
      "Hold valid certifications (e.g., AWS-CWI, ACI-CCSI, ICC-CSI).",
      "Experience in NYC construction inspection preferred.",
      "Must have OSHA training and familiarity with safety standards.",
      "Strong teamwork, reliability, and attention to detail required.",
    ],
  },
  {
    title: "ICC Mechanical Special Inspector",
    image: "/careers/icc-mechanical-inspector.webp",
    bullets: [
      "Conduct field inspections of mechanical systems to ensure proper installation and functionality.",
      "Verify compliance with applicable building codes, standards, and approved construction documents.",
      "Prepare detailed inspection reports and clearly communicate any deficiencies or required corrections.",
      "ICC Commercial or Residential Mechanical Inspector Certification (M2) required.",
      "Proven experience performing inspections of mechanical systems.",
      "Strong understanding of relevant building codes and mechanical system standards.",
    ],
  },
  {
    title: "AWS Welding Inspector",
    image: "/careers/aws-welding-inspector.webp",
    bullets: [
      "Perform welding inspections in accordance with AWS D1.1 code standards.",
      "Prepare detailed daily field reports and clearly communicate any deficiencies to project managers, contractors, and clients.",
      "Review and interpret project drawings and specifications to ensure proper execution.",
      "Collaborate with design professionals and project teams throughout all phases to maintain code compliance and ensure successful project outcomes.",
      "ICC Structural Steel & Bolting Certification is a plus. (We also offer support and reimbursement for obtaining this certification.)",
      "Strong communication skills and the ability to coordinate effectively with project managers, fabrication facilities, and clients.",
    ],
  },
];

export default function CareersPage() {
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
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-audax-charcoal mb-4">
            Careers
          </h1>
          <p className="text-lg text-neutral-700">
            Join AUDAX-NY and help deliver trusted inspection, testing, and
            compliance services across New York City.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm w-full">
          <div className="grid gap-8 md:grid-cols-3">
            {CAREER_CARDS.map((role) => (
              <article
                key={role.title}
                className="rounded-lg border border-neutral-200 bg-white overflow-hidden flex flex-col"
              >
                <div className="bg-neutral-100">
                  <div className="h-28 relative">
                    <img
                      src={role.image}
                      alt={role.title}
                      className="h-full w-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/35" />
                    <h3 className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-semibold text-audax-charcoal">
                      {role.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-neutral-50 px-4 py-6 flex-1 flex flex-col">
                  <ul className="text-[15px] text-neutral-600 space-y-2">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-audax-red shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-neutral-100 px-4 py-3 border-t border-neutral-200 flex justify-end">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      className="text-xs font-semibold uppercase tracking-wide text-audax-charcoal hover:text-audax-gold transition"
                      href={`tel:${PHONE_NUMBER_STR}`}
                    >
                      Call Us: {PHONE_NUMBER}
                    </a>
                    <button className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark">
                      Apply
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
