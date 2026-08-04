import { useEffect, useState } from 'react';
import { fetchGithubEvents, fetchGithubRepos } from '@/services/githubService';
import type { GithubEvent, GithubRepo } from '@/types';

interface GithubDataState {
  repos: GithubRepo[];
  events: GithubEvent[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Pulls a user's public repositories and recent activity from the GitHub API.
 * Designed to fail gracefully: on error/rate-limit, the section can simply hide.
 */
export function useGithubData(username: string): GithubDataState {
  const [state, setState] = useState<GithubDataState>({
    repos: [],
    events: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [repos, events] = await Promise.all([
          fetchGithubRepos(username),
          fetchGithubEvents(username),
        ]);
        if (!cancelled) {
          setState({ repos, events, isLoading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            repos: [],
            events: [],
            isLoading: false,
            error: err instanceof Error ? err.message : 'Failed to load GitHub data',
          });
        }
      }
    }

    if (username) {
      load();
    } else {
      setState({ repos: [], events: [], isLoading: false, error: 'No username configured' });
    }

    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
