import ConcreteTestingCard from "@/components/InspectionsServices/ConcreteTestingCard";
import GeneralInformation from "@/components/InspectionsServices/GeneralInformation";
import SoilBoringCard from "@/components/InspectionsServices/SoilBoringCard";
import SpecialInspectionCard from "@/components/InspectionsServices/SpecialInspectionCard";
import EnsureComplianceCTA from '@/components/InspectionsServices/EnsureComplianceCTA'

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
            <div className="max-w-8xl mx-auto px-4 mb-10">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-semibold text-audax-charcoal mb-4">
                        Inspection Services
                    </h1>
                    <p className="text-lg text-neutral-700">
                        Certified inspections, testing, and compliance oversight for
                        NYC projects—covering subsurface evaluations, special
                        inspections, and materials testing from pre‑construction
                        through closeout.
                    </p>
                </div>
            </div>
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
