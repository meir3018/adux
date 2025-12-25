import { phoneNumber, phoneNumberStr } from "@/constants";

export default function SpecialInspectionCard() {
  return (
    <article className="w-full rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-neutral-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-audax-charcoal">
          AUDAX-NY - NYCDOB - Special Inspection (TR1, TR5, TR5H & TR8)
        </h3>
      </div>
      <div className="bg-neutral-50 px-6 py-6">
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          AUDAX-NY is an A2LA-accredited Type A / Class I (Third Party)
          Inspection Body and a registered Special Inspection Agency with the
          New York City Department of Buildings. Our TR1 and TR8 special
          inspection and controlled construction monitoring services keep your
          project aligned with required approvals.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          Special Inspection services are performed at the request of the
          owner, architect, or engineer of record. Our team supports inspection
          needs across foundations, superstructures, mechanical and electrical
          systems, fireproofing, structural steel, welding, concrete, masonry,
          and related compliance items.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          AUDAX-NY operates under ISO/IEC 17020:2012 accreditation, which
          confirms technical competence within a defined scope of inspection
          services.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Concrete - Cast in Place and Precast</li>
          <li>Structural Steel, Welding, and High Strength Bolting</li>
          <li>Wall Panels, Curtain Walls, and Veneers</li>
          <li>Soils - In-Place Density and Fill Placement</li>
          <li>Standpipe & Sprinkler Systems</li>
          <li>Pile Foundations and Drilled Pier Installation</li>
          <li>Mechanical Systems and Fuel Oil Piping</li>
          <li>Sprayed Fire-Resistant Materials</li>
        </ul>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark">
            Contact Us
          </button>
          <a
            className="text-xs font-semibold uppercase tracking-wide text-audax-charcoal hover:text-audax-gold transition"
            href={`tel:${phoneNumberStr}`}
          >
            Call Us: {phoneNumber}
          </a>
        </div>
      </div>
    </article>
  );
}
