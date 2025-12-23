"use client";

import { phoneNumber, phoneNumberStr } from "@/constants";
import styles from "./TopCallBar.module.css";

export default function TopCallBar() {
  return (
    <div className={styles.bar}>
      <a
        href={`tel:+${phoneNumberStr}`}
        className={styles.link}
        aria-label={`Call us at ${phoneNumber}`}
      >
        📞 <span>Call us:</span> <strong>{phoneNumber}</strong>
      </a>
    </div>
  );
}
