import { phoneNumber, phoneNumberStr } from "@/constants";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <section
      className="py-24 mt-16"
      style={{
        backgroundColor: "var(--audax-light-neutral, #F7F4EF)",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 16px)",
      }}
    >
      <div className="max-w-8xl mx-auto px-4">
        <div className="border-b border-neutral-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-audax-charcoal">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Reach out with project questions, scheduling needs, or compliance
            support requests.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <form className="space-y-6 p-8">
              <div>
                <h2 className="text-base font-semibold text-audax-charcoal">
                  Contact Form
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Share a few details and our team will respond promptly.
                </p>
              </div>
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-800 shadow-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-800 shadow-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-800 shadow-sm focus:border-audax-gold focus:outline-none focus:ring-2 focus:ring-audax-gold/30"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <p className="text-xs text-neutral-500">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
                <button
                  type="submit"
                  className="rounded-md bg-audax-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-audax-dark hover:bg-[#c9a031] transition"
                >
                  Send
                </button>
              </div>
            </form>

            <aside className="space-y-8 border-t border-neutral-200 p-8 text-sm text-neutral-700 lg:border-l lg:border-t-0">
              <div>
                <h2 className="text-base font-semibold text-audax-charcoal mb-3">
                  Hours
                </h2>
                <ul className="space-y-1 text-neutral-600">
                  <li>Mon 09:00 am – 05:00 pm</li>
                  <li>Tue 09:00 am – 05:00 pm</li>
                  <li>Wed 09:00 am – 05:00 pm</li>
                  <li>Thu 09:00 am – 05:00 pm</li>
                  <li>Fri 09:00 am – 05:00 pm</li>
                  <li>Sat Closed</li>
                  <li>Sun Closed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-semibold text-audax-charcoal mb-3">
                  Phone
                </h2>
                <div className="space-y-2">
                  <a
                    className="block text-neutral-700 hover:text-audax-gold transition"
                    href={`tel:${phoneNumberStr}`}
                  >
                    {phoneNumber}
                  </a>
                  <a
                    className="block text-neutral-700 hover:text-audax-gold transition"
                    href="tel:7182128329"
                  >
                    (718) 212-8329
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold text-audax-charcoal mb-3">
                  Email
                </h2>
                <div className="space-y-2">
                  <a
                    className="block text-neutral-700 underline decoration-audax-gold/60 underline-offset-4 hover:text-audax-gold transition"
                    href="mailto:mark@audax-ny.com"
                  >
                    Mark@audax-ny.com
                  </a>
                  <a
                    className="block text-neutral-700 underline decoration-audax-gold/60 underline-offset-4 hover:text-audax-gold transition"
                    href="mailto:office@audax-ny.com"
                  >
                    Office@audax-ny.com
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
