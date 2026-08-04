import { FaCodeBranch, FaGithub, FaStar } from 'react-icons/fa6';
import { useGithubData } from '@/hooks/useGithubData';
import { Reveal } from '@/components/common/Reveal';
import profile from '@/data/profile.json';

/**
 * Pulls live public repos + recent push activity from the GitHub REST API.
 * Fails gracefully (renders nothing but a note) if the API is unreachable
 * or rate-limited, so it never blocks the rest of the page.
 */
export function GithubActivity() {
  const { repos, events, isLoading, error } = useGithubData(profile.githubUsername);

  if (error) {
    return (
      <p className="text-sm text-muted-dark light:text-muted-light">
        GitHub activity is temporarily unavailable ({error}). Visit my{' '}
        <a
          href={`https://github.com/${profile.githubUsername}`}
          target="_blank"
          rel="noreferrer noopener"
          className="text-signal-500 hover:underline"
        >
          GitHub profile
        </a>{' '}
        directly.
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-32 animate-pulse rounded-2xl border border-line-dark/60 bg-white/5 light:border-line-light/60"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Reveal
            key={repo.id}
            className="rounded-2xl border border-line-dark/60 bg-white/5 p-5 light:border-line-light/60 light:bg-black/[0.02]"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 font-display font-semibold text-text-dark hover:text-signal-500 light:text-text-light"
            >
              <FaGithub size={15} />
              {repo.name}
            </a>
            <p className="mt-2 line-clamp-2 text-sm text-muted-dark light:text-muted-light">
              {repo.description ?? 'No description provided.'}
            </p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-dark light:text-muted-light">
              {repo.language && <span>{repo.language}</span>}
              <span className="inline-flex items-center gap-1">
                <FaStar size={11} /> {repo.stargazers_count}
              </span>
              <span className="inline-flex items-center gap-1">
                <FaCodeBranch size={11} /> {repo.forks_count}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {events.length > 0 && (
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-text-dark light:text-text-light">
            Latest commits
          </h3>
          <ul className="space-y-3">
            {events.map((event) => (
              <li
                key={event.id}
                className="rounded-xl border border-line-dark/60 bg-white/5 p-4 text-sm light:border-line-light/60 light:bg-black/[0.02]"
              >
                <p className="font-medium text-text-dark light:text-text-light">
                  {event.repo.name}
                </p>
                {event.payload?.commits?.[0] && (
                  <p className="mt-1 text-muted-dark light:text-muted-light">
                    {event.payload.commits[0].message}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
