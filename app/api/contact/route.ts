import { NextRequest, NextResponse } from "next/server";
import * as postmark from "postmark";

export async function POST(req: NextRequest) {
  try {
    const apiToken = process.env.POSTMARK_API_TOKEN;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiToken || !to) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const client = new postmark.ServerClient(apiToken);

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

    await client.sendEmail({
      From: "contact@residentialrights.com",
      To: to,
      ReplyTo: email,
      Subject: subject,
      HtmlBody: html,
    });

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
