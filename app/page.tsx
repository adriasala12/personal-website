'use client';

import { FloatingDock } from '@/components/ui/floating-dock';
import { cn } from '@/lib/utils';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'About',
    href: '/about',
    icon: <UserIcon />,
  },
  {
    title: 'Experience',
    href: '/experience',
    icon: <BriefcaseIcon />,
  },
  {
    title: 'Skills',
    href: '/skills',
    icon: <WrenchScrewdriverIcon />,
  },
  {
    title: 'Education',
    href: '/education',
    icon: <AcademicCapIcon />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <EnvelopeIcon />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-16 md:p-24">
      <FloatingDock
        desktopClassName={cn('gap-8 ')}
        mobileClassName={cn('fixed bottom-0 left-0 mb-4 ml-4')}
        items={NAVIGATION_ITEMS}
      />

      <main className="flex flex-col md:flex-row flex-grow items-center w-full max-w-screen-2xl justify-between">
        <div className="flex flex-1 items-center justify-center mb-0 md:mb-16 md:pr-24">
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

        <div className="flex items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[50vw] h-[50vh] -mt-8 md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] object-cover"
          >
            <source src="/memoji.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
}
