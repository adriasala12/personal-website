'use client';

import ExperiencePage from '@/components/pages/ExperiencePage/ExperiencePage';
import HomePage from '@/components/pages/HomePage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SECTIONS = [HomePage, ExperiencePage, HomePage];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="h-screen relative overflow-y-scroll snap-y snap-mandatory"
    >
      {SECTIONS.map((Component, index) => {
        const sectionRef = useRef(null);

        const { scrollYProgress: sectionProgress } = useScroll({
          target: sectionRef,
          container: containerRef,
          offset: ['start end', 'end start'], // Detect when section enters/exits view
        });

        const opacity = useTransform(sectionProgress, [0, 0.5, 0.8], [0, 1, 0]);

        return (
          <motion.section
            // biome-ignore lint/suspicious/noArrayIndexKey: array is static
            key={index}
            ref={sectionRef}
            className="h-screen flex items-center justify-center snap-start"
          >
            {/* Motion div to apply opacity effect */}
            <motion.div
              style={{ opacity }}
              className="w-full h-full flex items-center justify-center"
            >
              <Component />
            </motion.div>
          </motion.section>
        );
      })}
    </main>
  );
}
