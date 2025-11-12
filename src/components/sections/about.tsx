import { Heading, Subheading } from "@/components/ui/heading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-4">
          Where intelligence meets collaboration.
        </Heading>
        <Subheading className="mx-auto mb-8">
          Anmolix is building a next-generation productivity and collaboration
          ecosystem powered by Artificial Intelligence and Quantum-inspired
          technology. We aim to unify how teams work, communicate, and make
          decisions — eliminating complexity and enabling intelligent
          performance across every level of the organization.
        </Subheading>

        <div className="max-w-3xl mx-auto border-l-4 border-primary pl-6 text-left">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground">
            Our focus is simple yet powerful: Make organizations self-optimizing, transparent, and truly intelligent.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
