import ServicesGrid from "@/components/Services/Services";

export default function InspectionServicesPage() {
    return (
    <section
      className="bg-background py-24 mt-16"
      style={{
        backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 14px)",
            }}
        >
            <section className="mx-auto mb-14">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                            Reducing Risk. Ensuring Compliance. Delivering Confidence.
                        </h2>
                        <p className="text-lg text-neutral-600">
                            We help owners, developers, and contractors meet regulatory
                            requirements while protecting structures, schedules, and investments.
                        </p>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-6">
                <ServicesGrid />
            </div>
        </section>
    );
}
