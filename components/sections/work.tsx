import React from 'react';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '../systaliko-ui/card-hover-reveal';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: { url: string; width: number; height: number };
  services: string[];
  description: string;
}
const PROJECTS: Project[] = [
  {
    id: 'project-abla',
    title: 'Abla Design Agency',
    image: { url: '/work-abla-lg.png', width: 628, height: 780 },
    services: ['UI UX', 'Prototyping'],
    description:
      'Collaborative design and prototyping agency for creative and innovative design solutions, From concept to creation, we transformed the vision into reality.',
  },
  {
    id: 'project-health',
    title: 'Carecover startup',
    image: {
      url: '/work-dashboard-lg.png',
      width: 302,
      height: 378,
    },
    services: ['Development', 'Analytics'],
    description:
      'Making dashboard and analytics to streamline the cover plan process, disyplaying the data and providing insights.',
  },
  {
    id: 'project-cognify',
    title: 'Cognify AI',
    image: {
      url: '/work-cognify-lg.png',
      width: 302,
      height: 378,
    },
    services: ['Web app', 'Brand guidelines'],
    description:
      'Making the ai model brand guidelines and web app for the best user experience.',
  },
  {
    id: 'project-enera',
    title: 'Enera Group',
    image: {
      url: '/work-enera-lg.png',
      width: 628,
      height: 379,
    },
    services: ['Brand strategy', 'Social media'],
    description:
      'Collaborated with the group to create a brand strategy and social media campaigns, From concept to creation, we transformed the vision into reality.',
  },
];

function ProjectCard({
  project,
  className,
  ...props
}: React.ComponentProps<'div'> & { project: Project }) {
  const { title, image, services, description } = project;
  return (
    <CardHoverReveal
      className={cn(
        'rounded-3xl overflow-hidden bg-secondary ring-2 ring-border/20 shadow',
        className,
      )}
      {...props}
    >
      <CardHoverRevealMain>
        <Image
          width={image.width}
          height={image.height}
          alt={title}
          src={image.url}
        />
      </CardHoverRevealMain>

      <CardHoverRevealContent className="inset-0 flex flex-col justify-between gap-4 bg-black/80 text-white rounded-[inherit]">
        <div className="space-y-3">
          <h3 className="font-bold text-xl line-clamp-1">{title}</h3>
          <p className="text-xs text-balance text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center flex-wrap justify-between">
          <Button variant={'ghost'}>
            View project <ArrowRightIcon />
          </Button>
          <div className="flex gap-1 items-center ">
            {services.map((service) => (
              <span
                className="text-xs text-muted-foreground font-medium"
                key={service}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </CardHoverRevealContent>
    </CardHoverReveal>
  );
}
export function Work() {
  return (
    <section className="p-12 pb-20">
      <div className="container mx-auto space-y-10">
        <div className="space-y-4 max-w-lg">
          <h2 className="font-bold text-3xl text-balance">Selected Projects</h2>
          <p className="max-w-[45ch] text-muted-foreground text-balance">
            Taking a deep dive into clients vision and engaging to grasp brand’s
            identity and goals and the essence the clients want to convey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center md:grid md:grid-cols-12 md:grid-rows-2 gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="first:col-span-6 row-span-2 nth-[2]:col-span-3 nth-[2]:row-span-1 nth-[3]:col-span-3 nth-[3]:row-span-1 nth-[4]:col-span-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
