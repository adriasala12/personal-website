// https://ui.aceternity.com/components/floating-dock

import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; id: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; id: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'block md:hidden fixed z-[100] bottom-0 left-0 mb-4 ml-4',
        className,
      )}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleScroll(item.id);
                  }}
                  key={item.title}
                  className="h-10 w-10 rounded-full text-white bg-neutral-900 flex items-center justify-center"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center"
      >
        <Bars3Icon className="h-5 w-5 text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; id: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isSticky && (
        <div
          className="hidden md:flex fixed top-0 left-0 w-full h-[12vh] z-[99] pointer-events-none backdrop-blur-md bg-gradient-to-b from-neutral-900/0 to-neutral-900/100"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
          }}
        />
      )}

      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className={cn(
          'hidden md:flex md:fixed h-16 gap-8 z-[100] top-28 left-1/2 transform -translate-x-1/2 items-end rounded-2xl bg-neutral-900 px-4 pb-3 transition-all duration-300',
          isSticky ? 'top-5' : '',
          className,
        )}
      >
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    </>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  id,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  id: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button type="button" onClick={() => handleScroll(id)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="px-2 py-0.5 whitespace-pre rounded-md border bg-neutral-800 border-neutral-900 text-white translate-1/2 absolute -top-12 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
