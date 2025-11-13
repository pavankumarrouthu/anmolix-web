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
        <div className="text-center mb-16">
            <Heading as="h2">Our Progress</Heading>
            <Subheading className="mt-4 max-w-2xl mx-auto">Every update brings us closer to redefining how the world works.</Subheading>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-center">
                  <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                     <div className={`p-6 bg-card/50 rounded-2xl border border-border inline-block ${isLeft ? 'mr-[-1px]' : 'ml-[-1px]'}`}>
                        <div className="flex items-center gap-4">
                          <h3 className="font-sans font-bold text-lg">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                     </div>
                  </div>
                  
                  {/* Dot on the timeline */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary">
                       <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
