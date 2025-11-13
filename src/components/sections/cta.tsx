import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";

export function Cta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30 text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4">
          Shape the Future of Work with Anmolix
        </Heading>
        <Subheading className="mx-auto mb-8 max-w-2xl">
          Join our journey toward intelligent productivity. Whether you’re a student, founder, or business leader - Anmolix is built for how you grow.
        </Subheading>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent" asChild>
            <a href="mailto:pavanrouthu.ai@gmail.com">
              Collaborate with Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
