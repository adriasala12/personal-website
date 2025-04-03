import type React from 'react';
import { cn } from '../../lib/utils.ts';

export default function BentoSection({
  sectionId,
  title,
  className,
  children,
}: {
  sectionId: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="contents">
      <h2
        id={sectionId}
        className="xl:hidden text-4xl md:text-5xl pb-3 font-bold mt-8 mb-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"
      >
        {title}
      </h2>
      <div className={cn(className, 'xl:bg-gray-800 rounded-xl p-2 xl:p-10')}>
        <h2 className="hidden xl:block text-2xl font-bold mb-8 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
