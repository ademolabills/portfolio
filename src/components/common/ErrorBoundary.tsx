import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Top-level error boundary. Renders a friendly fallback instead of a blank
 * white screen if any part of the component tree throws during render.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production this is where you'd forward to an error-tracking service (e.g. Sentry).
    console.error('Portfolio crashed:', error, info.componentStack);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink px-6 text-center text-text-dark">
          <h1 className="font-display text-2xl font-semibold">Something went wrong.</h1>
          <p className="max-w-md text-muted-dark">
            An unexpected error occurred while rendering this page. Try reloading — if it
            persists, please let me know via the contact page.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="rounded-full bg-signal-500 px-6 py-2.5 font-medium text-ink transition-transform hover:scale-105"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
