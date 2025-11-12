import { Heading } from "@/components/ui/heading";
import { Rocket, ShieldCheck, Scale, BrainCircuit, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Unified Productivity & Collaboration Platform",
  },
  {
    icon: BrainCircuit,
    title: "Powered by AI Insights",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable for All",
  },
  {
    icon: Scale,
    title: "Intuitive Design for Modern Teams",
  },
  {
    icon: Rocket,
    title: "Future-Ready — Quantum & Generative AI",
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">The Anmolix Edge – Built Different</Heading>
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
