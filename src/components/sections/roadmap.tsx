import { Heading, Subheading } from "@/components/ui/heading";
import { CheckCircle, Clock } from "lucide-react";

const roadmapSteps = [
    {
      title: "Pilot Testing",
      description: "Getting Ready",
      icon: Clock,
      status: "next",
    },
    {
      title: "Beta Launch",
      description: "Coming soon",
      icon: CheckCircle,
      status: "future",
    }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Heading as="h2">Our Progress</Heading>
            <Subheading className="mt-4 max-w-2xl mx-auto">Every update brings us closer to redefining how the world works.</Subheading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              return(
               <div key={index} className="flex items-start gap-6 p-6 bg-card/50 rounded-2xl border border-border">
                 <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0`}>
                  <Icon className="h-6 w-6 text-primary" />
                 </div>
                 <div>
                    <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                 </div>
               </div>
              )
            })}
        </div>
      </div>
    </section>
  );
}
