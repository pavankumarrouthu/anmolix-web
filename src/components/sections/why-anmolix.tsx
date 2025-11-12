import { Heading } from "@/components/ui/heading";
import { Rocket, ShieldCheck, Scale, BrainCircuit, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Unified AI + Productivity Platform",
  },
  {
    icon: Scale,
    title: "Built for Every Scale",
    description: "From Student Projects to Enterprise Teams",
  },
  {
    icon: BrainCircuit,
    title: "Intuitive Design, Powerful Intelligence",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Scalable, and Data-Driven",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Quantum & Generative AI Integration"
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Anmolix Edge – Why Choose Us?</Heading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-headline text-lg font-bold mb-2">{benefit.title}</h3>
                {benefit.description && <p className="text-sm text-muted-foreground">{benefit.description}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
