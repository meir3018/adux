import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyRecaptcha = async (token) => {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return { ok: false, error: "reCAPTCHA not configured." };
  }
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return { ok: Boolean(data?.success), data };
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = body ?? {};

    if (!name || !email || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "reCAPTCHA verification failed." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const action = recaptchaResult.data?.action;
    const score =
      typeof recaptchaResult.data?.score === "number"
        ? recaptchaResult.data.score
        : 0;
    if (action !== "contact_form" || score < 0.5) {
      return new Response(
        JSON.stringify({ ok: false, error: "reCAPTCHA score too low." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ ok: false, error: "Email service not configured." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "Mliebny@gmail.com";
    const subject = `Audax-ny: New contact form message from ${name}`;

    const emailResponse = await resend.emails.send({
      from,
      to,
      subject,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("@@@ email response ", emailResponse)
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: "Unable to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
