import { Timeline } from '../../components/timeline/timeline.tsx';
import experience from './experience.tsx';

export default function ExperiencePage() {
  return (
    <section id="experience" className="min-h-screen">
      <Timeline data={experience} />
    </section>
  );
}
