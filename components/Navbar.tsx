import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center self-center items-center bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-full px-2 py-4 ml-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <Link
          href="/"
          className="p-4 hover:bg-zinc-800 rounded-full transition-all hover:shadow-lg hover:shadow-zinc-800/20 hover:translate-x-0.5 active:translate-x-0"
        >
          <Image src="/window.svg" alt="Home" width={24} height={24} />
        </Link>

        <Link
          href="/projects"
          className="p-4 hover:bg-zinc-800 rounded-full transition-all hover:shadow-lg hover:shadow-zinc-800/20 hover:translate-x-0.5 active:translate-x-0"
        >
          <Image src="/file.svg" alt="Projects" width={24} height={24} />
        </Link>

        <Link
          href="/contact"
          className="p-4 hover:bg-zinc-800 rounded-full transition-all hover:shadow-lg hover:shadow-zinc-800/20 hover:translate-x-0.5 active:translate-x-0"
        >
          <Image src="/globe.svg" alt="Contact" width={24} height={24} />
        </Link>
      </div>
    </nav>
  );
}
