import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Values } from '@/components/sections/values';
import { Cta } from '@/components/sections/cta';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Plans } from '@/components/sections/plans';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Work />
      <Plans />
      <Cta />
      <Footer />
    </>
  );
}
