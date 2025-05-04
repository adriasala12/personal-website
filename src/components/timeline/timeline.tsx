// https://ui.aceternity.com/components/timeline

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { type ITimelineContentProps, TimelineContent } from './TimelineContent';

export interface ITimelineEntry {
  date: string;
  subDate: string;
  timelineContent: ITimelineContentProps;
}

export const Timeline = ({ data }: { data: ITimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl mt-10 ml-4 font-bold bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent max-w-4xl">
          Here's My Experience
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={item.date}
            className="flex justify-start pt-8 md:pt-32 md:gap-12"
          >
            {/* DESKTOP VERSION */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex md:flex-col gap-6">
                <h3 className="pl-20 text-5xl font-bold text-neutral-500 dark:text-neutral-300 ">
                  {item.date}
                </h3>
                <h4 className="pl-20 text-2xl font-bold text-neutral-300 dark:text-neutral-500 ">
                  {item.subDate}
                </h4>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* MOBILE VERSION */}
              <div className="md:hidden block">
                <h3 className="text-2xl mb-2 md:mb-4 text-left font-bold text-neutral-500 dark:text-neutral-300">
                  {item.date}
                </h3>
                <h4 className="text-xl mb-6 text-left font-bold text-neutral-300 dark:text-neutral-500">
                  {item.subDate}
                </h4>
              </div>

              {/* CONTENT */}
              <TimelineContent
                experience={item.timelineContent}
                showAll={index === 0}
              />
            </div>
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
