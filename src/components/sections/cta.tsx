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
          Shape the Future of Work with Anmolix
        </Heading>
        <Subheading className="mx-auto mb-8 max-w-2xl">
          Join our journey toward intelligent productivity. Whether you’re a student, founder, or business leader — Anmolix is built for how you grow.
        </Subheading>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="https://lnkd.in/gk7n2qfx" target="_blank" rel="noopener noreferrer">
              Join the Waitlist
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:contact@anmolix.com">
              Collaborate with Us
            </a>
          </Button>
        </div>
         <p className="mt-8 text-sm text-muted-foreground">Already over 3,000 early users and growing every week.</p>
      </div>
    </section>
  );
}