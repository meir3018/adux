"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./constants";
import styles from "./Header.module.css";
import BrandMark from "./BrandMark";
import { phoneNumber, phoneNumberStr } from '@/constants'

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolidHeader = scrolled || !isHome;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-audax-cream text-audax-charcoal">
        <div className="mx-auto max-w-7xl flex justify-end items-center px-6 py-[1.5px] text-xs tracking-wide">
          <a
            href={`tel:${phoneNumberStr}`}
            className="flex items-center gap-2 hover:text-audax-gold transition"
          >
            📞 <span>Call us: {phoneNumber}</span>
          </a>
        </div>
      </div >

      {/* MAIN HEADER */}
      < header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-smooth ${showSolidHeader ? "bg-white/90 backdrop-blur shadow-header" : "bg-transparent"
          }`
        }
        style={{ top: "30px", height: "80px" }}
      >
        <div className="h-full flex items-center justify-between px-[2vw] py-[4px]">
          <div className="flex items-center gap-3">
            {/* ICON */}
            <div className="h-12 w-12 border border-black/10 bg-white flex items-center justify-center">
              <a href="/">
                <img src="/logo-ax.svg" alt="AUDAX" className="h-7 w-auto" />
              </a>
            </div>

            {/* TEXT BRAND */}
            <BrandMark
              companyName="AUDAX"
              tagline={["Laboratory", "Testing", "Inspection"]}
              scrolled={showSolidHeader}
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""
                    } ${showSolidHeader
                      ? "text-audax-charcoal hover:text-audax-gold"
                      : "text-audax-charcoal hover:text-audax-gold"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BURGER */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span
              className={`h-[2px] w-6 transition ${showSolidHeader ? "bg-audax-charcoal" : "bg-audax-charcoal"
                }`}
            />
            <span
              className={`h-[2px] w-6 transition ${showSolidHeader ? "bg-audax-charcoal" : "bg-audax-charcoal"
                }`}
            />
            <span
              className={`h-[2px] w-6 transition ${showSolidHeader ? "bg-audax-charcoal" : "bg-audax-charcoal"
                }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {
          menuOpen && (
            <div className="md:hidden bg-white border-t border-black/10">
              <nav className="flex flex-col px-6 py-4 gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-wide text-audax-charcoal hover:text-audax-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )
        }
      </header >
    </>
  );
}
