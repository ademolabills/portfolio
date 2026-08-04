import { Suspense, lazy, type ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from '@/layouts/MainLayout';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { pageTransition } from '@/animations/variants';

// Route-level code splitting: each page loads only when visited, keeping the
// initial bundle small (per the "lazy loading / code splitting" requirement).
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Skills = lazy(() => import('@/pages/Skills'));
const Projects = lazy(() => import('@/pages/Projects'));
const Experience = lazy(() => import('@/pages/Experience'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Blog = lazy(() => import('@/pages/Blog'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-signal-500 border-t-transparent" />
    </div>
  );
}

function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage>
              <Skills />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          }
        />
        <Route
          path="/experience"
          element={
            <AnimatedPage>
              <Experience />
            </AnimatedPage>
          }
        />
        <Route
          path="/testimonials"
          element={
            <AnimatedPage>
              <Testimonials />
            </AnimatedPage>
          }
        />
        <Route
          path="/blog"
          element={
            <AnimatedPage>
              <Blog />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="*"
          element={
            <AnimatedPage>
              <NotFound />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <MainLayout>
        <Suspense fallback={<PageFallback />}>
          <AppRoutes />
        </Suspense>
      </MainLayout>
    </>
  );
}
