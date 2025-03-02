'use client';

import experience from '@/components/pages/ExperiencePage/experience';
import { Timeline } from '@/components/ui/timeline';

export default function ExperiencePage() {
  return (
    <section className="min-h-screen">
      <Timeline data={experience} />
    </section>
  );
}
