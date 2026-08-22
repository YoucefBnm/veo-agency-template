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

const animationVariants = ANIMATION_VARIANTS['bottom'];
const SHOWCASE_ELEMENTS = [
  {
    label: 'showcase-gt-hero',
    image: { url: '/showcase-gt-hero.png', width: 180, height: 120 },
    className: 'hidden md:block top-[10%] left-[-5%] -rotate-15',
  },
  {
    label: 'showcase-breinkhier-locations',
    image: {
      url: '/showcase-breinkhier-locations.png',
      width: 180,
      height: 110,
    },
    className: 'bottom-0 left-[10%] -rotate-30',
  },
  {
    label: 'showcase-phone-mockup',
    image: { url: '/showcase-phone-mockup.png', width: 180, height: 180 },
    className: 'top-[-15%] left-[40%] -rotate-30',
  },
  {
    label: 'showcase-bizadvisor-hero',
    image: { url: '/showcase-bizadvisor-hero.png', width: 180, height: 180 },
    className: 'hidden md:block top-[-10%] right-[0%] rotate-30',
  },
  {
    label: 'showcase-stridath-hero',
    image: { url: '/showcase-stridath-hero.png', width: 180, height: 140 },
    className: 'top-[40%] right-[-5%] -rotate-15',
  },
];

function ShowcaseCard({
  label,
  image,
}: {
  label: string;
  image: { url: string; width: number; height: number };
}) {
  return (
    <div className="w-40 h-fit rounded border  overflow-hidden">
      <img
        className="block object-cover size-full"
        alt={label}
        src={image.url}
        width={image.width}
        height={image.height}
      />
    </div>
  );
}
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
    <FloatingElements className="size-full relative ">
      {SHOWCASE_ELEMENTS.map((showcase) => (
        <InfiniteFloatingItem
          className={`absolute size-fit ${showcase.className}`}
          key={showcase.label}
        >
          <ShowcaseCard label={showcase.label} image={showcase.image} />
        </InfiniteFloatingItem>
      ))}
    </FloatingElements>
  );
}
export function Hero() {
  return (
    <section className="overflow-x-clip overflow-y-visible">
      <div className="container mx-auto h-screen bg-grid-pattern grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center items-center">
        <HeroMedia />

        <HeroText />
      </div>
    </section>
  );
}
