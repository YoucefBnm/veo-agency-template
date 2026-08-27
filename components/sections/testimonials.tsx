import { ArrowUpRightIcon } from 'lucide-react';
import {
  CardsContainer,
  CardTransformed,
  ContainerScrollRotatedCards,
} from '../systaliko-ui/cards-stack-rotated';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { RatingStars } from '../systaliko-ui/rating-stars';
import React from 'react';

const TESTIMONIALS = [
  {
    id: 'testimonial-3',
    name: 'Youcef Bnm.',
    profession: 'Frontend Developer',
    rating: 5,
    quote:
      'Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!',
    avatarUrl:
      'https://lh3.googleusercontent.com/a/ACg8ocKV3NNwtqyu8_gbuVEDARpyUpTuFtb_XPAIETgsD3wbXx4F4xlE=s576-c-no',
  },
  {
    id: 'testimonial-1',
    name: 'Jessica H.',
    profession: 'Web Designer',
    rating: 4.5,
    quote:
      "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'testimonial-2',
    name: 'Lisa M.',
    profession: 'UX Designer',
    rating: 5,
    quote:
      'Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'testimonial-4',
    name: 'Jane D.',
    profession: 'UI/UX Designer',
    rating: 4.5,
    quote:
      'The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  },
];

function TestimonialCard({
  authorName,
  quote,
  rating,
  avatarUrl,
}: {
  authorName: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
}) {
  return (
    <div className="max-w-md mx-auto rounded-md border bg-card/80 backdrop-blur shadow-2xs ring ring-ring/10 space-y-6 p-8 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Avatar className="size-14 brutal-shadow">
          <AvatarImage src={avatarUrl} alt={`Portrait of ${authorName}`} />
          <AvatarFallback>
            {authorName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-muted-foreground uppercase font-medium">
          {authorName}
        </h3>
      </div>

      <RatingStars
        rating={rating ?? 5}
        className="text-primary justify-center stroke-ring/40"
      />
      <blockquote>
        <p className="text-muted-foreground">"{quote}"</p>
      </blockquote>
    </div>
  );
}
export function Testimonials() {
  return (
    <section className="relative bg-background z-2 border-b shadow-xs">
      <ContainerScrollRotatedCards className="container mx-auto h-[300vh] ">
        <div className="sticky overflow-hidden left-0 top-0 h-screen w-full py-12 grid grid-cols-1 grid-rows-[max-content_100px] items-center justify-center *:col-start-1 ">
          <h1 className="row-start-1 block text-center text-6xl md:text-8xl xl:text-10xl font-extrabold uppercase tracking-wider">
            testimonials
          </h1>
          <CardsContainer className="row-start-1 size-full h-100 w-full">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                index={index + 2}
                incrementRotation={index * 10}
                className="p-1 size-full place-content-center"
              >
                <TestimonialCard
                  authorName={testimonial.name}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  avatarUrl={testimonial.avatarUrl}
                />
              </CardTransformed>
            ))}
          </CardsContainer>

          <div className="relative z-2 row-start-2 text-center">
            <Button variant={'secondary'} size={'lg'}>
              View all testimonials <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
      </ContainerScrollRotatedCards>
    </section>
  );
}
