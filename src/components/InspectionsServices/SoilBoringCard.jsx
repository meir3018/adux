import { phoneNumber, phoneNumberStr } from "@/constants";

export default function SoilBoringCard() {
  return (
    <article className="w-full rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-neutral-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-audax-charcoal">
          AUDAX-NY - NYCDOB - Soil Boring & Test Pit (TR4)
        </h3>
      </div>
      <div className="bg-neutral-50 px-6 py-6">
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          AUDAX-NY operates an A2LA-accredited laboratory and is registered with
          the New York City Department of Buildings to deliver field sampling
          and verification for subsurface conditions and bearing performance.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          Our teams perform on-site investigations and produce geotechnical
          reports with construction-focused recommendations. We deploy a range
          of drilling setups to match site constraints, including truck-mounted,
          track-based, and tripod rigs.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Geotechnical Report</li>
          <li>Soil Borings (25 ft, 50 ft, 100 ft)</li>
          <li>Groundwater Monitoring Wells</li>
          <li>Test Pits</li>
          <li>Infiltration Test</li>
          <li>Soil Percolation Tests</li>
          <li>Foundation Recommendations</li>
          <li>Rock Coring / Rock Quality</li>
          <li>Underpinning / Building Evaluation Report</li>
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
