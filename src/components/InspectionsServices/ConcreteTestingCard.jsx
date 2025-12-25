import { phoneNumber, phoneNumberStr } from "@/constants";

export default function ConcreteTestingCard() {
  return (
    <article className="w-full rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-neutral-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-audax-charcoal">
          AUDAX-NY - NYCDOB - Concrete Testing Lab (TR2 & TR3)
        </h3>
      </div>
      <div className="bg-neutral-50 px-6 py-6">
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          AUDAX-NY Materials Testing Laboratory is nationally accredited by A2LA
          and registered with the New York City Department of Buildings to
          provide field sampling and testing for concrete and aggregates. The
          laboratory operates under strict quality control and meets NYC
          regulations for construction testing.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          Our laboratory provides material testing services and controlled
          construction monitoring to ensure compliance with project
          specifications and code requirements.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Concrete Sampling</li>
          <li>Compression Testing</li>
          <li>Masonry Sampling & Compression Testing</li>
          <li>Concrete Mix & Constituents Testing</li>
          <li>Aggregate Testing</li>
          <li>Soils Proctor Testing</li>
          <li>Core Compression Testing for Concrete</li>
          <li>Core Compression Testing for Asphalt</li>
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
