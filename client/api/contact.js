import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      phone,
      email,
      course,
      center,
    } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello@catalysthub.in",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Center:</strong> ${center}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      error: "Failed to send email",
    });
  }
}