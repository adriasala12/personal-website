import type { CloudIcon } from '@heroicons/react/24/solid';
import type React from 'react';

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
}: { experience: ITimelineContentProps }) => (
  <>
    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
      {experience.title}
    </h2>
    <h3 className="text-lg mb-6 md:mb-10 md:text-3xl font-bold text-neutral-300 dark:text-neutral-400 ">
      @ {experience.company}
    </h3>

    {/* Experience List */}
    <div className="mt-6">
      <h5 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-3">
        Key Responsibilities:
      </h5>
      <ul className="text-gray-700 dark:text-gray-300 space-y-4">
        {experience.experienceList.map((item, index) => (
          <li key={`${index}-${experience.title}`} className="flex gap-x-2">
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {item.content}
          </li>
        ))}
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
