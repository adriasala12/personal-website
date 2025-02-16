import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import {
  CloudIcon,
  CodeBracketSquareIcon,
  CogIcon,
  ServerStackIcon,
} from '@heroicons/react/24/solid';
import { DatabaseIcon } from 'lucide-react';
import type React from 'react';

export interface IExperience {
  date: string;
  title: string;
  company: string;
  content: React.ReactNode;
}

const experience: IExperience[] = [
  {
    date: 'Current',
    title: 'Full Stack JS/TS Cloud Software Developer',
    company: 'HP Inc.',
    content: (
      <>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          <li className="flex items-center gap-x-2">
            <CloudIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Worked in a{' '}
              <strong>microservices cloud-based architecture</strong>, handling
              <strong> high availability</strong> and
              <strong> scalable solutions</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CodeBracketSquareIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Led <strong>major refactors</strong> &{' '}
              <strong>performance improvements</strong>, critical for{' '}
              <strong>high system load periods</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <ServerStackIcon className="h-5 w-5 text-neutral-300" />
            <span>
              <strong>SRE tasks</strong>: Monitoring, health checks, automatic
              retries, and enhanced <strong>observability</strong> using{' '}
              <strong>NewRelic, Sentry, Grafana</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CogIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Integrated with <strong>third-party APIs</strong>, primarily
              shipping carriers, streamlining operational efficiency.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <DatabaseIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Maintained and migrated a{' '}
              <strong>TypeScript-based internal framework</strong>
              for <strong>Node.js APIs & messaging systems</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <WrenchScrewdriverIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Provided <strong>customer support & bug fixes</strong>,
              collaborating with the <strong>Customer Support team</strong>.
            </span>
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="mt-6">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3">
            Tech Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript',
              'TypeScript',
              'Node.js',
              'HTML/CSS',
              'MongoDB',
              'Vue.js',
              'AWS',
              'SQL',
              'Docker',
              'RabbitMQ',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    date: 'December 2020',
    title: 'Full Stack .NET Software Developer',
    company: 'L-mobile solutions GmbH & Co. KG EP España',
    content: (
      <>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          <li className="flex items-center gap-x-2">
            <CloudIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Worked in a{' '}
              <strong>microservices cloud-based architecture</strong>, handling
              <strong> high availability</strong> and
              <strong> scalable solutions</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CodeBracketSquareIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Led <strong>major refactors</strong> &{' '}
              <strong>performance improvements</strong>, critical for{' '}
              <strong>high system load periods</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <ServerStackIcon className="h-5 w-5 text-neutral-300" />
            <span>
              <strong>SRE tasks</strong>: Monitoring, health checks, automatic
              retries, and enhanced <strong>observability</strong> using{' '}
              <strong>NewRelic, Sentry, Grafana</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CogIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Integrated with <strong>third-party APIs</strong>, primarily
              shipping carriers, streamlining operational efficiency.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <DatabaseIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Maintained and migrated a{' '}
              <strong>TypeScript-based internal framework</strong>
              for <strong>Node.js APIs & messaging systems</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <WrenchScrewdriverIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Provided <strong>customer support & bug fixes</strong>,
              collaborating with the <strong>Customer Support team</strong>.
            </span>
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="mt-6">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3">
            Tech Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {[
              'C#',
              'TypeScript',
              'HTML/CSS',
              'NodeRed',
              'Google Firebase',
              'SQL',
              'Microsoft SQL Server Manager',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    date: 'September 2019',
    title: 'Financial Audit Internship',
    company: 'Deloitte',
    content: (
      <>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
          <li className="flex items-center gap-x-2">
            <CloudIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Worked in a{' '}
              <strong>microservices cloud-based architecture</strong>, handling
              <strong> high availability</strong> and
              <strong> scalable solutions</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CodeBracketSquareIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Led <strong>major refactors</strong> &{' '}
              <strong>performance improvements</strong>, critical for{' '}
              <strong>high system load periods</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <ServerStackIcon className="h-5 w-5 text-neutral-300" />
            <span>
              <strong>SRE tasks</strong>: Monitoring, health checks, automatic
              retries, and enhanced <strong>observability</strong> using{' '}
              <strong>NewRelic, Sentry, Grafana</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <CogIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Integrated with <strong>third-party APIs</strong>, primarily
              shipping carriers, streamlining operational efficiency.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <DatabaseIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Maintained and migrated a{' '}
              <strong>TypeScript-based internal framework</strong>
              for <strong>Node.js APIs & messaging systems</strong>.
            </span>
          </li>

          <li className="flex items-center gap-x-2">
            <WrenchScrewdriverIcon className="h-5 w-5 text-neutral-300" />
            <span>
              Provided <strong>customer support & bug fixes</strong>,
              collaborating with the <strong>Customer Support team</strong>.
            </span>
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="mt-6">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3">
            Tech Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript',
              'TypeScript',
              'Node.js',
              'HTML/CSS',
              'MongoDB',
              'Vue.js',
              'AWS',
              'SQL',
              'Docker',
              'RabbitMQ',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </>
    ),
  },
];

export default experience;
