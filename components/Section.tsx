'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Section({ children }: { children: React.ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const rawOpacity = useTransform(scrollYProgress, (v) => 1 - v);

  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });

  return (
    <motion.section
      className="snap-start snap-always h-screen w-full"
      style={{ opacity: 1 }}
      ref={targetRef}
    >
      {children}
    </motion.section>
  );
}
