import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { Seo } from '@/components/common/Seo';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { Reveal } from '@/components/common/Reveal';
import profile from '@/data/profile.json';

export default function Contact() {
  const github = profile.socials.find((s) => s.label === 'GitHub');
  const linkedin = profile.socials.find((s) => s.label === 'LinkedIn');

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Ademola Adedolapo Olalekan for full-time roles, freelance projects or collaboration."
        path="/contact"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's talk about your project"
          description="Whether it's a full-time role, freelance work, or just a technical question — my inbox is open."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-line-dark/60 bg-white/5 p-5 transition-colors hover:border-signal-500/60 light:border-line-light/60 light:bg-black/[0.02]"
            >
              <FaEnvelope className="text-signal-500" size={18} />
              <div>
                <p className="text-sm font-semibold text-text-dark light:text-text-light">
                  Email
                </p>
                <p className="text-sm text-muted-dark light:text-muted-light">{profile.email}</p>
              </div>
            </a>

            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-2xl border border-line-dark/60 bg-white/5 p-5 transition-colors hover:border-signal-500/60 light:border-line-light/60 light:bg-black/[0.02]"
              >
                <FaGithub className="text-signal-500" size={18} />
                <div>
                  <p className="text-sm font-semibold text-text-dark light:text-text-light">
                    GitHub
                  </p>
                  <p className="text-sm text-muted-dark light:text-muted-light">{github.url}</p>
                </div>
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 rounded-2xl border border-line-dark/60 bg-white/5 p-5 transition-colors hover:border-signal-500/60 light:border-line-light/60 light:bg-black/[0.02]"
              >
                <FaLinkedin className="text-signal-500" size={18} />
                <div>
                  <p className="text-sm font-semibold text-text-dark light:text-text-light">
                    LinkedIn
                  </p>
                  <p className="text-sm text-muted-dark light:text-muted-light">{linkedin.url}</p>
                </div>
              </a>
            )}

            <div className="flex items-center gap-4 rounded-2xl border border-line-dark/60 bg-white/5 p-5 light:border-line-light/60 light:bg-black/[0.02]">
              <FaLocationDot className="text-signal-500" size={18} />
              <div>
                <p className="text-sm font-semibold text-text-dark light:text-text-light">
                  Location
                </p>
                <p className="text-sm text-muted-dark light:text-muted-light">
                  {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-2xl border border-line-dark/60 bg-white/5 p-6 light:border-line-light/60 light:bg-black/[0.02] sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
