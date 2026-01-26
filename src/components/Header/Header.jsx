"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./constants";
import styles from "./Header.module.css";
import BrandMark from "./BrandMark";


export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollRatio(ratio);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolidHeader = scrolled || !isHome;
  const stepOne = scrollRatio >= 0.05;
  const stepTwo = scrollRatio >= 0.1;
  const headerInsetClass = stepTwo
    ? "left-[4%] right-[4%]"
    : stepOne
      ? "left-[2%] right-[2%]"
      : "left-0 right-0";
  const headerRoundedClass = stepOne ? "rounded-full shadow-header" : "";
  const headerTopMarginClass = stepTwo ? "mt-4" : stepOne ? "mt-2" : "mt-0";
  const headerBgClass = showSolidHeader
    ? stepTwo
      ? "bg-white"
      : "bg-white/90 backdrop-blur"
    : "bg-transparent";

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed z-40 transition-all duration-300 ease-smooth ${headerInsetClass} ${headerRoundedClass} ${headerTopMarginClass} ${headerBgClass}`}
        data-parallax={stepTwo ? "solid" : stepOne ? "rounded" : "base"}
        style={{ top: "0", height: "80px" }}
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
      </header>
    </>
  );
}
