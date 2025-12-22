"use client";

import styles from "./TopCallBar.module.css";

export default function TopCallBar() {
  return (
    <div className={styles.bar}>
      <a
        href="tel:+16313936520"
        className={styles.link}
        aria-label="Call us at 631-393-6520"
      >
        📞 <span>Call us:</span> <strong>631-393-6520</strong>
      </a>
    </div>
  );
}
