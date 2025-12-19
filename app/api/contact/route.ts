import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, serviceType, message } = body;

    if (!name || !email || !serviceType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const subject = `New website inquiry – ${serviceType}`;

    const html = `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">
${escapeHtml(message)}
      </pre>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Thanks — we received your message." },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "An error occurred processing your request." },
      { status: 500 }
    );
  }
}

// tiny helper to avoid HTML injection in emails
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
