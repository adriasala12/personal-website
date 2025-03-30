'use client';

import BentoBoxPage from '@/components/pages/BentoBoxPage/BentoBoxPage';
import ContactPage from '@/components/pages/ContactPage';
import ExperiencePage from '@/components/pages/ExperiencePage/ExperiencePage';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  return (
    <main>
      <HomePage />
      <ExperiencePage />
      <BentoBoxPage />
      <ContactPage />
    </main>
  );
}
