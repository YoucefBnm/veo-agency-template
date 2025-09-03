import { About } from "@/sections/about";
// import { Work } from "@/sections/work";
import { Process } from "@/sections/process";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { Team } from "@/sections/team";
import { Testimonials } from "@/sections/testimonials";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        {/* <Work /> */}
        <Services />
        <Team />
        <Process />
        <Testimonials />
    </>
  );
}
