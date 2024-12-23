import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen p-8">
      <Navbar />

      {/* Main content */}
      <main className="flex flex-wrap flex-1 ml-24">
        {/* Left half - Introduction */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Hello!
            </h1>
            <p className="text-3xl leading-relaxed text-zinc-300">
              My name is{' '}
              <span className="font-semibold text-violet-300">Adrià Sala</span>{' '}
              and I&apos;m a{' '}
              <span className="font-semibold text-indigo-300">
                Full Stack Software Developer
              </span>
              !
            </p>
          </div>
        </div>

        {/* Right half - Memoji Video */}
        <div className="flex-1 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[32rem] h-[32rem] object-cover"
          >
            <source src="/memoji.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
}
