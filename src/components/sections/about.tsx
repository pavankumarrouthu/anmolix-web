import { Heading, Subheading } from "@/components/ui/heading";
import { Layers, BrainCircuit, Scaling } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    icon: Layers,
    title: "Unified Ecosystem",
    text: "A single platform for productivity, collaboration, and project management.",
  },
  {
    icon: BrainCircuit,
    title: "Enabling AI in Workplace",
    text: "Automate tasks and gain intelligent recommendations to work smarter.",
  },
  {
    icon: Scaling,
    title: "Built For Growth",
    text: "Designed to scale with you, from individual students to entire enterprises.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Subheading className="font-semibold text-primary">About Anmolix</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            Where Productivity Meets Intelligence
          </Heading>
          <p className="text-lg text-muted-foreground">
            Anmolix is building the next-generation workspace, bridging productivity with collaboration in one intelligent platform. We help people and organizations streamline work, automate tasks, and enable AI for smoother workflows and better results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                    <Card key={index} className="bg-card/50 shadow-sm hover:shadow-primary/10 transition-shadow duration-300 rounded-2xl border-border">
                        <CardHeader className="flex flex-col items-center text-center">
                             <div className="p-3 bg-primary/10 rounded-full mb-2">
                                <Icon className="h-6 w-6 text-primary" />
                             </div>
                            <CardTitle className="font-sans text-lg">{highlight.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center pt-0">
                            <p className="text-sm text-muted-foreground">
                                {highlight.text}
                            </p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-foreground/80 tracking-wide">
            Work smarter. Collaborate faster. Grow intelligently.
        </p>
      </div>
    </section>
  );
}
