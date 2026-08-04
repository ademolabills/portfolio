import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { sendContactMessage } from '@/services/emailService';
import type { ContactFormData } from '@/types';

type Status = 'idle' | 'sending' | 'success' | 'error';

const INITIAL_FORM: ContactFormData = { name: '', email: '', subject: '', message: '' };

function validate(data: ContactFormData): Partial<ContactFormData> {
  const errors: Partial<ContactFormData> = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.';
  if (!data.subject.trim()) errors.subject = 'Please add a subject.';
  if (data.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    try {
      await sendContactMessage(formData);
      setStatus('success');
      setStatusMessage("Message sent — thanks for reaching out! I'll reply within a day or two.");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong sending your message. Please try emailing me directly.',
      );
    }
  };

  const fieldClass =
    'w-full rounded-xl border border-line-dark/60 bg-transparent px-4 py-3 text-sm text-text-dark placeholder:text-muted-dark focus:border-signal-500 focus:outline-none light:border-line-light/60 light:text-text-light';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange('subject')}
          className={fieldClass}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange('message')}
          className={fieldClass}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 font-medium text-ink transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FaPaperPlane size={13} />
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className={
          status === 'success'
            ? 'text-sm text-signal-500'
            : status === 'error'
              ? 'text-sm text-red-400'
              : 'sr-only'
        }
      >
        {statusMessage}
      </p>
    </form>
  );
}
