import Image from 'next/image';
import {
  Slideshow,
  SlideshowImageContainer,
  SlideshowImageWrap,
  SlideshowIndicator,
} from '../systaliko-ui/slideshow';
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '../systaliko-ui/text-stagger-hover';

interface Client {
  id: string;
  clientName: string;
  imageUrl: string;
  services: string[];
}
const CLIENTS: Client[] = [
  {
    id: 'client-enera',
    clientName: 'Enera Group',
    imageUrl: '/client-enera.png',
    services: ['Brand identity', 'Social media'],
  },
  {
    id: 'client-cognify',
    clientName: 'Cognify AI',
    imageUrl: '/client-cognify.png',
    services: ['Web app', 'Brand guidelines'],
  },
  {
    id: 'client-abla',
    clientName: 'Abla Agency',
    imageUrl: '/client-abla.png',
    services: ['UI UX', 'Prototyping'],
  },
  {
    id: 'client-bizadvisor',
    clientName: 'Bizadvisor Agency',
    imageUrl: '/client-bizadvisor.png',
    services: ['Content strategy', 'Copywriting'],
  },
  {
    id: 'client-gt',
    clientName: 'GT Energy',
    imageUrl: '/client-gt.png',
    services: ['Design', 'Motion'],
  },
];

export function Clients() {
  return (
    <section className="pt-8 pb-20 px-8">
      <Slideshow className="flex flex-wrap gap-8 justify-evenly">
        <div className=" space-y-4">
          <h2 className="font-bold text-3xl text-balance">Our Clients</h2>
          <SlideshowImageContainer className="place-content-center size-fit ">
            {CLIENTS.map((client, index) => (
              <SlideshowImageWrap
                key={index}
                index={index}
                className="max-w-full"
              >
                <Image
                  src={client.imageUrl}
                  alt={client.clientName}
                  priority={true}
                  width={374}
                  height={267}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SlideshowImageWrap>
            ))}
          </SlideshowImageContainer>
        </div>

        <div className="self-center">
          {CLIENTS.map((client, index) => (
            <SlideshowIndicator
              key={client.clientName}
              index={index}
              className="flex gap-4 items-center justify-between"
            >
              <TextStaggerHover className="flex-1 border-b py-3 col-span-3 col-start-1 cursor-pointer text-xl font-bold uppercase">
                <TextStaggerHoverActive
                  className="opacity-[inherit]"
                  animation={'top'}
                  transition={{
                    type: 'spring',
                    visualDuration: 0.3,
                    bounce: 0.1,
                  }}
                >
                  {client.clientName}
                </TextStaggerHoverActive>
                <TextStaggerHoverHidden
                  animation={'bottom'}
                  transition={{
                    type: 'spring',
                    visualDuration: 0.3,
                    bounce: 0.1,
                  }}
                >
                  {client.clientName}
                </TextStaggerHoverHidden>
              </TextStaggerHover>

              <div className="pointer-events-none col-span-2 col-start-2 flex justify-end gap-2">
                {client.services.map((service) => (
                  <span
                    className="text-xs text-primary font-medium"
                    key={service}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </SlideshowIndicator>
          ))}
        </div>
      </Slideshow>
    </section>
  );
}
