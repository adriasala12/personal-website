import linkedinLogo from '@/assets/linkedin.svg';

export default function ContactPage() {
  return (
    <section className="min-h-[600px] w-full md:px-10">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl mt-24 ml-2 font-bold pb-2 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent max-w-4xl">
          {/* TODO: USE FLIP WORDS https://ui.aceternity.com/components/flip-words */}
          Let's make something awesome together!
        </h2>
        <div className="mt-8 flex flex-col items-start gap-6">
          <p className="text-lg text-gray-300 max-w-3xl">
            I'm always open to new opportunities, collaborations, or just an
            interesting chat. Feel free to reach out!
          </p>
          <a
            href="https://www.linkedin.com/in/adriasalaroget"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800/80 hover:bg-gray-900 text-gray-300 px-6 py-3 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
            <span className="text-lg font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
