"use client";

import { useEffect, useState } from "react";

export default function ContactForm({ children }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCH_CLIENT_KEY ||
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      return undefined;
    }

    const scriptId = "recaptcha-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaReady(true);
      document.body.appendChild(script);
    } else {
      setRecaptchaReady(Boolean(window.grecaptcha));
    }

    return () => {
      if (script) {
        script.onload = null;
      }
    };
  }, [siteKey]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    if (!siteKey) {
      setStatus({
        type: "error",
        message: "reCAPTCHA is not configured. Please try again later.",
      });
      setSubmitting(false);
      return;
    }

    if (!window.grecaptcha || !recaptchaReady) {
      setStatus({
        type: "error",
        message: "reCAPTCHA is not ready. Please try again.",
      });
      setSubmitting(false);
      return;
    }

    let token = recaptchaToken;
    if (!token) {
      try {
        await new Promise((resolve) => window.grecaptcha.ready(resolve));
        token = await window.grecaptcha.execute(siteKey, {
          action: "contact_form",
        });
        setRecaptchaToken(token);
      } catch (error) {
        setStatus({
          type: "error",
          message: "Unable to verify reCAPTCHA. Please try again.",
        });
        setSubmitting(false);
        return;
      }
    }

    if (!token) {
      setStatus({
        type: "error",
        message: "Unable to verify reCAPTCHA. Please try again.",
      });
      setSubmitting(false);
      return;
    }

    const form =
      event.currentTarget instanceof HTMLFormElement
        ? event.currentTarget
        : event.target instanceof HTMLElement
          ? event.target.closest("form")
          : null;

    if (!form) {
      setStatus({
        type: "error",
        message: "Unable to submit the form right now. Please try again.",
      });
      setSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const payload = {
      name,
      email,
      message,
      recaptchaToken: token,
    };

    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "contact_submit", {
          event_category: "contact",
          event_label: "attempt",
          has_name: Boolean(name),
          has_email: Boolean(email),
          message_length: message.length,
        });
      }

      const response = await fetch("/contact/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      if (typeof form.reset === "function") {
        form.reset();
      }
      if (typeof window.gtag === "function") {
        window.gtag("event", "contact_submit", {
          event_category: "contact",
          event_label: "success",
          message_length: message.length,
        });
      }
      setRecaptchaToken("");
      setStatus({ type: "success", message: "Message sent successfully." });
    } catch (error) {
      if (typeof window.gtag === "function") {
        window.gtag("event", "contact_submit", {
          event_category: "contact",
          event_label: "error",
          error_type: "request_failed",
        });
      }
      console.log("!! error ", error)
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
      {!siteKey && (
        <p className="text-xs text-neutral-500">
          reCAPTCHA is unavailable at the moment.
        </p>
      )}
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
          className={`text-sm ${status.type === "success" ? "text-green-700" : "text-red-600"
            }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
