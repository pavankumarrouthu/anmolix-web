import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";

export function Cta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4 text-background">
          Be part of the future of intelligent work.
        </Heading>
        <Subheading className="mx-auto mb-8 text-primary-foreground/80">
          Whether you’re a student, startup, or organization — Anmolix is built to help you grow.
        </Subheading>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:contact@anmolix.com">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
