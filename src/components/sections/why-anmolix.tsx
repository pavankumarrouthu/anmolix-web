import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ShieldCheck, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "Unified Productivity & Collaboration Platform",
  },
  {
    icon: BarChart3,
    title: "Powered by AI Insights",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable for All",
  },
  {
    icon: CheckCircle2,
    title: "Intuitive Design for Modern Teams",
  },
  {
    icon: Zap,
    title: "Future-Ready — Quantum & Generative AI",
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built Different</Heading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center p-6 bg-background/50 rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300 border-0">
                 <CardHeader className="p-0 flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-3">
                     <Icon className="h-6 w-6 text-primary" />
                   </div>
                    <CardTitle className="font-headline text-lg font-bold">{benefit.title}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
