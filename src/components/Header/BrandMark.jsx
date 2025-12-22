export default function BrandMark({
    companyName = "AUDAX",
    tagline = ["laboratory", "testing", "inspection"],
    scrolled = false,
}) {
    const [aud, ax] = [companyName.slice(0, 3), companyName.slice(3)];
    const taglineClass = `flex items-center gap-2 text-[14px] font-bold tracking-wide font-['Verdana'] ${scrolled ? "text-audax-gold/90" : "text-audax-cream"}`;

    return (
        <div className="flex flex-col leading-tight select-none">
            {/* COMPANY NAME */}
            <div className="flex items-baseline gap-[1px]">
                <span className="text-audax-charcoal font-semibold tracking-[0.18em] text-sm">
                    {aud}
                </span>
                <span className="text-audax-gold font-semibold tracking-[0.18em] text-sm">
                    {ax}
                </span>
            </div>

            <div className="h-[0.5px] w-full bg-audax-red/80 my-1" aria-hidden="true" />

            {/* TAGLINE */}
            <div className={taglineClass}>
                <span className="flex items-center gap-2">
                    <span>Expert inspections for safe, reliable properties.</span>
                </span>
            </div>
        </div>
    );
}
