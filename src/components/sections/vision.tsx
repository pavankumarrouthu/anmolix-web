import { Heading, Subheading } from "@/components/ui/heading";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <Heading as="h2" className="text-foreground mb-4">Shaping the Future of Intelligent Work</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card/50 border border-border p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-sans font-bold mb-3 text-primary">Vision</h3>
            <Subheading className="text-muted-foreground">
             To create a world where work becomes effortless — powered by intelligence, guided by purpose.
            </Subheading>
          </div>
          <div className="bg-card/50 border border-border p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-sans font-bold mb-3 text-primary">Mission</h3>
            <Subheading className="text-muted-foreground">
             To empower individuals and organizations to achieve their highest potential through intelligent automation, seamless collaboration, and data-driven clarity.
            </Subheading>
          </div>
        </div>
        <div className="text-center mt-12">
            <p className="text-lg italic text-muted-foreground">“We’re not building another tool. We’re building the future of how people work.”</p>
        </div>
      </div>
    </section>
  );
}
