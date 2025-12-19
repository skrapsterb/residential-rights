import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, serviceType, message } = body;

    // Basic validation
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail || !process.env.RESEND_API_KEY) {
      console.error('Missing CONTACT_TO_EMAIL or RESEND_API_KEY environment variables.');
      return NextResponse.json(
        { error: 'Email configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const subject = `New website inquiry – ${serviceType}`;
    const textBody = [
      '=====================================',
      'New Website Inquiry – Residential Rights Legal Counsel',
      '=====================================',
      '',
      `Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`,
      '',
      'Client Information',
      '------------------',
      `Name:        ${name}`,
      `Email:       ${email}`,
      `Service Type: ${serviceType}`,
      '',
      'Message',
      '-------',
      message,
      '',
      'End of message.',
    ].join('\n');


    const { data, error } = await resend.emails.send({
      from: 'Residential Rights Legal Counsel <no-reply@residentialrights.com>',
      to: [toEmail],
      replyTo: email,
      subject,
      text: textBody,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Email service error. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('Contact form email sent via Resend:', {
      data,
      name,
      email,
      serviceType,
      to: toEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Your message has been sent. You should receive a reply within one business day.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
