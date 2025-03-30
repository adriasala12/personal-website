import {
  BugAntIcon,
  CloudIcon,
  CodeBracketIcon,
  ServerIcon,
} from '@heroicons/react/24/solid';
import type { ITimelineEntry } from '../../components/timeline/timeline.tsx';

const experience: ITimelineEntry[] = [
  {
    date: 'Current',
    subDate: '(Since Feb 2022)',
    timelineContent: {
      title: 'Full Stack JS/TS Cloud Software Developer',
      company: 'HP Inc.',
      experienceList: [
        {
          icon: CloudIcon,
          content: (
            <span>
              Working in a{' '}
              <strong>microservices cloud-based architecture</strong>, I engaged
              in a wide range of development tasks, including functionality
              definition, implementation, and testing, both in the backend and
              frontend.
            </span>
          ),
        },
        {
          icon: CodeBracketIcon,
          content: (
            <span>
              Led <strong>significant code refactors</strong> critical to the
              company, along with crucial performance improvements that proved
              essential during periods of high system load.
            </span>
          ),
        },
        {
          icon: ServerIcon,
          content: (
            <span>
              Performed <strong>SRE tasks</strong> like general monitoring,
              implementing health checks, and automatic retries for our
              microservices, enhancing observability with{' '}
              <strong>NewRelic, Sentry, and Grafana</strong>.
            </span>
          ),
        },
        {
          icon: BugAntIcon,
          content: (
            <span>
              Periodically handled{' '}
              <strong>customer requests and bug fixing</strong>, collaborating
              with the Customer Support team to resolve issues efficiently.
            </span>
          ),
        },
        {
          icon: ServerIcon,
          content: (
            <span>
              Experience integrating with <strong>third-party services</strong>,
              primarily shipping carriers, both directly and through third-party
              integrations.
            </span>
          ),
        },
        {
          icon: ServerIcon,
          content: (
            <span>
              Maintained our internal{' '}
              <strong>TypeScript-based framework</strong> for Node.js APIs and
              messaging-based systems, and led the migration of our main legacy
              API from scratch to this new framework.
            </span>
          ),
        },
      ],
      techStack: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'HTML/CSS',
        'AWS',
        'MongoDB',
        'Vue.js',
        'SQL',
        'Docker',
        'RabbitMQ',
      ],
    },
  },
  {
    date: 'December 2020',
    subDate: '(Until Jan 2022)',
    timelineContent: {
      title: 'Full Stack .NET Software Developer',
      company: 'L-mobile Solutions',
      experienceList: [
        {
          icon: CloudIcon,
          content: (
            <span>
              Working in a{' '}
              <strong>microservices cloud-based architecture</strong>, I engaged
              in a wide range of development tasks, including functionality
              definition, implementation, and testing, both in the backend and
              frontend.
            </span>
          ),
        },
        {
          icon: CodeBracketIcon,
          content: (
            <span>
              Led <strong>significant code refactors</strong> critical to the
              company, along with crucial performance improvements that proved
              essential during periods of high system load.
            </span>
          ),
        },
        {
          icon: ServerIcon,
          content: (
            <span>
              Performed <strong>SRE tasks</strong> like general monitoring,
              implementing health checks, and automatic retries for our
              microservices, enhancing observability with{' '}
              <strong>NewRelic, Sentry, and Grafana</strong>.
            </span>
          ),
        },
      ],
      techStack: [
        'C#',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        "Google's Firebase",
        'Node-RED',
        'SQL',
        'Microsoft SQL Server Manager',
      ],
    },
  },
];

export default experience;
