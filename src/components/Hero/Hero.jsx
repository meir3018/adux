"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES } from "./slides";
import useParallax from "./useParallax";
import styles from "./Hero.module.css";

const INTERVAL = 6000;

export default function Hero() {
  const bgRef = useParallax();
  const heroRef = useRef(null);
  const timer = useRef(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);

  const prev = useRef(active);

  useEffect(() => {
    prev.current = active;
  }, [active]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) {
      return undefined;
    }

    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % HERO_SLIDES.length);
    }, INTERVAL);

    return () => {
      clearInterval(timer.current);
    };
  }, [paused, inView]);


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight")
        setActive((a) => (a + 1) % HERO_SLIDES.length);
      if (e.key === "ArrowLeft")
        setActive((a) =>
          a === 0 ? HERO_SLIDES.length - 1 : a - 1
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = HERO_SLIDES[active];

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={bgRef}
        className={`${styles.background} ${styles.prev}`}
        style={{
          backgroundImage: `url(${HERO_SLIDES[prev.current].image})`,
        }}
      />
      <div
        className={`${styles.background} ${styles.current}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      <div className={styles.overlay} />

      <div key={active} className={styles.content}>
        <h1 className={styles.title}>{slide.title}</h1>
        <h2 className={styles.subtitle}>{slide.subtitle}</h2>
        <a href={slide.cta.href} className={styles.cta}>
          {slide.cta.label}
        </a>
      </div>

      <div className={styles.stepper}>
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`${styles.dot} ${i === active ? styles.activeDot : ""
              }`}
          />
        ))}
      </div>
    </section>
  );
}
