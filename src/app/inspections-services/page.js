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
