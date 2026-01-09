import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitCommit, Bot, MessageSquare, ListTree } from "lucide-react";

const benefits = [
  {
    icon: ListTree,
    title: "Beyond Static Lists",
    description: "Traditional tools are passive databases. Anmolix is an active system that models behavioral variance, not just static math."
  },
  {
    icon: Bot,
    title: "Active Agents, Not Passive UI",
    description: "Instead of waiting for clicks, our agents proactively update schedules, notify stakeholders, and manage dependencies."
  },
  {
    icon: MessageSquare,
    title: "Anchored Decisions, Not Floating Chat",
    description: "Context isn't lost in a separate tool. Decisions are anchored directly to tasks, creating a permanent audit trail."
  },
];

export function WhyAnmolix() {
  return (
    <section id="why-anmolix" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading as="h2">Beyond Static Management</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        <p className="text-center mt-12 text-muted-foreground italic">Anmolix isn't another project management tool. It's a new category.</p>
      </div>
    </section>
  );
}
