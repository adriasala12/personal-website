import {
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { FloatingDock } from './components/floating-dock.tsx';
import BentoBoxPage from './containers/BentoBoxPage/BentoBoxPage.tsx';
import ContactPage from './containers/ContactPage.tsx';
import ExperiencePage from './containers/ExperiencePage/ExperiencePage.tsx';
import HomePage from './containers/HomePage.tsx';

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    id: 'home',
    icon: <HomeIcon />,
  },
  {
    title: 'Experience',
    id: 'experience',
    icon: <BriefcaseIcon />,
  },
  {
    title: 'Tech Stack',
    id: 'bento',
    icon: <WrenchScrewdriverIcon />,
  },
  {
    title: 'Education',
    id: 'bento',
    icon: <AcademicCapIcon />,
  },
  {
    title: 'Contact',
    id: 'contact',
    icon: <EnvelopeIcon />,
  },
];

function App() {
  return (
    <div className="antialiased bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]">
      <nav>
        <FloatingDock
          desktopClassName="gap-8 fixed z-10 top-28 left-1/2 transform -translate-x-1/2"
          mobileClassName="fixed z-10 bottom-0 left-0 mb-4 ml-4"
          items={NAVIGATION_ITEMS}
        />
      </nav>

      <main>
        <HomePage />
        <ExperiencePage />
        <BentoBoxPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;
