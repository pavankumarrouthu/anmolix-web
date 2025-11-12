import { Heading, Subheading } from "@/components/ui/heading";
import { Rocket, ShieldCheck, Scale, BrainCircuit, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Unified Intelligence",
    description: "AI-powered productivity and collaboration in one ecosystem."
  },
  {
    icon: BrainCircuit,
    title: "Built for Scale",
    description: "From students to enterprises, Anmolix adapts with you."
  },
  {
    icon: Scale,
    title: "Data-Driven Clarity",
    description: "Smart analytics that turn effort into insight."
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security First",
    description: "Your data. Your control."
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Quantum and Generative AI foundations for tomorrow."
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Why Anmolix? Because Simplicity Meets Intelligence.</Heading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center p-6 bg-secondary/30 rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300 border-0">
                 <CardHeader className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="font-headline text-lg font-bold">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-2">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
