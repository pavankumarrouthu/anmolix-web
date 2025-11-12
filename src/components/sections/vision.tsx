import { Heading, Subheading } from "@/components/ui/heading";

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <Heading as="h2" className="text-foreground mb-4">Shaping the Future of Intelligent Work</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-background/50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-headline font-bold mb-3">Vision</h3>
            <Subheading className="text-muted-foreground">
             To redefine productivity through intelligence — creating a world where technology empowers human potential at every level.
            </Subheading>
          </div>
          <div className="bg-background/50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-headline font-bold mb-3">Mission</h3>
            <Subheading className="text-muted-foreground">
             To simplify, optimize, and elevate the way teams and individuals work through intelligent automation, collaboration, and real-time insights.
            </Subheading>
          </div>
        </div>
      </div>
    </section>
  );
}