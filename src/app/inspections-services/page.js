import ConcreteTestingCard from "@/components/InspectionsServices/ConcreteTestingCard";
import GeneralInformation from "@/components/InspectionsServices/GeneralInformation";
import SoilBoringCard from "@/components/InspectionsServices/SoilBoringCard";
import SpecialInspectionCard from "@/components/InspectionsServices/SpecialInspectionCard";

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


            <GeneralInformation />

            <div className="max-w-5xl mx-auto px-6 mt-16">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-[#1c3f8a] mb-3">
                            Ready to Ensure Compliance?
                        </h3>
                        <p className="text-sm text-neutral-600 mb-4">
                            Let our experts handle your inspection and testing needs for
                            seamless compliance with NYC regulations.
                        </p>
                        <button className="rounded bg-[#3a6ea5] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                            Contact Us
                        </button>
                    </div>
                    <div className="h-40 rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100" />
                </div>
            </div>
        </section>
    );
}
