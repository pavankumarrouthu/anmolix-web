import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComingSoonDialog } from "../ComingSoonDialog";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
       <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
       <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[150px]" />
      <div className="container mx-auto px-4 text-center relative">
        <p className="mb-4 font-semibold text-primary">For Students. For Founders. For Teams. For You.</p>
        <Heading as="h1" className="mb-6">
          Empower Your Work - Intelligently
        </Heading>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Anmolix is a platform that enables AI by bridging productivity with collaboration in an ecosystem that helps individuals, founders, and teams work smarter, faster, and more meaningfully—all in one intelligent space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#vision">
              Explore Vision<ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
