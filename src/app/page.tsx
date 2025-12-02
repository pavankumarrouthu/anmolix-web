import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { FounderNote } from "@/components/sections/founder-note";
import { Vision } from "@/components/sections/vision";
import { WhyAnmolix } from "@/components/sections/why-anmolix";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhoFor } from "@/components/sections/who-for";
import { Roadmap } from "@/components/sections/roadmap";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhoFor />
        <Features />
        <Vision />
        <WhyAnmolix />
        <Roadmap />
        <FounderNote />
      </main>
      <Footer />
    </div>
  );
}
