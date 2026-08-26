'use client';
import { motion, MotionConfig } from 'motion/react';
import { ContainerStagger } from '@/components/systaliko-ui/container-stagger';
import {
  FloatingElements,
  FloatingElementItem,
  InfiniteFloatingItem,
} from '@/components/systaliko-ui/floating-elements';
import { ANIMATION_VARIANTS } from '@/components/systaliko-ui/animation-variants';
import { Button } from '@/components/ui/button';
import FigmaIcon from '../icons/figma-icon';
import CanvasIcon from '../icons/canvas-icon';
import Webflow from '../icons/webflow-icon';
import ClaudeIcon from '../icons/claude-icon';
import FramerIcon from '../icons/framer-icon';
import GoogleIcon from '../icons/google-icon';

const animationVariants = ANIMATION_VARIANTS['bottom'];
const SHOWCASE_ELEMENTS = [
  {
    label: 'hero-icon-figma',
    icon: FigmaIcon,
    className: '[&>svg]:w-5 top-[10%] left-[10%]',
  },
  {
    label: 'hero-icon-canvas',
    icon: CanvasIcon,
    className: '[&>svg]:w-12 top-[60%] left-0',
  },
  {
    label: 'hero-icon-adobe',
    icon: Webflow,
    className: '[&>svg]:w-9 bottom-[5%] left-[40%]',
  },
  {
    label: 'hero-icon-claude',
    icon: ClaudeIcon,
    className: '[&>svg]:w-8 right-0 top-2/3',
  },
  {
    label: 'hero-icon-framer',
    icon: FramerIcon,
    className: '[&>svg]:w-5 right-0 top-[5%]',
  },
  {
    label: 'hero-icon-google',
    icon: GoogleIcon,
    className: '[&>svg]:w-6 right-[10%] top-[40%]',
  },
];

function HeroText() {
  return (
    <ContainerStagger
      className="relative z-2 p-8 max-w-3xl mx-auto text-center space-y-5"
      initial="hidden"
      animate="visible"
    >
      <MotionConfig transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <motion.h1
          className="text-4xl max-w-[22ch] text-balance font-black"
          variants={animationVariants}
        >
          We build brands and products people remember
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-[45ch] text-balance font-medium mx-auto"
          variants={animationVariants}
        >
          Crafting exceptional digital experiences through innovative design
          solutions, From concept to creation, we transform your vision into
          reality.
        </motion.p>

        <motion.div variants={animationVariants}>
          <FloatingElements className="flex gap-2 justify-center">
            <FloatingElementItem intensity={5}>
              <Button>Start your project</Button>
            </FloatingElementItem>
            <FloatingElementItem intensity={5}>
              <Button variant="secondary">View our work</Button>
            </FloatingElementItem>
          </FloatingElements>
        </motion.div>
      </MotionConfig>
    </ContainerStagger>
  );
}

function HeroMedia() {
  return (
    <FloatingElements className="size-full  relative ">
      {SHOWCASE_ELEMENTS.map((showcase) => (
        <InfiniteFloatingItem
          className={`absolute -z-1 size-14 bg-muted ring ring-ring/10 rounded-sm flex items-center justify-center ${showcase.className}`}
          key={showcase.label}
        >
          <showcase.icon />
        </InfiniteFloatingItem>
      ))}
    </FloatingElements>
  );
}
export function Hero() {
  return (
    <section
      className="overflow-x-clip overflow-y-visible"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, var(--background) 0%, transparent 150%)
        `,
        // mixBlendMode: 'multiply',
      }}
    >
      <div className="container mx-auto h-screen grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center items-center">
        <HeroMedia />

        <HeroText />
      </div>
    </section>
  );
}
