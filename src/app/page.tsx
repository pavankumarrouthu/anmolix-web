import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero-new";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Other sections will be added here */}
      </main>
      {/* Footer will be added here */}
    </div>
  );
}
