import {
  Parallax,
  PrallaxContainer,
  ParallaxItem,
} from '@/components/systaliko-ui/parallax';
const parallax_item_styles =
  'max-w-3xs [&_img]:w-full h-fit rounded  brutal-shadow  bg-secondary p-2 overflow-hidden';
export function Work() {
  return (
    <section className="border-b">
      <Parallax className="container mx-auto  h-[3600px] md:h-[2000px] p-12">
        <div className="sticky z-2 top-0 mix-blend-difference text-background h-screen place-content-center max-w-fit mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl  font-extrabold uppercase tracking-wider">
            Brand Strategy
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider">
            UX & Product Design
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider">
            Web Development
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider">
            Motion & Interaction
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider">
            Content & Copywriting
          </h1>
        </div>
        <PrallaxContainer className="flex flex-wrap justify-between gap-4 w-full">
          <ParallaxItem className={parallax_item_styles} start={200} end={-200}>
            <img
              src="showcase-phone-mockup-lg.png"
              alt="phone mockup"
              width={478}
              height={592}
            />
          </ParallaxItem>
          <ParallaxItem className={parallax_item_styles} start={600} end={100}>
            <img
              src="/template-brekenheimer.png"
              alt="showcase"
              width={475}
              height={598}
            />
          </ParallaxItem>
          <ParallaxItem className={parallax_item_styles} start={800} end={200}>
            <img
              src="/showcase-mac-mockup-lg.png"
              alt="showcase"
              width={374}
              height={374}
            />
          </ParallaxItem>
          <ParallaxItem className={parallax_item_styles} start={800} end={300}>
            <img
              src="/showcase-carecover.png"
              alt="showcase"
              width={378}
              height={320}
            />
          </ParallaxItem>
        </PrallaxContainer>
      </Parallax>
    </section>
  );
}
