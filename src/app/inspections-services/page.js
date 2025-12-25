import ConcreteTestingCard from "@/components/InspectionsServices/ConcreteTestingCard";
import GeneralInformation from "@/components/InspectionsServices/GeneralInformation";
import SoilBoringCard from "@/components/InspectionsServices/SoilBoringCard";
import SpecialInspectionCard from "@/components/InspectionsServices/SpecialInspectionCard";
import EnsureComplianceCTA from '@/components/InspectionsServices/EnsureComplianceCTA'

const INSPECTION_SERVICE_ITEMS = [
    {
        title: "Services Concrete & Masonry Inspection",
        description:
            "Comprehensive on-site inspections ensuring compliance and safety.",
    },
    {
        title: "Structural Testing",
        description:
            "Advanced testing methods to guarantee structural integrity.",
    },
    {
        title: "Drilling & Sampling",
        description:
            "Precision drilling and subsurface sample analysis for reliable reporting.",
    },
    {
        title: "Optical Monitoring",
        description:
            "High-accuracy optical instruments for real-time structural movement tracking.",
    },
    {
        title: "Vibration Monitoring",
        description:
            "Continuous vibration analysis for construction and infrastructure safety.",
    },
    {
        title: "Subsurface Investigation and Infrastructure Exploration",
        description:
            "Comprehensive assessment of underground conditions for design and planning.",
    },
];

export const metadata = {
    title: "Inspections Services | Special Inspections, Monitoring & Code Compliance",
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
            <div className="max-w-8xl mx-auto px-4 mb-10">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-semibold text-audax-charcoal mb-4">
                        Inspections Services
                    </h1>
                    <p className="text-lg text-neutral-700">
                        Certified inspections, testing, and compliance oversight for
                        NYC projects—covering subsurface evaluations, special
                        inspections, and materials testing from pre‑construction
                        through closeout.
                    </p>
                </div>
            </div>
            <section className="px-6 mb-10">
                <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm w-full">
                    <div className="grid gap-6 md:grid-cols-3">
                        {INSPECTION_SERVICE_ITEMS.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-lg border border-neutral-200 bg-white overflow-hidden flex flex-col"
                            >
                                <div className="bg-neutral-100 px-4 py-3">
                                    <h3 className="text-base font-semibold text-audax-charcoal">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="bg-neutral-50 px-4 py-3 flex-1">
                                    <p className="text-sm text-neutral-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* cards section */}
            <section className="px-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm w-full">
                    <div className="grid gap-8">
                        <SoilBoringCard />
                        <SpecialInspectionCard />
                        <ConcreteTestingCard />
                    </div>
                </div>
            </section>
            <EnsureComplianceCTA />
        </section>
    );
}
