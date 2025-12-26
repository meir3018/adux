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

export async function POST(request) {
  try {
    const formData = await request.formData();
    const jobTitle = formData.get("jobTitle")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const resume = formData.get("resume");

    if (!jobTitle || !name || !email || !phone || !resume) {
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
      "greg.bluvshteyn@gmail.com";
    const subject = `New application for ${jobTitle} from ${name}`;

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
        ${
          message
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
