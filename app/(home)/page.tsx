import { About } from '@/components/sections/about';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Team } from '@/components/sections/team';
import { Work } from '@/components/sections/work';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}
