import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";

export function Cta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4">
          Join the Future of Intelligent Work
        </Heading>
        <Subheading className="mx-auto mb-8">
          Whether you’re a student, startup, or enterprise — Anmolix is your companion for intelligent productivity.
        </Subheading>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:pavanrouthu.ai@gmail.com">
              Collaborate with Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
