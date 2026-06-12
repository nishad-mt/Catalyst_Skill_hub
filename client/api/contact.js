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
      pageUrl,
      turnstileToken,
    } = req.body;

    if (!turnstileToken) {
      return res.status(400).json({ error: "Captcha token missing" });
    }

    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyRes = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }

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
        <p><strong>Submitted From URL:</strong> <a href="${pageUrl || '#'}">${pageUrl || 'N/A'}</a></p>
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