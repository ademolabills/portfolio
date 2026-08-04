import { createContext, useMemo, useState, type ReactNode } from 'react';

interface LoadingContextValue {
  isLoading: boolean;
  finishLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(
    () => ({
      isLoading,
      finishLoading: () => setIsLoading(false),
    }),
    [isLoading],
  );

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}
