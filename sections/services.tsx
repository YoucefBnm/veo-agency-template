import { CardsStackContainer, CardSticky } from "@/components/systaliko-ui/cards/cards-stack"

const SERVICES_CARDS = [
    {
        id: 'service-starategy-identity-service',
        title: 'Brand Strategy & Identity',
        description: 'Names, visual systems and messaging that resonate. (Benefit: clarity that wins trust fast.)',
    },
    {
        id: 'UX-Product-design-service',
        title: 'UX & Product Design',
        description: 'Research-backed flows and interfaces that convert. (Benefit: fewer drop-offs, happier users.)',
    },
    {
        id: 'web-development-service',
        title: 'Web Development',
        description: 'React/Next.js builds, performant and maintainable. (Benefit: fast, secure, and easy to iterate.)',
    },
    {
        id: 'Motion-interaction-service',
        title: 'Motion & Interaction',
        description: 'Delightful micro-interactions and page transitions. (Benefit: emotional polish that improves engagement.)'
    },
    {
        id: 'content-copywriting-service',
        title: 'Content & Copywriting',
        description: 'Voice-first content that reflects your brand personality. (Benefit: clearer value & better SEO.)'
    },
    {
        id: 'growth-anilytics-service',
        title: 'Growth & Analytics',
        description: 'A/B testing, funnels and analytics to scale confidently. (Benefit: decisions backed by data.)'
    }
]

export function Services() {
    return (
        <section>
             <CardsStackContainer className="min-h-[300vh]">
        {SERVICES_CARDS.map((service, index) => (
          <CardSticky
            key={service.id}
            index={index}
            className="min-h-[50vh] py-8 px-12 flex flex-wrap md:flex-nowrap md:gap-8 justify-between items-start even:border bg-card odd:bg-muted"
            incrementY={120}
            incrementZ={0}
          >
            <div className="flex items-start gap-2">
                <sup className="font-black text-muted-foreground">{index+1}</sup>
                <h3 className="text-5xl max-w-[13ch] font-bold">{service.title}</h3>
            </div>

            <p className="text-xl b">{service.description}</p>
          </CardSticky>
        ))}
      </CardsStackContainer>
        </section>
    )
}