import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Unified Intelligence",
    description: "AI-powered productivity and collaboration in one ecosystem."
  },
  {
    title: "Built for Scale",
    description: "From students to enterprises, Anmolix adapts with you."
  },
  {
    title: "Data-Driven Clarity",
    description: "Smart analytics that turn effort into insight."
  },
  {
    title: "Privacy & Security First",
    description: "Your data. Your control."
  },
  {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            return (
              <Card key={index} className="text-center p-6 bg-secondary/30 rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300 border-0">
                 <CardHeader className="p-0">
                    <CardTitle className="font-headline text-lg font-bold mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
