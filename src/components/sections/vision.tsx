import { Heading, Subheading } from "@/components/ui/heading";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <Heading as="h2" className="text-foreground mb-4">From Static Plans to Living Systems</Heading>
          <Subheading>
            Our vision is a world where project plans adapt automatically, teams don’t babysit tools, and coordination happens silently in the background. Anmolix is the first step toward self-managing engineering systems.
          </Subheading>
        </div>
      </div>
    </section>
  );
}
