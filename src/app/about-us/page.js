import { ABOUTUS_META } from '@/constants'

export const metadata = {
  title: "About Audax NY | Inspection, Monitoring & Compliance (NYC)",
};

export default function AboutPage() {
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
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            About AUDAX
          </h1>
          <p className="text-lg text-neutral-600">
            Audax NY delivers inspection, testing, and compliance services that
            help projects stay safe, on schedule, and aligned with regulatory
            requirements. We partner with owners, developers, and contractors to
            reduce risk and provide clear, actionable reporting throughout every
            phase.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-2">
          {ABOUTUS_META.map((item, index) => (
            <div
              key={`about-grid-${index}`}
              className="relative h-28 sm:h-32 md:h-36 lg:h-40 rounded-md overflow-hidden bg-neutral-200"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/35" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
