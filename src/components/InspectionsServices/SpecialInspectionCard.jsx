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
          AUDAX-NY is nationally accredited Type A / Class I (Third Party)
          Inspection Body by A2LA and registered as a Special Inspection Agency
          with the New York City Department of Buildings. Our City Hall TR1 &
          TR8 Special Inspection and Controlled Construction Monitoring Services
          provide compliant, timely oversight for every stage of your project.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          A Special Inspection Agency provides inspection services required by
          the owner, architect, or engineer of record. We perform inspections
          for foundations, superstructures, mechanical, electrical, fireproofing,
          structural steel, welding, concrete, masonry, and spray fireproofing,
          as well as geotechnical, mechanical, structural, and energy code
          compliance.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          AUDAX-NY inspection body is accredited in accordance with the
          recognized International Standard ISO/IEC 17020:2012, demonstrating
          technical competence for a defined scope and operations.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Wall Panels, Curtain Walls, and Veneers</li>
          <li>Sprayed Fire-Resistant Materials</li>
          <li>Standpipe & Sprinkler Systems</li>
          <li>Mechanical Systems and Fuel Oil Piping</li>
          <li>Structural Steel, Welding, and High Strength Bolting</li>
          <li>Concrete - Cast in Place and Precast</li>
          <li>Soils - In-Place Density and Fill Placement</li>
          <li>Pile Foundations and Drilled Pier Installation</li>
        </ul>
        <button className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark">
          Contact Us
        </button>
      </div>
    </article>
  );
}
