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
            Today’s generation—students, founders, professionals, and teams—all face the same hidden struggle: people are losing control of their time. Distractions are stronger, schedules are chaotic, and consistency is dying. People don’t lack talent. They lack **structure**.
          </p>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <Heading as="h3" className="mb-4 text-2xl md:text-3xl">
            A New Era of Structured Intelligence
          </Heading>
          <p className="text-muted-foreground sm:text-lg">
            Anmolix introduces a disciplined, intelligent, and beautifully structured way of working that helps people and teams eliminate chaos, maintain daily discipline, and build powerful habits. Because productivity is not just about working hard—it’s about working **intelligently and on time.**
          </p>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
            <Heading as="h3" className="text-2xl md:text-3xl">On Time. Every Time.</Heading>
            <blockquote className="mt-4">
                <p className="text-xl italic text-muted-foreground">
                  “Anmolix doesn’t just remind you—it guides you. It doesn’t just track tasks—it structures your day. It doesn’t just show productivity—it builds it inside you.”
                </p>
            </blockquote>
        </div>
      </div>
    </section>
  );
}
