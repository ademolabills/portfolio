import { Icon } from '@/components/common/Icon';
import profile from '@/data/profile.json';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {profile.socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target={social.url.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer noopener"
          aria-label={social.label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark/60 text-text-dark transition-all hover:-translate-y-1 hover:border-signal-500 hover:text-signal-500 light:border-line-light/60 light:text-text-light"
        >
          <Icon name={social.icon} size={17} />
        </a>
      ))}
    </div>
  );
}
