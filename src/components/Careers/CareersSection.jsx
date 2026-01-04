"use client";

import { useEffect, useMemo, useState } from "react";

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function ApplyDrawer({ open, onClose, jobTitle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCH_CLIENT_KEY ||
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const resetStatus = () => setStatus({ type: "idle", message: "" });

  const validate = () => {
    if (!jobTitle) {
      return "Missing job title.";
    }
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return "Please fill in all required fields.";
    }
    if (!resume) {
      return "Please attach your resume.";
    }
    if (!ALLOWED_MIME_TYPES.includes(resume.type)) {
      return "Resume must be a PDF or DOC file.";
    }
    return "";
  };

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
    resetStatus();

    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    if (!siteKey) {
      setStatus({
        type: "error",
        message: "reCAPTCHA is not configured. Please try again later.",
      });
      return;
    }

    if (!window.grecaptcha || !recaptchaReady) {
      setStatus({
        type: "error",
        message: "reCAPTCHA is not ready. Please try again.",
      });
      return;
    }

    let token = recaptchaToken;
    if (!token) {
      try {
        await new Promise((resolve) => window.grecaptcha.ready(resolve));
        token = await window.grecaptcha.execute(siteKey, {
          action: "careers_apply",
        });
        setRecaptchaToken(token);
      } catch (error) {
        setStatus({
          type: "error",
          message: "Unable to verify reCAPTCHA. Please try again.",
        });
        return;
      }
    }

    if (!token) {
      setStatus({
        type: "error",
        message: "Unable to verify reCAPTCHA. Please try again.",
      });
      return;
    }

    const payload = new FormData();
    payload.append("jobTitle", jobTitle);
    payload.append("name", name.trim());
    payload.append("email", email.trim());
    payload.append("phone", phone.trim());
    payload.append("resume", resume);
    payload.append("recaptchaToken", token);
    if (message.trim()) {
      payload.append("message", message.trim());
    }

    setSubmitting(true);
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "careers_apply", {
          event_category: "careers",
          event_label: "attempt",
          job_title: jobTitle,
          resume_type: resume?.type || "unknown",
          message_length: message.trim().length,
        });
      }

      const response = await fetch("/careers/apply", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit application.");
      }

      setStatus({
        type: "success",
        message:
          "Application submitted successfully. Our team will contact you.",
      });
      if (typeof window.gtag === "function") {
        window.gtag("event", "careers_apply", {
          event_category: "careers",
          event_label: "success",
          job_title: jobTitle,
          resume_type: resume?.type || "unknown",
          message_length: message.trim().length,
        });
      }
      setRecaptchaToken("");
    } catch (error) {
      if (typeof window.gtag === "function") {
        window.gtag("event", "careers_apply", {
          event_category: "careers",
          event_label: "error",
          job_title: jobTitle,
          error_type: "request_failed",
        });
      }
      setStatus({
        type: "error",
        message: error?.message || "Unable to submit application.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/35 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-[32px] h-[calc(100%-32px)] w-full max-w-md bg-white shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-neutral-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-audax-charcoal">
              Apply for {jobTitle}
            </h2>
            <p className="text-sm text-neutral-600">
              Complete the form below to submit your application.
            </p>
          </div>
          <button
            type="button"
            className="text-neutral-500 hover:text-audax-charcoal"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4 px-6 py-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Phone *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
              placeholder="(###) ###-####"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Resume (PDF or DOC) *
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(event) => {
                const file = event.target.files?.[0] || null;
                setResume(file);
              }}
              className="mt-2 w-full text-sm text-neutral-600 file:mr-4 file:rounded file:border-0 file:bg-audax-gold file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-wide file:text-audax-dark hover:file:bg-[#c9a031]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Message (optional)
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
              placeholder="Share any additional details"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-audax-gold py-2.5 text-sm font-semibold uppercase tracking-wide text-audax-dark transition hover:bg-[#c9a031] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
            {status.type !== "idle" && (
              <p
                className={`mt-3 text-sm ${
                  status.type === "success" ? "text-green-700" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function CareersSection({ roles }) {
  const [activeRole, setActiveRole] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  const cards = useMemo(() => roles ?? [], [roles]);

  return (
    <>
      <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm w-full">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((role) => (
            <article
              key={role.title}
              className="rounded-lg border border-neutral-200 bg-white overflow-hidden flex flex-col"
            >
              <div className="bg-neutral-100 px-4 py-3">
                <div className="h-28 relative">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/35" />
                  <h3 className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-semibold text-audax-charcoal">
                    {role.title}
                  </h3>
                </div>
              </div>
              <div className="bg-neutral-50 px-4 py-6 flex-1 flex flex-col">
                <ul className="text-[15px] text-neutral-600 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-audax-red shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-100 px-4 py-3 border-t border-neutral-200 flex justify-end">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    className="text-xs font-semibold uppercase tracking-wide text-audax-charcoal hover:text-audax-gold transition"
                    href={`tel:${role.phoneNumberStr}`}
                  >
                    Call Us: {role.phoneNumber}
                  </a>
                  <button
                    className="rounded bg-audax-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-audax-dark"
                    type="button"
                    onClick={() => {
                      setActiveRole(role.title);
                      setDrawerOpen(true);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ApplyDrawer open={drawerOpen} onClose={closeDrawer} jobTitle={activeRole} />
    </>
  );
}
