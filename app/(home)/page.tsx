import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Values } from '@/components/sections/values';
import { Cta } from '@/components/sections/cta';
import { Showcase } from '@/components/sections/showcase';
import { Work } from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Values />
      <Work />
      <Cta />
    </>
  );
}
