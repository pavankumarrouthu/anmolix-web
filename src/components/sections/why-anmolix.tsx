import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers, ShieldCheck, Zap, BarChart3, Scaling, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Unified Intelligence",
    description: "Productivity and collaboration, finally together."
  },
  {
    icon: Zap,
    title: "Seamless Automation",
    description: "Let AI handle the busywork."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description: "Enterprise-grade reliability for all users."
  },
  {
    icon: Scaling,
    title: "Inclusive Design",
    description: "Built for individuals to enterprises."
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Advancing with AI + Quantum innovation."
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built Different. Built for You.</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center p-6 bg-card/50 border border-border rounded-2xl shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
                 <CardHeader className="p-0 flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-3">
                     <Icon className="h-6 w-6 text-primary" />
                   </div>
                    <CardTitle className="font-sans text-base font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="text-center mt-12 text-muted-foreground italic">Anmolix isn’t replacing human effort - it’s amplifying it.</p>
      </div>
    </section>
  );
}
