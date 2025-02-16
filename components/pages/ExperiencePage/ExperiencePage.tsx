'use client';
import experience from '@/components/pages/ExperiencePage/experience';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ExperiencePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const maxScrollLeft = section.scrollWidth - section.clientWidth;

      if (section.getBoundingClientRect().top === 0) {
        if (event.deltaY > 0) {
          // Scrolling down → move right
          section.scrollLeft += 50;
        } else {
          // Scrolling up → move left
          section.scrollLeft -= 50;
        }

        if (section.scrollLeft < maxScrollLeft && section.scrollLeft !== 0) {
          event.preventDefault();
        }
      }
    };

    window.addEventListener('wheel', handleScroll, {
      passive: false,
      capture: true,
    });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setWidth(sectionRef.current.scrollWidth);
    }
  }, []);

  const { scrollXProgress } = useScroll({
    container: sectionRef,
    axis: 'x',
    offset: ['start 25%', 'end 100%'],
  });

  const widthTransform = useTransform(
    scrollXProgress,
    [0, 0.8, 1],
    [0, 0.7 * width, width],
  );
  const opacityTransform = useTransform(scrollXProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-screen overflow-x-scroll snap-x snap-mandatory"
    >
      <div className="flex flex-col h-full min-w-max space-x-10 px-16 pt-72">
        {/* Progress Line */}
        <div className="w-full h-[3px] bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2">
          <motion.div
            style={{ width: widthTransform, opacity: opacityTransform }}
            className="h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-400 via-50% via-fuchsia-600 to-indigo-400 rounded-full"
          />
        </div>

        <div className="flex flex-row">
          {experience.map((exp) => (
            <div key={exp.title} className="flex flex-col  w-[75vw] px-32">
              {/* Timeline Dots */}
              <div className="relative -translate-y-[55%] flex items-center justify-center h-10 w-10 bg-white dark:bg-black rounded-full">
                <div className="h-4 w-4 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-full" />
              </div>

              {/* Content */}
              <h3 className="mt-8 text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {exp.date}
              </h3>
              <div className="mt-12 pl-1">
                <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-300">
                  {exp.title}
                </h2>
                <h2 className="mt-4 text-xl font-bold text-neutral-700 dark:text-neutral-400">
                  @ {exp.company}
                </h2>
                <div className="mt-8">{exp.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
