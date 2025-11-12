import { Heading, Subheading } from "@/components/ui/heading";
import { Goal, Glasses } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2" className="text-foreground">Our North Star</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background/10 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Glasses className="h-10 w-10 text-accent"/>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-3">Vision</h3>
            <Subheading className="text-muted-foreground">
              To build the world’s most adaptive productivity ecosystem — where intelligence amplifies human potential.
            </Subheading>
          </div>
          <div className="bg-background/10 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Goal className="h-10 w-10 text-accent"/>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-3">Mission</h3>
            <Subheading className="text-muted-foreground">
              To make work simple, efficient, and inspiring through AI-driven collaboration, intelligent automation, and meaningful analytics.
            </Subheading>
          </div>
        </div>
         <div className="text-center mt-12">
            <p className="text-lg italic text-muted-foreground">“We don’t just build software — we build intelligence that understands how you work.”</p>
        </div>
      </div>
    </section>
  );
}
