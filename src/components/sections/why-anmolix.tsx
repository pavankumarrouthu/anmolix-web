import { Heading, Subheading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, ShieldCheck, Zap, BarChart3, Users } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "Unified Intelligence",
    description: "AI-powered productivity and collaboration in one ecosystem."
  },
  {
    icon: Users,
    title: "Built for Scale",
    description: "From students to enterprises, Anmolix adapts with you."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Clarity",
    description: "Smart analytics that turn effort into insight."
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security First",
    description: "Your data. Your control."
  },
  {
    icon: Zap,
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
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center p-6 bg-secondary/50 rounded-2xl shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300 border-0">
                 <CardHeader className="p-0 flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-3">
                     <Icon className="h-6 w-6 text-primary" />
                   </div>
                    <CardTitle className="font-headline text-lg font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
