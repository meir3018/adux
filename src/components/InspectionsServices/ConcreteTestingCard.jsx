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
          AUDAX-NY’s A2LA-accredited Materials Testing Laboratory is registered
          with the New York City Department of Buildings for field sampling and
          verification of concrete and aggregate materials. Testing follows
          strict QC procedures and NYC requirements.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          We provide material testing and construction monitoring to confirm
          compliance with project specifications and applicable codes.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Aggregate Testing</li>
          <li>Concrete Mix & Constituents Testing</li>
          <li>Concrete Sampling</li>
          <li>Core Compression Testing for Concrete</li>
          <li>Compression Testing</li>
          <li>Soils Proctor Testing</li>
          <li>Masonry Sampling & Compression Testing</li>
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
