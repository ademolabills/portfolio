import type { GithubEvent, GithubRepo } from '@/types';

const GITHUB_API_BASE = 'https://api.github.com';

async function githubFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}

/** Fetches public, non-fork repos sorted by most recently updated. */
export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const repos = await githubFetch<GithubRepo[]>(
    `/users/${username}/repos?sort=updated&per_page=12`,
  );
  return repos.filter((repo) => !repo.fork).slice(0, 6);
}

/** Fetches recent public events (used to surface latest commits/activity). */
export async function fetchGithubEvents(username: string): Promise<GithubEvent[]> {
  const events = await githubFetch<GithubEvent[]>(`/users/${username}/events/public?per_page=30`);
  return events.filter((event) => event.type === 'PushEvent').slice(0, 5);
}
