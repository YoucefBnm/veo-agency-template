import {
  FloatingElementItem,
  FloatingElements,
} from '../systaliko-ui/floating-elements';
import { Button } from '../ui/button';

function CtaText() {
  return (
    <div className="flex-1 min-w-md space-y-6 px-8 ">
      <h2 className="font-bold text-3xl text-balance">
        Build your brand's digital presence
      </h2>

      <p className="max-w-[50ch] text-balance text-muted-foreground">
        Monitor and adjust your brand’s strategy as needed, by gathering
        feedback, analyzing data and making data driven decisions to improve
        your brand over time.
      </p>

      <div className="flex gap-3 items-center justify-start flex-wrap">
        <div className="flex gap-1 items-center text-sm">
          <span className="text-primary font-bold">+150</span>
          <span>Projects completed</span>
        </div>
        <div className="flex gap-1 items-center text-sm">
          <span className="text-primary font-bold">98%</span>
          <span>Clients satisfaction</span>
        </div>
        <div className="flex gap-1 items-center text-sm">
          <span className="text-primary font-bold">+10</span>
          <span>Years in business</span>
        </div>
      </div>
      <FloatingElements>
        <FloatingElementItem intensity={5}>
          <Button>Start your project now</Button>
        </FloatingElementItem>
      </FloatingElements>
    </div>
  );
}

function CtaMedia() {
  return (
    <FloatingElements className="max-w-md px-6 grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1">
      <div className="overflow-hidden rounded-md">
        <img src="/bg-noise.png" alt="texture" width={720} height={554} />
      </div>
      <FloatingElementItem intensity={5} className="-rotate-3">
        <img
          src="/showcase-support.png"
          alt="consumer support"
          width={720}
          height={488}
        />
      </FloatingElementItem>

      <FloatingElementItem
        intensity={5}
        className="relative z-2 -rotate-20 translate-x-2/10 translate-y-1/15"
      >
        <img
          src="/showcase-dashboard.png"
          alt="dashboard"
          width={426}
          height={312}
          className="inline-block align-middle"
        />
      </FloatingElementItem>
    </FloatingElements>
  );
}

export function Cta() {
  return (
    <section className="overflow-hidden py-16">
      <div className="flex items-center gap-8 flex-wrap justify-evenly">
        <CtaText />
        <CtaMedia />
      </div>
    </section>
  );
}
