import CareersSection from "@/components/Careers/CareersSection";

export const metadata = {
  title: "Careers: Special Inspectors & Field Inspectors (NYC) | Audax NY",
};

const CAREER_CARDS = [
  {
    title: "Construction Inspector",
    image: "/careers/construction-inspector.jpg",
    phoneNumber: "(718) 21-AUDAX",
    phoneNumberStr: "7182128329",
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
    phoneNumber: "(718) 21-AUDAX",
    phoneNumberStr: "7182128329",
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
    phoneNumber: "(718) 21-AUDAX",
    phoneNumberStr: "7182128329",
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
    phoneNumber: "(718) 21-AUDAX",
    phoneNumberStr: "7182128329",
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
    phoneNumber: "(718) 21-AUDAX",
    phoneNumberStr: "7182128329",
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
            compliance services.
          </p>
        </div>

        <CareersSection roles={CAREER_CARDS} />
      </div>
    </section>
  );
}
