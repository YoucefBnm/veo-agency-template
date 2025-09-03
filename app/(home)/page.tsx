import { About } from "@/sections/about";
import { Cta } from "@/sections/cta";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { Team } from "@/sections/team";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Team />
        <Services />
        <Features />
        <Testimonials />
        <Cta />
    </>
  );
}
