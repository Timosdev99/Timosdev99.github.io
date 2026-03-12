import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();


    const fromEmail = 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact Form <${fromEmail}>`,
      to: ['timothyisah4@gmail.com'],
      subject: `New Message from ${name} (Portfolio Contact Form)`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json({ message: 'Error sending email.', error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error in API route handler:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.', error: error.message }, { status: 500 });
  }
}
