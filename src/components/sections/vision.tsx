import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <Heading as="h2" className="mb-4">Stop Routing. Start Executing.</Heading>
          <Subheading className="text-primary-foreground/80">
            Anmolix is building the autonomous execution layer for modern engineering. A future where coordination is silent, schedules are resilient, and teams are free to build.
          </Subheading>
        </div>
         <div className="flex justify-center">
            <Button size="lg" variant="secondary" asChild>
                <Link href="#beta">
                    Join Early Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
