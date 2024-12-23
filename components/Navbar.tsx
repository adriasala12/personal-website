import Link from 'next/link';
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: UserIcon,
  },
  {
    name: 'Experience',
    href: '/experience',
    icon: BriefcaseIcon,
  },
  {
    name: 'Skills',
    href: '/skills',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Education',
    href: '/education',
    icon: AcademicCapIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: EnvelopeIcon,
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center self-center items-center bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-full px-2 py-4 ml-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="p-4 hover:bg-zinc-800 rounded-full transition-all hover:shadow-lg hover:shadow-zinc-800/20 hover:translate-x-0.5 active:translate-x-0"
          >
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
