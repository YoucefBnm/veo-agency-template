'use client';
import { motion } from 'motion/react';

import {
  ScrollAnimation,
  ScrollScale,
} from '@/components/systaliko-ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PROCESS_PHASES = [
  {
    id: 'phase-1',
    title: 'Discover',
    duration: 'Week 1',
    description:
      'Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.',
  },
  {
    id: 'phase-2',
    title: 'Design',
    duration: 'Weeks 2-4',
    description:
      'In the Design phase, we work together to create a comprehensive brand strategy that aligns with your goals and vision. This includes defining your brand voice, messaging, and visual identity, as well as developing a brand style guide.',
  },
  {
    id: 'phase-3',
    title: 'Build',
    duration: 'Weeks 5-8',
    description:
      "In the Build phase, we build your brand's digital presence, including your website, social media accounts, and marketing materials. This includes creating a content strategy, developing a user experience, and optimizing your website for search engines.",
  },
  {
    id: 'phase-4',
    title: 'Grow',
    duration: 'Ongoing',
    description:
      "In the Grow phase, we continue to build on your brand's digital presence, monitoring and adjusting your strategy as needed. This includes gathering feedback, analyzing data, and making data-driven decisions to improve your brand over time.",
  },
];

export function Process() {
  return (
    <section className="">
      {/* class="framer-8mukyd hidden-isgikf" */}
      <div className="grid grid-rows-1 grid-cols-12 justify-center gap-3 w-full h-min relative">
        {/* progress wrap */}
        <div
          style={{
            gridColumn: 'span 12',
          }}
          className=" place-self-start sticky w-full top-0 left-0 h-screen overflow-visible"
        >
          {/* framer-y46wyr-container */}
          <motion.div className="size-200 bg-muted relative">
            {/* framer-bTJ2D framer-11iqsbt framer-v-kuzptj */}
            <div className="border border-red-500 size-full rounded-full">
              {/* framer-1g20gsm-container */}
              <div className="w-200 h-[36px] absolute top-[calc(50%-18px)] left-[calc(50%-400px)]">
                {/* framer-E4Qq7 framer-MZjhb framer-1gq3se framer-v-1gq3se */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
