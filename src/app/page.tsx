import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Vision } from '@/components/sections/vision';
import { Features } from '@/components/sections/features';
import { TechStack } from '@/components/sections/tech-stack';
import { WhyAnmolix } from '@/components/sections/why-anmolix';
import { Journey } from '@/components/sections/journey';
import { Cta } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Vision />
        <Features />
        <TechStack />
        <WhyAnmolix />
        <Journey />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
