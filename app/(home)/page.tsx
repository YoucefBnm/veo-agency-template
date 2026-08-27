import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Team } from '@/components/sections/team';
import { Work } from '@/components/sections/work';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/sections/footer';
import { Process } from '@/components/sections/process';
import { Values } from '@/components/sections/values';
import { Cta } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <Cta />
    </>
  );
}
