import { ArrowUpRightIcon } from 'lucide-react';
import { CardsStackContainer, CardSticky } from '../systaliko-ui/cards-stack';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const SERVICES_CARDS = [
  {
    id: 'service-starategy-identity-service',
    title: 'Brand Strategy & Identity',
    imageUrl: '/showcase-gt.png',
    description:
      'help teams uncover a clear brand position and translate it into a concise voice and visual system. From naming and messaging to logo systems and brand guidelines.',
    subServices: ['Typography', 'Brand Guidelines', 'Logos', 'Colors'],
  },
  {
    id: 'UX-Product-design-service',
    title: 'UX & Product Design',
    imageUrl: '/showcase-mac-mockup.png',
    description:
      'focus on user research, information architecture, and product flows that solve real problems. Our designs are tested with prototypes and guided by metrics so you ship features that move KPIs.',
    subServices: ['Information Architecture', 'Prototyping', 'User Research'],
  },
  {
    id: 'web-development-service',
    title: 'Web Development',
    imageUrl: '/showcase-phone-mockup.png',
    description:
      'build modern web products using component-driven development, automated testing, and performance-first best practices. Our code is documented and deliverable-ready.',
    subServices: ['Frontend', 'Backend', 'Database'],
  },
  {
    id: 'Motion-interaction-service',
    title: 'Motion & Interaction',
    imageUrl: '/showcase-breinkhier-locations.png',
    description:
      'Motion should inform, not distract. We design micro-interactions and page-level transitions that guide attention, improve perceived performance, and make products feel polished.',
    subServices: ['Animation', 'Motion Design', 'Interaction Design'],
  },
  {
    id: 'content-copywriting-service',
    title: 'Content & Copywriting',
    imageUrl: '/showcase-bizadvisor-hero.png',
    description:
      'We craft messaging that fits your brand and speaks to real user needs — from hero lines and product microcopy to onboarding flows and launch email sequences.',
    subServices: ['Content Strategy', 'Copywriting', 'Brand Messaging'],
  },
];

export function Services() {
  return (
    <section className="py-16 px-8">
      <CardsStackContainer className="container mx-auto min-h-[300vh] space-y-12">
        {SERVICES_CARDS.map((service, index) => (
          <CardSticky
            key={service.id}
            index={index}
            className="min-h-[60vh] py-8 px-12 flex gap-12 justify-between items-start flex-wrap bg-card ring ring-ring/10 rounded-md"
            incrementY={80}
            incrementZ={0}
          >
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <sup className="font-extrabold">{index + 1}</sup>
                <h3 className="text-4xl max-w-[13ch] font-extrabold text-balance">
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.subServices.map((subService) => (
                  <Badge variant={'secondary'} key={subService}>
                    {subService}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded brutal-shadow p-0.5 max-w-34">
              <img
                src={service.imageUrl}
                alt={service.title}
                width={180}
                height={180}
              />
            </div>

            <div className="space-y-4 lg:flex-1">
              <p className="text-muted-foreground text-balance">
                {service.description}
              </p>
              <Button variant="secondary" size="sm">
                Find out more <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardSticky>
        ))}
      </CardsStackContainer>
    </section>
  );
}
