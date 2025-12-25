export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <section className="bg-background py-24 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            About Audax NY
          </h1>
          <p className="text-lg text-neutral-600">
            Audax NY delivers inspection, testing, and compliance services that
            help projects stay safe, on schedule, and aligned with regulatory
            requirements. We partner with owners, developers, and contractors to
            reduce risk and provide clear, actionable reporting throughout every
            phase.
          </p>
        </div>
      </div>
    </section>
  );
}
