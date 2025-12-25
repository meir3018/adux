import ConcreteTestingCard from "@/components/InspectionsServices/ConcreteTestingCard";
import GeneralInformation from "@/components/InspectionsServices/GeneralInformation";
import SoilBoringCard from "@/components/InspectionsServices/SoilBoringCard";
import SpecialInspectionCard from "@/components/InspectionsServices/SpecialInspectionCard";
import EnsureComplianceCTA from '@/components/InspectionsServices/EnsureComplianceCTA'

const INSPECTION_SERVICE_ITEMS = [
    {
        title: "Services Concrete & Masonry Inspection",
        description:
            "On-site inspections verify that concrete and masonry construction complies with approved plans, specifications, and applicable codes. Inspections focus on reinforcement, materials, workmanship, and curing to ensure safety, durability, and long-term performance.",
    },
    {
        title: "Structural Testing",
        description:
            "Structural testing evaluates in-place materials and assemblies to confirm strength, capacity, and performance. Results support design verification, renovations, forensic evaluations, and code compliance decisions.",
    },
    {
        title: "Drilling & Sampling",
        description:
            "Drilling and sampling provide direct information on subsurface conditions and existing structural elements. Collected samples are analyzed to support geotechnical evaluation, material verification, and reliable reporting.",
    },
    {
        title: "Optical Monitoring",
        description:
            "Optical monitoring tracks structural movement, settlement, and deformation with high precision. Data helps identify trends early and supports informed decisions during construction or adjacent work.",
    },
    {
        title: "Vibration Monitoring",
        description:
            "Vibration monitoring measures construction-induced ground and structural vibrations in real time. Monitoring helps protect nearby structures and provides defensible data for compliance and claims resolution.",
    },
    {
        title: "Subsurface Investigation and Infrastructure Exploration",
        description:
            "Subsurface investigations assess soil, groundwater, and underground infrastructure conditions. Findings support design planning, risk mitigation, and constructability decisions.",
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
