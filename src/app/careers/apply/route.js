import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const isAllowedResume = (file) => {
  if (!file) {
    return false;
  }
  if (ALLOWED_MIME_TYPES.includes(file.type)) {
    return true;
  }
  const lowerName = file.name?.toLowerCase() || "";
  return ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
};

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
    const formData = await request.formData();
    const jobTitle = formData.get("jobTitle")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const resume = formData.get("resume");
    const recaptchaToken = formData.get("recaptchaToken")?.toString().trim();

    if (!jobTitle || !name || !email || !phone || !resume || !recaptchaToken) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!isAllowedResume(resume)) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Resume must be a PDF or DOC file.",
        }),
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
    if (action !== "careers_apply" || score < 0.5) {
      return new Response(
        JSON.stringify({ ok: false, error: "reCAPTCHA score too low." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email service not configured.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const from =
      process.env.CAREERS_FROM_EMAIL ||
      process.env.CONTACT_FROM_EMAIL ||
      "onboarding@resend.dev";
    const to =
      process.env.CAREERS_TO_EMAIL ||
      process.env.CONTACT_TO_EMAIL ||
      "Mliebny@gmail.com";
    const subject = `Audax-ny: New application for ${jobTitle} from ${name}`;

    await resend.emails.send({
      from,
      to,
      subject,
      reply_to: email,
      text: [
        `Job Title: ${jobTitle}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        message ? `Message:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New Job Application</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${message
          ? `<p><strong>Message:</strong></p><p>${message.replace(
            /\n/g,
            "<br />"
          )}</p>`
          : ""
        }
      `,
      attachments: [
        {
          filename: resume.name || "resume",
          content: resumeBuffer,
        },
      ],
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Application submitted successfully. Our team will contact you.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unable to submit application.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
