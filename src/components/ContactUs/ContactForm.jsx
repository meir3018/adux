"use client";

import { useState } from "react";

export default function ContactForm({ children }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const response = await fetch("/contact/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send message right now. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-6 p-8" onSubmit={onSubmit}>
      {children}
      <div className="flex items-center justify-end gap-4">
        <p className="text-xs text-neutral-500">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-audax-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-audax-dark hover:bg-[#c9a031] transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </div>
      {status.type !== "idle" && (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
