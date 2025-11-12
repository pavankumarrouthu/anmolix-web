import { Heading, Subheading } from "@/components/ui/heading";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Unified Platform",
    description: "AI + Productivity + Collaboration all in one place.",
  },
  {
    title: "Intelligence-First",
    description: "Designed for intelligence, not just automation.",
  },
  {
    title: "Scalable & Secure",
    description: "Built for scalability, privacy, and enterprise adoption.",
  },
  {
    title: "Human-Centered AI",
    description: "Focus on meaningful productivity and human amplification.",
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Why Anmolix?</Heading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
