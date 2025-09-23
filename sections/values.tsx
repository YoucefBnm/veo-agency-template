'use client';
import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';
import { ANIMATION_VARIANTS } from '@/components/systaliko-ui/utils/animation-variants';
import { Button } from '@/components/ui/button';
import { Axis3dIcon, Building2Icon, ListStartIcon } from 'lucide-react';
import { stagger } from 'motion';
import { motion } from 'motion/react';

const VALUES = [
  {
    id: 'value-craft',
    title: 'Craft driven',
    icon: Axis3dIcon,
    description:
      'We design with craft, not with a blueprint. We build modern web products using component-driven development, automated testing, and performance-first best practices. Our code is documented and deliverable-ready.',
  },
  {
    id: 'value-startegy',
    title: 'Strategy first',
    icon: ListStartIcon,
    description:
      'We start with a clear strategy and build a product that solves real problems. We focus on user research, information architecture, and product flows that solve real problems.',
  },
  {
    id: 'value-business',
    title: 'Business minded',
    icon: Building2Icon,
    description:
      'We understand the business and its needs. We craft messaging that fits your brand and speaks to real user needs — from hero lines and product microcopy to onboarding flows and launch email sequences.',
  },
];

export function Values() {
  const variants = ANIMATION_VARIANTS['right'];
  return (
    <section className="pt-12 pb-16 px-8">
      <div className="lg:grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <TextStaggerInview
            as="h2"
            animation="bottom"
            className="text-4xl md:text-5xl font-bold"
          >
            Bold brands, Beautiful products for Real growth
          </TextStaggerInview>
          <Button>Request demo</Button>
        </div>
        <motion.div
          className="
            grid grid-cols-2 grid-rows-[50px_1fr_50px_1fr_50px] gap-4 
            [&>*]:row-span-2 
            [&>*:nth-child(2)]:row-start-2
        "
          transition={{ delayChildren: stagger(0.2) }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.id}
              className="py-6 px-4 space-y-4 shadow bg-card rounded-xl border place-content-center"
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div>
                <value.icon className="size-6 text-muted-foreground" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
              <p className="text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
