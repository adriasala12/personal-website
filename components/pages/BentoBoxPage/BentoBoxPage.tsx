import BentoSection from '@/components/pages/BentoBoxPage/bento-section';

export default function BentoBoxPage() {
  return (
    <section className="min-h-screen pt-16 xl:pt-64 px-6 md:px-16 xl:px-10 pb-12 flex">
      <div className="max-w-screen-2xl mx-auto flex-grow grid xl:grid-cols-3 xl:grid-rows-2 gap-6 xl:gap-4">
        {/* Tech Stack */}
        <BentoSection
          sectionId="tech-stack"
          title="Tech Stack"
          className="xl:row-span-2 xl:rounded-l-[2.5rem]"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 xl:gap-5">
            {[
              { name: 'JavaScript', icon: '/tech_stack_logos/JS.svg' },
              { name: 'TypeScript', icon: '/tech_stack_logos/TS.svg' },
              { name: 'React', icon: '/tech_stack_logos/react.svg' },
              { name: 'Vue.js', icon: '/tech_stack_logos/vue.svg' },
              { name: 'Node.js', icon: '/tech_stack_logos/node_js.svg' },
              { name: 'MongoDB', icon: '/tech_stack_logos/mongodb.svg' },
              { name: 'AWS', icon: '/tech_stack_logos/aws.svg' },
              { name: 'Go', icon: '/tech_stack_logos/go.svg' },
              { name: '.NET', icon: '/tech_stack_logos/dotnet.svg' },
              { name: 'SQL', icon: '/tech_stack_logos/sql.svg' },
              { name: 'Python', icon: '/tech_stack_logos/python.svg' },
              { name: 'Docker', icon: '/tech_stack_logos/docker.svg' },
              { name: 'Swift', icon: '/tech_stack_logos/swift.svg' },
              { name: 'HTML', icon: '/tech_stack_logos/html.svg' },
              { name: 'CSS', icon: '/tech_stack_logos/css.svg' },
            ].map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 md:gap-5 xl:gap-3 bg-gray-700/80 xl:bg-gray-900/80 backdrop-blur-md rounded-lg px-3 md:px-5 py-4 xl:px-4 xl:py-6 shadow-md transition hover:shadow-lg hover:bg-gray-900"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-full bg-neutral-100 p-0.5"
                />
                <span className="text-gray-300 text-lg font-medium">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </BentoSection>

        {/* Education */}
        <BentoSection
          sectionId="education"
          title="Education"
          className="xl:row-span-1"
        >
          <ul className="space-y-6 text-lg text-gray-300">
            {[
              {
                name: 'Computer Science',
                dates: '(2017 - 2024)',
                institution: 'Universitat Oberta de Catalunya (UOC)',
                icon: '💻',
              },
              {
                name: 'International Business & Economics',
                dates: '(2016 - 2020)',
                institution: 'Universitat Pompeu Fabra (UPF)',
                icon: '📊',
              },
            ].map((education) => (
              <li
                key={education.name}
                className="flex items-center gap-6 bg-gray-700/80 xl:bg-gray-900/80 backdrop-blur-md rounded-lg p-6 py-8 shadow-md transition hover:shadow-lg hover:bg-gray-900"
              >
                <span className="text-3xl">{education.icon}</span>
                <div>
                  <p className="text-sm text-gray-400 font-thin">Bachelor in</p>
                  <p className="text-lg mb-2 font-bold">
                    {education.name}
                    <br className="xl:hidden" />
                    <span className="text-sm text-gray-500 font-thin italic">
                      {' '}
                      {education.dates}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {education.institution}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </BentoSection>

        {/* Certificates */}
        <BentoSection
          sectionId="certificates"
          title="Certificates"
          className="xl:row-span-2 xl:rounded-r-[2.5rem]"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:grid-cols-1">
            {[
              {
                name: 'AWS Certified Cloud Practitioner',
                institution: 'Amazon Web Services',
                icon: '/tech_stack_logos/aws.svg',
              },
              {
                name: 'Go Fundamentals',
                institution: "O'Reilly",
                icon: '/tech_stack_logos/go.svg',
              },
              {
                name: 'Docker Fundamentals',
                institution: "O'Reilly",
                icon: '/tech_stack_logos/docker.svg',
              },
              {
                name: 'React - The Complete Guide',
                institution: "O'Reilly",
                icon: '/tech_stack_logos/react.svg',
              },
              {
                name: 'Python for Data Science & Big Data Essentials',
                institution: 'LinkedIn',
                icon: '/tech_stack_logos/python.svg',
              },
              {
                name: 'Software Architecture: From Developer to Architect',
                institution: 'LinkedIn',
                icon: '/linkedin.svg',
              },
              {
                name: '100 Days of SwiftUI',
                institution: 'HackingWithSwift',
                icon: '/tech_stack_logos/swift.svg',
              },
              {
                name: 'CS50 Web Development with Python and JavaScript',
                institution: 'Harvard University',
                icon: '/tech_stack_logos/JS.svg',
              },
              {
                name: 'iOS Developer Nanodegree',
                institution: 'Udacity',
                icon: '/tech_stack_logos/swift.svg',
              },
            ].map((tech) => (
              <li
                key={tech.name}
                className="flex h-full items-center gap-6 bg-gray-700/80 xl:bg-gray-900/80 backdrop-blur-md rounded-lg p-4 py-5 shadow-md transition hover:shadow-lg hover:bg-gray-900"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 rounded-full bg-neutral-100 p-0.5"
                />
                <span className="text-gray-300 text-lg font-medium">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </BentoSection>

        {/* Languages */}
        <BentoSection
          sectionId="languages"
          title="Languages"
          className="xl:row-span-1"
        >
          <ul className="space-y-6 text-lg text-gray-300">
            {[
              { name: 'English', icon: '/languages/english.svg' },
              { name: 'Spanish', icon: 'languages/spanish.svg' },
              { name: 'Catalan', icon: 'languages/catalan.svg' },
            ].map((lang) => (
              <li
                key={lang.name}
                className="flex items-center gap-10 bg-gray-700/80 xl:bg-gray-900/80 backdrop-blur-md rounded-lg p-5 shadow-md transition hover:shadow-lg hover:bg-gray-900"
              >
                <img
                  src={lang.icon}
                  alt={lang.name}
                  className="w-14 h-14 rounded-full bg-neutral-100 p-0.5"
                />
                <span className="text-gray-300 text-xl font-bold">
                  {lang.name}
                </span>
              </li>
            ))}
          </ul>
        </BentoSection>
      </div>
    </section>
  );
}
