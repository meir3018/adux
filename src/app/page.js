import Hero from "@/components/Hero/Hero";
import ServicesGrid from '@/components/Services'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Placeholder below hero */}
      <section className="bg-background py-24">
        <div className="mx-auto  px-6">
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}
