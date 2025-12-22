import Hero from "@/components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Placeholder below hero */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center opacity-70">
            Content continues here…
          </p>
        </div>
      </section>
    </>
  );
}
