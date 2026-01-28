import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero-new";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Vision } from "@/components/sections/vision";
import { WhoFor } from "@/components/sections/who-for";
import { Footer } from "@/components/layout/footer";
import { Roadmap } from "@/components/sections/roadmap";
import { WhyAnmolix } from "@/components/sections/why-anmolix";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Roadmap />
        <Features />
        <WhyAnmolix />
        <WhoFor />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
