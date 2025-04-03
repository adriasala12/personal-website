// @ts-ignore
import memoji from '@/assets/memoji.MOV';

export default function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen md:flex-row max-w-screen-2xl mx-auto px-10 pt-8 md:pt-16 items-center"
    >
      <div className="flex flex-[2] items-center justify-center mb-0 md:mb-16 md:pr-24">
        <div>
          <h1 className="text-7xl lg:text-9xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Hello!
          </h1>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed max-w-lg text-zinc-300">
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

      <div className="flex flex-1 items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[50vw] h-[50vh] -mt-8 md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] object-cover"
        >
          <source src={memoji} type="video/mp4" />
          {/* TODO: Add a fallback image */}
          <p className="text-orange-400">
            Your browser does not support the video tag.
          </p>
        </video>
      </div>
    </section>
  );
}
