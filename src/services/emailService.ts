import emailjs from '@emailjs/browser';
import type { ContactFormData } from '@/types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export class EmailConfigError extends Error {}

/**
 * Sends the contact form via EmailJS. Throws EmailConfigError if the
 * required environment variables have not been configured, so the UI
 * can show a helpful message instead of a silent failure.
 */
export async function sendContactMessage(data: ContactFormData): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new EmailConfigError(
      'Email service is not configured yet. Add your EmailJS keys to .env to enable the contact form.',
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    },
    { publicKey: PUBLIC_KEY },
  );
}
