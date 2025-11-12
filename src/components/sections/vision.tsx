import { Heading, Subheading } from "@/components/ui/heading";
import { Goal, Glasses } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2" className="text-background">Driven by Intelligence. Guided by Purpose.</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background/10 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Glasses className="h-10 w-10 text-accent"/>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-3">Vision</h3>
            <Subheading className="text-primary-foreground/80">
              To build the world’s most adaptive productivity ecosystem — where AI understands your workflow, empowers your growth, and connects you seamlessly to your goals.
            </Subheading>
          </div>
          <div className="bg-background/10 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Goal className="h-10 w-10 text-accent"/>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-3">Mission</h3>
            <Subheading className="text-primary-foreground/80">
              To enable individuals and organizations to work intelligently through automation, analytics, and collaboration — redefining how productivity and creativity coexist.
            </Subheading>
          </div>
        </div>
      </div>
    </section>
  );
}
