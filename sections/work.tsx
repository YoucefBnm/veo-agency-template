import { CardsStackContainer, CardSticky } from "@/components/systaliko-ui/cards/cards-stack";
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WORK_PROJECTS = [
    {
      id: 'work-project-3',
      title: 'YCF DEV',
      services: ['Portfolio', 'Partnership', 'UI UX Design'],
      imageUrl:
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 'work-project-2',
      title: 'Marketing Agency',
      services: ['Partnership', 'UI UX Design', 'Development'],
      imageUrl:
      'https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'work-project-1',
      title: 'Stridath Ecommerce',
      services: ['E-Commerce', 'Branding', 'UI UX Design', 'Development'],
      imageUrl:
        'https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'    },
  ];
  

export function Work() {
    return (
        <section className="py-12 px-8">
                <div className="flex justify-between gap-4 mb-8">
                    <div className="space-y-4">
                    <TextStaggerInview animation="bottom" as="h2" className="text-5xl md:text-6xl font-extrabold">Case studies</TextStaggerInview>
                    <p className="text-muted-foreground max-w-[45ch] text-sm">
                        We design and build digital products that combine brand clarity, user-focused UX, and fast front-end engineering. 
                    </p>

                    </div>
                    <Button variant={'secondary'}>
                        Explore all cases
                    </Button>
                </div>

                <CardsStackContainer className="min-h-[300vh] flex flex-col items-center gap-16">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            incrementY={10}
            incrementZ={10}
            className="md:w-4/5 mx-auto bg-card border"
          >
          
           <div className="max-h-[80vh] aspect-video">
           <Image
           className="w-full max-h-full"
              width={906}
              height={604}
              src={project.imageUrl}
              alt="project"
            />
           </div>
              <div className="flex flex-wrap items-center justify-between gap-4 p-6">
              <h2 className="text-4xl font-bold">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <Badge variant={'outline'} key={service}>
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </CardSticky>
        ))}
      </CardsStackContainer>
        </section>
    )
}