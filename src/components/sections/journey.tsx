import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const journeySteps = [
    {
      title: "Pilot Testing",
      description: "Real users, real feedback",
      status: "active",
    },
    {
      title: "Beta Launch (Coming Soon)",
      description: "Early access program",
      status: "inactive",
    },
];

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <Heading as="h2">Evolving Through Intelligence. Step by Step.</Heading>
        </div>
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/40" />
          <div className="relative flex flex-col gap-16">
            {journeySteps.map((step, index) => (
               <div key={index} className="flex items-center gap-8">
                 <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'order-last text-left'}`}>
                     <Card className="inline-block shadow-lg bg-secondary/50 border-0 text-left">
                       <CardHeader>
                         <CardTitle className="font-headline">{step.title}</CardTitle>
                       </CardHeader>
                       <CardContent>
                         <p className="text-muted-foreground">{step.description}</p>
                       </CardContent>
                     </Card>
                 </div>
                 <div className={`w-4 h-4 rounded-full ${step.status === 'active' ? 'bg-primary' : 'bg-muted'} ring-8 ring-background z-10`}></div>
                 <div className="w-1/2"></div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
