import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 font-semibold text-primary">For Students. For Founders. For Teams. For You.</p>
        <Heading as="h1" className="mb-6">
          Empower Your Work. Intelligently.
        </Heading>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Anmolix is an AI-driven productivity and collaboration ecosystem that helps individuals, founders, and teams work smarter, faster, and more meaningfully — all in one intelligent space.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              Join the Waitlist
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#vision">
              Explore the Vision <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Currently in Pilot Testing • Beta Launch Coming Soon</p>
      </div>
    </section>
  );
}
