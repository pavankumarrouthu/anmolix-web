import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    title: "Unified Productivity & Collaboration Platform",
  },
  {
    title: "Powered by AI Insights",
  },
  {
    title: "Secure & Scalable for All",
  },
  {
    title: "Intuitive Design for Modern Teams",
  },
  {
    title: "Future-Ready — Quantum & Generative AI",
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Built Different</Heading>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            return (
              <Card key={index} className="text-center p-6 bg-secondary/30 rounded-lg shadow-sm hover:shadow-primary/10 hover:scale-105 transition-all duration-300 border-0">
                 <CardHeader className="p-0">
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
