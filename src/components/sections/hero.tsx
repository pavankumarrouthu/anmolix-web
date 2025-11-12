import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
       <div
        aria-hidden="true"
        className="absolute inset-0 top-0 -z-10 h-full w-full bg-background"
      >
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-auto right-auto left-0 top-0 h-[500px] w-[500px] translate-x-[30%] -translate-y-[20%] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--accent)/0.05),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <Heading as="h1" className="mb-6">
          Empowering the Future of Work. Intelligently.
        </Heading>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Anmolix is an AI-driven productivity and collaboration platform built for the next generation of individuals, startups, and teams — helping you achieve more with intelligence, clarity, and flow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#vision">
              Explore Vision <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
         <p className="mt-6 text-sm text-muted-foreground italic">
            Built for Students, Founders, Teams & Growing Businesses.
        </p>
      </div>
    </section>
  );
}
