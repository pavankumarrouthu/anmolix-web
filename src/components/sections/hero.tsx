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
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(191,0,255,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-auto right-auto left-0 top-0 h-[500px] w-[500px] translate-x-[30%] -translate-y-[20%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(75,0,130,0.1),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <Heading as="h1" className="mb-6">
          Empowering the Future of Work with AI-Driven Intelligence
        </Heading>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Anmolix is redefining productivity and collaboration for modern teams through intelligent automation, data-driven insights, and a unified workspace designed to help organizations move faster, think smarter, and achieve more.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#vision">
              Explore Vision <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              Join the Beta
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
