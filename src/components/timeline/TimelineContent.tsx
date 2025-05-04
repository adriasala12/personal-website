import type { CloudIcon } from '@heroicons/react/24/solid';
import type React from 'react';
import { useState } from 'react';

export interface ITimelineContentProps {
  title: string;
  company: string;
  experienceList: IExperienceItem[];
  techStack?: string[];
}

interface IExperienceItem {
  icon: typeof CloudIcon;
  content: React.ReactNode;
}

export const TimelineContent = ({
  experience,
  showAll = false,
}: { experience: ITimelineContentProps; showAll: boolean }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
        {experience.title}
      </h2>
      <h3 className="text-3xl md:text-4xl mb-6 md:mb-10 font-bold text-neutral-100 ">
        @ {experience.company}
      </h3>

      {/* Experience List */}
      <div className="mt-6">
        <h5 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-3">
          Key Responsibilities:
        </h5>
        <ul className="text-gray-700 dark:text-gray-300 space-y-4">
          {(showMore || showAll
            ? experience.experienceList
            : experience.experienceList.slice(0, 1)
          ).map((item, index) => (
            <li
              key={`${index}-${experience.title}`}
              className="flex-col text-neutral-300"
            >
              <p className="flex gap-x-2">
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {item.content}
              </p>
              {!showMore && !showAll && (
                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                  className="mt-5 font-semibold ml-4 underline underline-offset-3 cursor-pointer hover:-translate-y-1/12 transition-transform duration-200 ease-in-out"
                >
                  Show more
                </button>
              )}
            </li>
          ))}
          {showMore && (
            <button
              type="button"
              onClick={() => setShowMore(false)}
              className="mt-5 font-semibold ml-4 underline underline-offset-3 cursor-pointer hover:-translate-y-1/12 transition-transform duration-200 ease-in-out"
            >
              Show less
            </button>
          )}
        </ul>
      </div>

      {/* Tech Stack */}
      {experience.techStack && (
        <div className="mt-6">
          <h5 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-3">
            Tech Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
