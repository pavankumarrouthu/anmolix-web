import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";

export function Cta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30 text-foreground">
      <div className="container mx-auto px-4 text-center relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full"
        >
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.1),rgba(255,255,255,0))]"></div>
        </div>
        <Heading as="h2" className="mb-4">
          Join the Future of Intelligent Work
        </Heading>
        <Subheading className="mx-auto mb-8 max-w-2xl">
          Whether you’re a student, startup, or enterprise — Anmolix is your companion for intelligent productivity.
        </Subheading>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:contact@anmolix.com">
              Collaborate with Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
