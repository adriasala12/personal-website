'use client';

import BentoBoxPage from '@/components/pages/BentoBoxPage/BentoBoxPage';
import ExperiencePage from '@/components/pages/ExperiencePage/ExperiencePage';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  return (
    <main>
      <HomePage />
      <ExperiencePage />
      <BentoBoxPage />
    </main>
  );
}
