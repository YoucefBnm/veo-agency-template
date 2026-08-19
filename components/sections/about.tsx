import { Marquee } from '@/components/marquee';

export function About() {
  return (
    <section className="py-2">
      <Marquee className="[--duration:20s] flex gap-4 items-center">
        <div className="brutal-shadow bg-secondary rounded aspect-square size-12 p-0.5">
          <div className="rounded-[2px] overflow-hidden">
            <img
              src="/showcase-mac-mockup.png"
              alt="showcase"
              width={180}
              height={180}
            />
          </div>
        </div>

        <div className="place-content-center">
          <h1 className="text-4xl font-bold ">
            Focused strategy led studio that marries brand thinking with product
            design and frontend engineering to build digital experiences people
            remember
          </h1>
        </div>

        <div className="brutal-shadow bg-secondary rounded aspect-square size-12 p-0.5">
          <div className="rounded-[2px] overflow-hidden">
            <img
              src="/showcase-phone-mockup.png"
              alt="showcase"
              width={180}
              height={180}
            />
          </div>
        </div>

        <div className="place-content-center">
          <h1 className="text-4xl font-bold ">
            Focused strategy led studio that marries brand thinking with product
            design and frontend engineering to build digital experiences people
            remember
          </h1>
        </div>
      </Marquee>
    </section>
  );
}
