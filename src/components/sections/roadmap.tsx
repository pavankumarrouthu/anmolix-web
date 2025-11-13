import { Heading, Subheading } from "@/components/ui/heading";
import { CheckCircle } from "lucide-react";

const roadmapSteps = [
    {
      title: "Pilot Testing",
      description: "Currently live with selected partners",
      status: "complete",
    },
    {
      title: "Beta Launch",
      description: "Coming soon",
      status: "next",
    },
    {
      title: "Global Rollout",
      description: "Planned for 2025",
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
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-5 h-full w-0.5 bg-border/40" />
          <div className="relative flex flex-col gap-12">
            {roadmapSteps.map((step, index) => (
               <div key={index} className="flex items-start gap-6">
                 <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step.status === 'complete' ? 'bg-primary' : 'bg-muted'} ring-8 ring-secondary z-10 shrink-0`}>
                  {step.status === 'complete' ? <CheckCircle className="h-6 w-6 text-primary-foreground" /> : <span className="text-muted-foreground font-bold">{index + 1}</span>}
                 </div>
                 <div>
                    <h3 className="font-headline font-bold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
