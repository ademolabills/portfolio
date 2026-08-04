/** Formats an ISO date string as a short, readable date (e.g. "Jun 2024"). */
export function formatMonthYear(dateString: string): string {
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
      new Date(dateString),
    );
  } catch {
    return dateString;
  }
}

/** Truncates a string to a max length, appending an ellipsis if cut. */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/** Slugifies a string for use in ids / anchors. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
