import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/common/ScrollProgressBar';
import { BackToTop } from '@/components/common/BackToTop';
import { CustomCursor } from '@/components/common/CustomCursor';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-ink text-text-dark light:bg-paper light:text-text-light">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
