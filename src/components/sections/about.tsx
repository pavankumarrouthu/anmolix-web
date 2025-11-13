import { Heading, Subheading } from "@/components/ui/heading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Subheading className="font-semibold text-primary">The Problem & The Anmolix Promise</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            The World Has a Focus Problem. We’re Solving It.
          </Heading>
          <p className="text-lg text-muted-foreground">
            Today’s generation faces a hidden struggle: people are losing control of their time. Distractions are stronger, schedules are chaotic, and consistency is dying. People don’t lack talent. They lack **structure**.
          </p>
          <p className="mt-8 text-lg text-muted-foreground">
            Anmolix introduces a disciplined, intelligent, and structured way of working that helps you eliminate chaos and build powerful habits. Because productivity isn’t just about working hard—it’s about working **intelligently and on time.**
          </p>
          <blockquote className="mt-12">
            <p className="text-xl italic text-foreground/80">
              “Anmolix doesn’t just remind you—it guides you. It doesn’t just track tasks—it structures your day. It doesn’t just show productivity—it builds it inside you.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
