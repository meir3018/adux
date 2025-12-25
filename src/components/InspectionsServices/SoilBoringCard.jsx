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
          AUDAX-NY Materials Testing Laboratory is nationally accredited by A2LA
          and registered with the New York City Department of Buildings to
          provide field sampling and testing for soil type and soil bearing
          capacity.
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 mb-4">
          Our field crew and staff conduct these investigations and provide
          geotechnical engineering reports that include recommendations for
          construction. Our equipment is geared for any site condition, with
          drilling rigs mounted on trucks, track machinery, and tripod rigs.
        </p>
        <ul className="text-[15px] leading-relaxed text-neutral-700 space-y-2 mb-5">
          <li>Soil Borings (25 ft, 50 ft, 100 ft)</li>
          <li>Test Pits</li>
          <li>Soil Percolation Tests</li>
          <li>Groundwater Monitoring Wells</li>
          <li>Rock Coring / Rock Quality</li>
          <li>Infiltration Test</li>
          <li>Geo-Technical Report</li>
          <li>Foundation Recommendation</li>
          <li>Underpinning / Building Evaluation Report</li>
        </ul>
        <button className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark">
          Contact Us
        </button>
      </div>
    </article>
  );
}
