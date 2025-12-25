import { phoneNumber, phoneNumberStr } from "@/constants";

export default function EnsureComplianceCTA() {
    return (
        <div className="max-w-5xl mx-auto px-6 mt-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                    <h3 className="text-xl font-semibold text-[#1c3f8a] mb-3">
                        Ready to Stay Compliant?
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                        Partner with our team to define inspection scope, schedules,
                        and documentation so your project aligns with NYC compliance
                        requirements from start to closeout.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded bg-[#3a6ea5] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                            Contact Us
                        </button>
                        <a
                            className="text-xs font-semibold uppercase tracking-wide text-neutral-600 hover:text-audax-gold transition"
                            href={`tel:${phoneNumberStr}`}
                        >
                            Call Us: {phoneNumber}
                        </a>
                    </div>
                </div>
                <div className="h-40 rounded-lg overflow-hidden relative">
                    <img
                        src="/service_headers/escavator.jpg"
                        alt="Ensure Compliance with AUDX-NY"
                        aria-hidden="true"
                        className="h-full w-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/35" />
                </div>
            </div>
        </div>
    )
}
