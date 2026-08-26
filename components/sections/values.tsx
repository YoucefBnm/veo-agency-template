import {
  CircleCard,
  CircleCards,
  CircleItem,
} from '../systaliko-ui/circle-cards';
import { Button } from '../ui/button';

interface ValueT {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  outputRange: [number, number];
  inputRange: [number, number];
}
const VALUES_CONTENT: ValueT[] = [
  {
    id: 'value-strategy',
    imageUrl: '/values-strategy-icon.png',
    title: 'Starategy first',
    description:
      'We start with a clear strategy and build a product that solves real problems.',
    outputRange: [-30, 20],
    inputRange: [0, 0.4],
  },
  {
    id: 'value-craft',
    imageUrl: '/values-craft-icon.png',
    title: 'Craft driven',
    description:
      'We design with craft, not with a blueprint. We build modern web products using component-driven development.',
    outputRange: [-30, 19.5],
    inputRange: [0.3, 0.7],
  },
  {
    id: 'value-business',
    imageUrl: '/values-business-icon.png',
    title: 'Business minded',
    description:
      'automated testing, and performance-first best practices. Our code is documented and deliverable-ready.',
    outputRange: [-30, 19],
    inputRange: [0.6, 1],
  },
];

function ValueCard({
  imageUrl,
  title,
  description,
}: Omit<ValueT, 'outputRange' | 'inputRange'>) {
  return (
    <div className="max-w-xs space-y-12 p-10 rounded-sm border bg-card/80 backdrop-blur text-card-foreground text-center flex flex-col justify-center items-center">
      <img src={imageUrl} alt={title} width={80} height={80} />

      <div className="space-y-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-sm text-balance text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
export function Values() {
  return (
    <section className="relative py-16 max-w-7xl mx-auto">
      <div className="flex gap-10">
        <CircleCards className="w-full h-[300vh]" spacerClassName="h-0">
          <div className="sticky overflow-hidden flex items-center gap-10 top-0 left-0 w-full h-screen">
            <div className="place-content-center p-8 max-w-md space-y-3">
              <h2 className="font-bold text-3xl text-balance">
                Bold brands for beautiful products
              </h2>
              <p className="text-sm text-muted-foreground text-balance">
                Focused strategy led studio that marries brand thinking with
                product design and frontend engineering to build digital
                experiences people remember
              </p>
              <Button>Discover</Button>
            </div>
            {VALUES_CONTENT.map((value, index) => {
              return (
                <CircleItem
                  key={index}
                  outputRange={value.outputRange}
                  inputRange={value.inputRange}
                  className="top-4/6 pointer-events-none"
                >
                  <CircleCard>
                    <ValueCard
                      id={value.id}
                      imageUrl={value.imageUrl}
                      title={value.title}
                      description={value.description}
                    />
                  </CircleCard>
                </CircleItem>
              );
            })}
          </div>
        </CircleCards>
      </div>
    </section>
  );
}
