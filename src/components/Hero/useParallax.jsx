import { useEffect, useRef } from "react";

export default function useParallax(speed = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;

    // 🚨 CRITICAL: always return undefined explicitly
    if (prefersReducedMotion || isMobile) {
      return undefined;
    }

    let raf = null;

    const onScroll = () => {
      if (raf !== null) return;

      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${
          window.scrollY * speed
        }px, 0)`;
        raf = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ✅ ALWAYS return a cleanup function
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
