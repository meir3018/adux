import { NAV_ITEMS } from "../Header/constants";
export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-[#bdbdbd]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              AUDAX-NY
            </h3>
            <ul className="space-y-4 text-sm text-[#bdbdbd]">

              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📞
                </span>
                <a href="tel:+17182128329" className="hover:text-white transition">
                  (718) 21-AUDAX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📧
                </span>
                <a
                  href="mailto:mark@audax-ny.com"
                  className="hover:text-white transition"
                >
                  Mark@audax-ny.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-[#bdbdbd]">
                  📧
                </span>
                <a
                  href="mailto:office@audax-ny.com"
                  className="hover:text-white transition"
                >
                  Office@audax-ny.com
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#9a9a9a] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-[#bdbdbd]">
              {NAV_ITEMS.map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] bg-[#242424]">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#8a8a8a]">
            ©2026 Audax - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
