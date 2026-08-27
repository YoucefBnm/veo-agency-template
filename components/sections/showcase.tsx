'use client';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import React from 'react';
import {
  Parallax,
  ParallaxItem,
  PrallaxContainer,
} from '../systaliko-ui/parallax';
import { useIsMobile } from '@/app/hooks/use-mobile';

const TITLES = [
  'creative branding engineering design development',
  'prototyping research analysis data flows',
  'product thinking design data engagement',
];
function HeadingLg({
  text,
  className,
  ...props
}: HTMLMotionProps<'h1'> & { text: string }) {
  const words = text.split(' ');

  return (
    <motion.h1
      {...props}
      className={cn(
        'text-5xl xl:text-6xl font-extrabold uppercase origin-bottom-left whitespace-nowrap',
        className,
      )}
      {...props}
    >
      {words.map((word, index) => (
        <span key={index} className="inline mx-2">
          {word}
        </span>
      ))}
    </motion.h1>
  );
}

export function ShowcaseDesktop() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const skewVelocity = useTransform(smoothVelocity, [0, 1], [0, -45]);
  const reversSkeyVelocity = useTransform(smoothVelocity, [0, 1], [0, 45]);

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const reversTranslateX = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const smoothTranslateX = useSpring(translateX, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  return (
    <Parallax ref={ref} className="h-300 relative">
      <div className="sticky top-0 left-0 py-4 min-h-screen space-y-12 place-content-center overflow-hidden">
        {TITLES.map((title, index) => (
          <HeadingLg
            key={index}
            text={title}
            style={{
              skewX: index % 2 === 0 ? skewVelocity : reversSkeyVelocity,
              x: index % 2 === 0 ? smoothTranslateX : reversTranslateX,
            }}
            className="even:text-muted-foreground even:place-self-end"
          />
        ))}
      </div>
      <PrallaxContainer className="absolute h-screen w-full left-0 bottom-0">
        <ParallaxItem className="max-w-56 p-4" start={0} end={-300}>
          <img
            src="/work-cognify.png"
            width={432}
            height={520}
            alt="showcase"
          />
        </ParallaxItem>

        <ParallaxItem
          className="max-w-56 p-4 justify-self-center"
          start={0}
          end={-100}
        >
          <img src="/work-enera.png" width={432} height={520} alt="showcase" />
        </ParallaxItem>

        <ParallaxItem
          className="max-w-56 p-4 justify-self-end"
          start={0}
          end={-100}
        >
          <img src="/work-abla.png" width={432} height={520} alt="showcase" />
        </ParallaxItem>
      </PrallaxContainer>
    </Parallax>
  );
}

function ShowcaseMobile() {
  return (
    <section className="py-12 px-8 space-y-8">
      <div className="flex gap-2 items-center">
        <div className="space-y-4">
          {TITLES.map((title) => (
            <h2
              key={title}
              className="even:text-muted-foreground font-bold text-2xl"
            >
              {title}
            </h2>
          ))}
        </div>

        <div className="space-y-4">
          <div className="w-12 max-h-full rounded overflow-hidden">
            <img
              src="/work-cognify.png"
              width={432}
              height={520}
              alt="street"
            />
          </div>
          <div className="w-12 max-h-full rounded overflow-hidden">
            <img src="/work-enera.png" width={432} height={520} alt="street" />
          </div>
          <div className="w-12 max-h-full rounded overflow-hidden">
            <img src="/work-abla.png" width={432} height={520} alt="street" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const isMobile = useIsMobile();
  return isMobile ? <ShowcaseMobile /> : <ShowcaseDesktop />;
}
