import { Link } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { Seo } from '@/components/common/Seo';
import { Reveal } from '@/components/common/Reveal';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-8xl font-bold text-signal-500/30">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-text-dark light:text-text-light sm:text-3xl">
            This page went missing.
          </h1>
          <p className="mt-3 text-muted-dark light:text-muted-light">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
            you back on track.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 font-medium text-ink transition-transform hover:scale-105"
          >
            <FaHouse size={14} />
            Back to home
          </Link>
        </Reveal>
      </section>
    </>
  );
}
