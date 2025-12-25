import ServicesGrid from "@/components/Services/Services";

export const metadata = {
    title: "Inspection Services | Special Inspections, Monitoring & Code Compliance",
};

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
                            Certified Inspections That Keep Projects Moving
                        </h2>
                        <p className="text-lg text-neutral-600">
                            From geotechnical investigations to special inspections and code compliance, our certified professionals help ensure safety, quality, and regulatory approval at every stage of construction.
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
