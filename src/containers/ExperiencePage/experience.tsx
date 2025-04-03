import {
  BugAntIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ChartPieIcon,
  CloudIcon,
  CodeBracketIcon,
  PresentationChartBarIcon,
  ServerIcon,
} from '@heroicons/react/24/solid';
import type { ITimelineEntry } from '../../components/timeline/timeline.tsx';

const experience: ITimelineEntry[] = [
  {
    date: 'Current',
    subDate: '(Since Jan 2025)',
    timelineContent: {
      title: 'Full Stack Specialist Cloud Software Developer',
      company: 'HP Inc.',
      experienceList: [
        {
          icon: CloudIcon,
          content: (
            <span>
              Working in a{' '}
              <strong>microservices cloud-based architecture</strong>, engaging
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
    date: 'December 2024',
    subDate: '(Since May 2024)',
    timelineContent: {
      title: 'Full Stack .NET Software Developer',
      company: 'Stenn',
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
              Involved in critical UI redesigns and{' '}
              <strong>UI/UX improvements</strong>, to improve customer
              onboarding.
            </span>
          ),
        },
        {
          icon: PresentationChartBarIcon,
          content: (
            <span>
              Performed <strong>SRE tasks</strong> and{' '}
              <strong>monitoring</strong>, addressing both customer and internal
              issues, and adding monitoring to our services through
              OpenTelemetry.
            </span>
          ),
        },
      ],
      techStack: [
        '.NET Core',
        'TypeScript',
        'React',
        'HTML/CSS',
        'Azure',
        'SQL',
        'Docker',
      ],
    },
  },
  {
    date: 'April 2024',
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
  {
    date: 'September 2019',
    subDate: '(Until Dec 2019)',
    timelineContent: {
      title: 'Financial Audit Internship',
      company: 'Deloitte',
      experienceList: [
        {
          icon: BuildingLibraryIcon,
          content: (
            <span>
              Performed the tasks of a first-year assistant in the audit team of
              the insurance company <strong>SegurCaixa Adeslas</strong> and
              participated in projects for <strong>Banc Sabadell</strong> and{' '}
              <strong>CaixaBank</strong>.
            </span>
          ),
        },
        {
          icon: ChartPieIcon,
          content: (
            <span>
              The main tasks included performing audit tests, quantitative and
              qualitative analysis of the company's situation, having meetings
              with the customers to discuss their financial reporting and
              financial controls.
            </span>
          ),
        },
        {
          icon: ChartBarIcon,
          content: (
            <span>
              Besides financial audit, I earned a lot of expertise working with
              <strong>complex spreadsheets and large amounts of data</strong>,
              improved my financial accounting and business knowledge and had
              the opportunity to <strong>work in large teams</strong>.
            </span>
          ),
        },
      ],
    },
  },
];

export default experience;
