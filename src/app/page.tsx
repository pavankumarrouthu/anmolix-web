import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Vision } from "@/components/sections/vision";
import { WhyAnmolix } from "@/components/sections/why-anmolix";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhoFor } from "@/components/sections/who-for";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhoFor />
        <Features />
        <Vision />
        <WhyAnmolix />
        <Journey />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
