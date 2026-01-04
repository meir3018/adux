"use client";

import { useEffect } from "react";

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event) => {
      if (typeof window.gtag !== "function") {
        return;
      }

      let node = event.target;
      while (node && node !== document.body) {
        if (node.dataset && node.dataset.gaTitle) {
          const title = node.dataset.gaTitle;
          const category = node.dataset.gaCategory || "click";
          const label = node.dataset.gaLabel || undefined;

          window.gtag("event", "click", {
            event_category: category,
            event_label: label,
            click_title: title,
          });
          break;
        }
        node = node.parentElement;
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
