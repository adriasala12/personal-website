'use client';

import ExperiencePage from '@/components/pages/ExperiencePage/ExperiencePage';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  return (
    <main>
      <HomePage />
      <ExperiencePage />
      <HomePage />
    </main>
  );
}
