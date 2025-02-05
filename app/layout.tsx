import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Adrià Sala's Personal Website",
  description:
    "Get to know about my professional experience and skills. Don't hesitate to contact me to know more!",
  authors: [{ name: 'Adrià Sala', url: 'https://github.com/adriasala12' }],
  keywords: [
    'Adrià Sala',
    'Full Stack Developer',
    'Software Engineer',
    'Personal Website',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.className} flex flex-col items-center min-h-screen p-16 md:p-24 antialiased bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]`}
      >
        <FloatingDock
          desktopClassName={cn('gap-8 ')}
          mobileClassName={cn('fixed bottom-0 left-0 mb-4 ml-4')}
          items={NAVIGATION_ITEMS}
        />
        <main className="flex flex-col md:flex-row flex-grow items-center w-full max-w-screen-2xl justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
